const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile('index.html');

  ipcMain.on('compileData', (event, data) => {
    // Implemente a lógica de compilação aqui
    // Receba os dados do formulário e processe os arquivos CSV
    // Crie o novo arquivo CSV e envie o resultado de volta para a janela
  });
});
