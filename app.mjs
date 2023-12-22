import axios from 'axios';
import { WBK } from 'wikibase-sdk';
import readline from 'readline';

// Configurações da sua instância do Wikibase
const config = {
  instance: 'https://web.bdij.com.br',
  sparqlEndpoint: 'https://web.bdij.com.br/query/sparql',
};

// Instanciação da biblioteca
const wdk = WBK(config);

// Configurar a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Perguntar ao usuário qual entityId deseja consultar
rl.question('Digite o entityId da entidade desejada: ', (entityId) => {
  // Exemplo: Consulta para obter detalhes de uma entidade por ID
  const url = wdk.getEntities({ ids: entityId, languages: ['pt-br'], claims: 'all' });

  // Requisição HTTP usando Axios
  axios.get(url)
    .then(response => {
      const entityData = response.data.entities[entityId];
      console.log('Detalhes da Entidade:', entityData);
      rl.close(); // Fechar a interface de leitura após a conclusão da consulta
    })
    .catch(error => {
      console.error('Erro na Requisição:', error);
      rl.close(); // Fechar a interface de leitura em caso de erro
    });
});

// Lidar com o evento de fechamento da interface de leitura
rl.on('close', () => {
  console.log('Programa encerrado.');
  process.exit(0);
});
