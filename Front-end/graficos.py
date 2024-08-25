import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime

# Ler o arquivo CSV
df = pd.read_csv('mock_tabela_final.csv')

# Converter a coluna 'Data da Compra' para datetime com o formato 'dd/mm/yyyy'
df['Data da Compra'] = pd.to_datetime(df['Data da Compra'], format='%d/%m/%Y')

# Filtrar para as datas entre 1 e 7 de agosto de 2024
start_date = datetime(2024, 8, 1)
end_date = datetime(2024, 8, 7)
df_filtered = df[(df['Data da Compra'] >= start_date) & (df['Data da Compra'] <= end_date)]

# Agrupar por data e somar as quantidades
daily_sales = df_filtered.groupby(df_filtered['Data da Compra'].dt.strftime('%d/%m/%Y'))['Quantidade'].sum()

# Verificar se daily_sales tem dados
print("Dados de vendas diárias:")
print(daily_sales)

# Verificar se há dados antes de tentar plotar
if not daily_sales.empty:
    plt.figure(figsize=(14, 7))

    plt.subplot(1, 2, 1)  # Primeiro subplot
    daily_sales.plot(kind='bar', color='skyblue', edgecolor='black')
    plt.title('Total Vendido por Dia (1 a 7 de Agosto)')
    plt.xlabel('Data')
    plt.ylabel('Quantidade Vendida')
    plt.xticks(rotation=45)

    # Criar o gráfico de pizza
    plt.subplot(1, 2, 2)  # Segundo subplot
    product_sales = df_filtered.groupby('Produto')['Quantidade'].sum()
    product_sales.plot(kind='pie', autopct='%1.1f%%', colors=plt.cm.Paired(range(len(product_sales))), legend=True)
    plt.title('Distribuição de Vendas por Produto')
    plt.ylabel('')  # Remove o rótulo do eixo y para o gráfico de pizza

    # Ajustar o layout para que o gráfico se ajuste bem
    plt.tight_layout()

    # Mostrar os gráficos
    plt.show()
else:
    print("Nenhum dado disponível para o intervalo de datas especificado.")
