# HackBRASA

## Sobre o Projeto

Este projeto foi desenvolvido para ajudar empreendedores brasileiros a gerenciar e analisar suas finanças de maneira mais eficiente. A aplicação oferece uma solução prática para extrair dados financeiros de documentos digitalizados, como recibos e notas fiscais, e apresentá-los de forma clara e organizada. Com nossa solução, o controle e a visualização de suas finanças ficam literalmente na palma da sua mão.


### Soluções Oferecidas

1. **Processamento de Imagens com OCR**: Utilizamos o Tesseract.js no backend para extrair texto de imagens enviadas pelos usuários. Isso permite que os empreendedores façam upload de recibos ou notas fiscais e extraiam dados financeiros relevantes diretamente dos documentos digitalizados.

2. **Geração de Gráficos Demonstrativos**: Com base nos dados extraídos das imagens, a aplicação cria gráficos e visualizações que ajudam a interpretar e analisar as informações financeiras. Esses gráficos oferecem uma visão clara das transações e vendas.

3. **Registro e Armazenamento de Vendas**: Todos os dados financeiros extraídos são registrados e armazenados em uma base de dados. Isso permite um acompanhamento detalhado e histórico das vendas efetuadas, facilitando a gestão financeira dos empreendedores.

4. **Edição e Controle de Estoque**: O aplicativo permite que os vendedores atualizem facilmente as informações de vendas diretamente no sistema. Essa funcionalidade facilita o controle do estoque e a gestão das quantidades de produtos, proporcionando um melhor acompanhamento e planejamento das vendas e do inventário.

## Como Rodar o Projeto

### Requisitos

Certifique-se de ter as seguintes ferramentas instaladas:
- Node.js (v18 ou superior)
- npm (ou yarn)

### Passos

1. **Clone o Repositório**

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. **Instale as Dependências**

    Navegue até o diretório `Front-end/client` e instale as dependências:

    ```bash
    cd Front-end/client
    npm install
    ```

    Em seguida, vá para o diretório do backend (assumindo que você tenha um diretório separado para o backend) e instale as dependências:

    ```bash
    cd ../backend
    npm install
    ```

3. **Inicie o Servidor**

    Para rodar o projeto localmente, inicie o backend e o frontend com os seguintes comandos:

    **No diretório do backend:**

    ```bash
    npm run start
    ```

    **No diretório do frontend:**

    ```bash
    cd ../Front-end/client
    npm run dev
    ```

### Visualização em Dispositivos Móveis

**A aplicação foi projetada para funcionar de forma ideal em dispositivos móveis, como a tela da maquininha de pagamento.** Para garantir a melhor experiência, é crucial abrir a aplicação diretamente em um dispositivo móvel ou visualizar a aplicação em um formato de celular no seu computador. A aplicação foi desenvolvida com uma interface otimizada para o tamanho e formato da tela da maquininha, e sua funcionalidade pode não ser totalmente visível ou utilizável em tamanhos de tela maiores.

Para garantir que a aplicação seja visualizada corretamente em dispositivos móveis, você pode utilizar as ferramentas de desenvolvedor do seu navegador para emular uma visualização de celular:

1. **Abra as Ferramentas de Desenvolvedor**: No Chrome, você pode abrir as ferramentas de desenvolvedor pressionando `F12` ou clicando com o botão direito na página e selecionando "Inspecionar".
2. **Ative o Modo de Emulação de Dispositivo**: Clique no ícone de dispositivo (um ícone de celular e tablet) na barra de ferramentas das ferramentas de desenvolvedor.
3. **Selecione um Dispositivo**: Escolha um dispositivo móvel da lista para emular a visualização em um formato de celular.

## Desenvolvedores

Riany Mello
Giovanna Vitória
Henrique Heron



