import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LinksComponent } from './links/links.component';
import { AuthGuardService } from './services/auth-guard.service';

const coreRoutes: Routes = [
  {
    path: '',
    redirectTo: 'links',
    pathMatch: 'full'
  },
  {
    path: 'edit',
    loadChildren: '../shared/shared.module#SharedModule'
  },
  {
    path: 'investments',
//    canActivate: [ AuthGuardService ],
    loadChildren: '../investments/investments.module#InvestmentsModule'
  },
  {
    path: 'links',
    component: LinksComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'media',
    loadChildren: '../media/media.module#MediaModule'
  },
  {
    path: 'remove',
    loadChildren: '../shared/shared.module#SharedModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
