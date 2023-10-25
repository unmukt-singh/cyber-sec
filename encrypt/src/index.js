const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
});



