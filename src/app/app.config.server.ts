import { mergeApplicationConfig, ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { BsModalService } from 'ngx-bootstrap/modal';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes),
    BsModalService,
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [BsModalService],
      useFactory: (bsModalService: BsModalService) => {
        return () => {
          bsModalService.config.animated = true;
          bsModalService.config.backdrop = "static";
          bsModalService.config.focus = true;
          bsModalService.config.ignoreBackdropClick = true;
          bsModalService.config.keyboard = false;
          bsModalService.config.class = "modal-xl";
        };
      }
    }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
