import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { ReverseProxyMiddleware } from './reverse.proxy.middleware';
import { AmadeusAuthMiddleware } from './amadeus.auth.middleware';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: import('@nestjs/common').MiddlewareConsumer) {
    consumer
    .apply(AmadeusAuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });

    consumer
      .apply(ReverseProxyMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
