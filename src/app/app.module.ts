import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserService } from './services/user.services';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    UserDashboardComponent,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    ModalModule.forRoot()
  ],
  providers: [UserService,ModalModule,BsModalService],
})
export class AppModule { }