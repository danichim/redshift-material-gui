import { ipcMain } from 'electron';
import { stop, start, kill } from './redshift';
export function events() {
  ipcMain.on('toggle-redshift', (event, state) => {
    if (state) {
      start();
    } else {
      kill();
    }
  });
}
