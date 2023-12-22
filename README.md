# bdij-sdk

Este projeto utiliza o Wikibase SDK para consultar detalhes de entidades na Base de Dados de Institutos Jurídicos.

## Configuração

1. Clone o repositório:

    ```bash
    git clone https://github.com/edpomacedo/bdij-sdk.git
    cd bdij-sdk
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure a instância do Wikibase:

    Abra o arquivo `app.js` e edite as configurações da instância do Wikibase:

    ```javascript
    const config = {
      instance: 'https://web.bdij.com.br',
      sparqlEndpoint: 'https://web.bdij.com.br/query/sparql',
    };
    ```

## Uso

1. Execute o aplicativo:

    ```bash
    node app.js
    ```

2. O aplicativo solicitará que você insira o `entityId` da entidade que deseja consultar. Digite o `entityId` e pressione Enter.

3. Os detalhes da entidade serão exibidos no console.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
