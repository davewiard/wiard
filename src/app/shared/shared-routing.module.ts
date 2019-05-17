import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponent } from './shared.component';
import { EditLinkComponent } from './edit-link/edit-link.component';
import { RemoveLinkComponent } from './remove-link/remove-link.component';

const sharedRoutes: Routes = [
  {
    path: '',
    redirectTo: 'tv',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SharedComponent,
    children: [
      {
        path: 'edit',
        component: EditLinkComponent
      },
      {
        path: 'remove',
        component: RemoveLinkComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(sharedRoutes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
