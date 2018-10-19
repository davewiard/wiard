import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';
import { LinksComponent } from './links/links.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    LoginComponent,
    LinksComponent
  ],
  exports: [
    NavbarComponent,
    RouterModule
  ],
  providers: [
    AuthGuardService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class CoreModule { }
