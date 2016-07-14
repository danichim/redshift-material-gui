import { exec } from 'child_process';
import { log, info, err } from './logger';


const redshift = (function() {
  var start = function() {
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

  var stop = function() {
    info("Stopping Redshift using '-x' flag.")
    exec('killall -9 redshift', (error, stdout, stderr) => {
      if (error) {
        err(`exec error: ${error}`);
        return;
      }
      log(`stdout: ${stdout}`);
      log(`stderr: ${stderr}`);
    });  
  }

  var kill = function() {
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
    
  return {
      start: start,
      stop: stop,
      kill: kill
  };
})();


module.exports = redshift;