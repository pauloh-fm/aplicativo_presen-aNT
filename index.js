const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadFile('index.html'); // Sua página HTML com a interface do usuário

  // Lógica para ler e processar os arquivos CSV e criar o CSV de saída
  mainWindow.webContents.on('ipc-message', (event, data) => {
    if (data.action === 'compile') {
      const inputData = data.inputData; // Dados da interface do usuário
      const outputData = {}; // Dados de saída

      // Ler e processar os arquivos CSV
      fs.createReadStream('arquivo1.csv')
        .pipe(csv())
        .on('data', (row) => {
          // Implementar a lógica de processamento aqui
          // Atualizar outputData com base nos dados lidos
        })
        .on('end', () => {
          // Escrever os dados processados em um novo arquivo CSV
          const csvWriter = createCsvWriter({
            path: 'saida.csv',
            header: [/* Definir cabeçalhos aqui */],
          });

          csvWriter
            .writeRecords([/* Converter os dados processados em objetos */])
            .then(() => {
              // Concluído
            });
        });
    }
  });
});
