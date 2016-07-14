import { ipcRenderer } from 'electron'


export function toggleRedshift(state) {
  ipcRenderer.send('toggle-redshift', state);
}