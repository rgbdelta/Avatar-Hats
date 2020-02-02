import { ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware } from '@tsed/common';
import morgan from 'morgan';
import Path from 'path';

@ServerSettings({
  httpPort: process.env.PORT ?? 8000,
  httpsPort: process.env.PORT ?? 8001,
  rootDir: Path.resolve(__dirname),
  acceptMimes: ['application/json'],
})
export class Server extends ServerLoader {
  public $beforeRoutesInit(): void | Promise<any> {
    this.use(GlobalAcceptMimesMiddleware).use(morgan('dev'));
  }

  public $onReady() {
    // eslint-disable-next-line no-console
    console.log('Server started');
  }

  public $onServerInitError(err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}
