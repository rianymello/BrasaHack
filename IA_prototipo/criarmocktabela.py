import pandas as pd
from datetime import datetime, timedelta
import random

# Função para gerar uma data no formato "dd/mm/yyyy"
def format_date(date):
    return date.strftime('%d/%m/%Y')

# Função para gerar uma data aleatória entre start_date e end_date
def generate_random_date(start_date, end_date):
    delta = end_date - start_date
    random_days = random.randint(0, delta.days)
    return start_date + timedelta(days=random_days)

# Gerar dados fictícios
produtos = [
    'Pão de Forma', 'Croissant', 'Torta de Morango', 'Muffin', 'Bolo de Cenoura',
    'Baguete', 'Donut', 'Pão de Queijo', 'Bolo de Chocolate', 'Torta de Limão',
    'Pão Integral', 'Brownie', 'Torta de Maçã', 'Bolo de Fubá', 'Panetone',
    'Bolo de Laranja', 'Pão Francês', 'Bolo de Morango', 'Cookies', 'Pão Australiano'
]

# Definir o intervalo de datas
start_date = datetime(2024, 8, 1)
end_date = datetime(2024, 8, 20)

# Gerar quantidades aleatórias e datas de compra
data = {
    'Produto': [random.choice(produtos) for _ in range(20)],
    'Quantidade': [random.randint(1, 15) for _ in range(20)],
    'Data da Compra': [
        format_date(generate_random_date(start_date, end_date))
        for _ in range(20)
    ]
}

# Criar DataFrame
df = pd.DataFrame(data)

# Salvar em um arquivo CSV
df.to_csv('mock_tabela_final.csv', index=False)

print("Tabela criada e salva como 'mock_tabela_final.csv'.")
