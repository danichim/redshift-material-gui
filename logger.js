import * as winston from 'winston';

const logger = new winston.Logger({
  level: 'silly',
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'somefile.log' })
  ]
});

export function info(output) {
  logger.info('info', output);
}

export function err(output) {
  logger.error('error', output);
}

export function log(output) {
  logger.log('log', output);
}