import * as proxy from 'http-proxy-middleware';
import { NestMiddleware } from '@nestjs/common';
import { AmadeusApiUrl } from './app.conf';

export class ReverseProxyMiddleware implements NestMiddleware {
  private proxy = proxy.createProxyMiddleware({
    target: AmadeusApiUrl,
    pathRewrite: { '/api': '' },
    changeOrigin: true,
    secure: false,
    logLevel: 'debug',
    onProxyReq: (proxyReq, req, res) => {
      console.log('proxy');
    }
  });

  use(req, res, next: () => void) {
    this.proxy(req, res, (err) => {
      console.log('err', err);
    });
  }
}
