import cv2
import pytesseract
import pandas as pd
import re
import os

# Configurar o caminho para o executável do Tesseract
pytesseract.pytesseract.tesseract_cmd = r'C:\Users\mello\Downloads\BrasaHack\tesseract\tesseract.exe'

def extract_text(image):
    """Extrair o texto da imagem usando Tesseract."""
    text = pytesseract.image_to_string(image)
    return text

def parse_text_to_table(text):
    """Parse the extracted text into a table format (items, quantities)."""
    lines = text.split('\n')
    data = []
    
    # Ajustar o padrão para capturar os itens corretamente
    item_pattern = re.compile(r'(\d+)\s+(\d+)\s+([\w\s]+?)\s+([\d,]+)')
    
    print("\nInício do Parsing:")
    
    for line in lines:
        # Imprimir a linha para depuração
        print(f"Linha analisada: '{line}'")
        
        # Tentar encontrar correspondência com o padrão de item
        match = item_pattern.search(line)
        if match:
            quantity = int(match.group(2).strip())  # Quantidade
            item = match.group(3).strip()  # Nome do produto
            
            data.append([item, quantity])
        else:
            print(f"Nenhuma correspondência encontrada para: '{line}'")

    # Cria um DataFrame apenas se houver dados
    df = pd.DataFrame(data, columns=['Produto', 'Quantidade'])

    print("\nTabela Extraída:")
    print(df)
    
    return df

# Lista de caminhos para as imagens
image_paths = [
    "NotaFiscal1.png",
    "NotaFiscal2.png",
    "NotaFiscal3.png",
    "NotaFiscal4.png",
    "NotaFiscal5.png",
    "NotaFiscal6.png",
    "NotaFiscal7.png",
    "NotaFiscal8.png"
]

# Lista para armazenar DataFrames
all_tables = []

for image_path in image_paths:
    print(f"\nProcessando: {image_path}")

    # Extraindo texto da imagem original
    print("Extraindo texto da imagem original...")
    image = cv2.imread(image_path)
    if image is None:
        print(f"Não foi possível abrir a imagem: {image_path}")
        continue

    text_original = extract_text(image)

    # Imprimir o texto extraído para depuração
    print(f"Texto extraído:\n{text_original}")

    # Analisar o texto e criar a tabela
    table_original = parse_text_to_table(text_original)

    # Adiciona a tabela à lista de DataFrames
    if not table_original.empty:
        table_original['Nota Fiscal'] = os.path.basename(image_path).replace('.png', '')
        all_tables.append(table_original)
    else:
        print("Nenhuma tabela foi criada.")

    print("-" * 40)

# Concatenar todos os DataFrames em um único DataFrame
final_df = pd.concat(all_tables, ignore_index=True)

# Salvar a tabela final em um arquivo CSV
output_file = "tabela_final.csv"
final_df.to_csv(output_file, index=False)
print(f"Tabela final salva em {output_file}")
