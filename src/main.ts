import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(ModalModule.forRoot()) 
  ]
}).catch(err => console.error(err));
