import { exec } from 'child_process';
import { log, info, err } from './logger';


const redshift = (function rsFunc() {
  const start = function starting() {
    info("Starting")
    exec('redshift -t 2548K:6874K', (error, stdout, stderr) => {
      if (error) {
        err(`exec error: ${error}`);
        return;
      }
      log(`stdout: ${stdout}`);
      log(`stderr: ${stderr}`);
    });
  }

  const stop = function stopping() {
    info("Stopping Redshift using '-x' flag.")
    exec('redshift -x', (error, stdout, stderr) => {
      if (error) {
        err(`exec error: ${error}`);
        return;
      }
      log(`stdout: ${stdout}`);
      log(`stderr: ${stderr}`);
    });
  }

  const kill = function killing() {
    exec('pkill redshift', (error, stdout, stderr) => {
      info("Killing Redshift process.");
      if (error) {
        err(`exec error: ${error}`);
        return;
      }
      log(`stdout: ${stdout}`);
      log(`stderr: ${stderr}`);
    });
  }

  const preview = function previewing(setting) {
    info(`Previewing with the following settings: ${setting}`);
    exec(`redshift -O ${setting}`, (error, stdout, stderr) => {
      if (error) {
        err(`exec error: ${error}`);
        return;
      }
      log(`stdout: ${stdout}`);
      log(`stderr: ${stderr}`);
    });
  }

  return {
    start: start,
    stop: stop,
    kill: kill,
    preview: preview
  };
})();


module.exports = redshift;
