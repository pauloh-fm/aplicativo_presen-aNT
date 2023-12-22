// Use o módulo ES6 'import' para importar os módulos necessários
import { ipcRenderer } from 'electron';

const dayButtonsContainer = document.getElementById('dayButtons');
const csvFileInput = document.getElementById('csvFile');
const compileButton = document.getElementById('compileButton');

const dayButtons = new Map(); // Armazenar botões para cada dia + período

document.getElementById('addDayButton').addEventListener('click', () => {
  const period = document.getElementById('period').value;
  const days = document.getElementById('days').value;
  const dayPeriod = `${days} ${period}`;
  if (!dayButtons.has(dayPeriod)) {
    const dayButton = document.createElement('button');
    dayButton.textContent = dayPeriod;
    dayButton.addEventListener('click', () => {
      // Lidar com o clique do botão para selecionar o formulário CSV
      csvFileInput.click();
    });
    dayButtons.set(dayPeriod, dayButton);
    dayButtonsContainer.appendChild(dayButton);
  }
});

csvFileInput.addEventListener('change', () => {
  // Lógica para lidar com a seleção de formulários CSV
  const selectedFiles = csvFileInput.files;
  // Implemente a lógica para processar os arquivos selecionados
});

compileButton.addEventListener('click', () => {
  // Implemente a lógica de compilação aqui
  const period = document.getElementById('period').value;
  const days = document.getElementById('days').value;
  const inputData = { period, days };

  ipcRenderer.send('compileData', inputData);
});
