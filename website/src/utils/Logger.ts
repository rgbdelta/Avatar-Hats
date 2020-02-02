/* eslint-disable no-console */
export interface ILogger {
  debug(message: string, error?: Error, options?: object): void;
  info(message: string, options?: object): void;
  warning(message: string, error?: Error, options?: object): void;
  error(message: string, error?: Error, options?: object): void;
  critical(message: string, options?: object): void;
}

export class Logger implements ILogger {
  private prefix: string;

  constructor(prefix: string) {
    this.prefix = `Logger: ${prefix}`;
  }

  debug(message: string, options?: object) {
    console.log('DEBUG ' + this.prefix, message, options ? options : '');
  }

  info(message: string, options?: object): void {
    console.info('INFO ' + this.prefix, message, options !== undefined ? options : '');
  }

  warning(message: string, error?: Error, options?: object) {
    console.warn(
      'WARN ' + this.prefix,
      message,
      error && error.message ? error.message : JSON.stringify(error),
      options ? options : '',
    );
  }

  error(message: string, error?: Error, options?: object) {
    console.warn(
      'ERROR ' + this.prefix,
      message,
      error && error.message ? error.message : JSON.stringify(error),
      options ? options : '',
    );
  }

  critical(message: string, error?: Error, options?: object): void {
    console.warn(
      'CRIT ' + this.prefix,
      message,
      error && error.message ? error.message : JSON.stringify(error),
      options ? options : '',
    );
  }
}
