import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditLinkComponent } from './edit-link/edit-link.component';
import { MediaIconComponent } from './media-icon/media-icon.component';
import { RemoveLinkComponent } from './remove-link/remove-link.component';
import { SeasonIconComponent } from './season-icon/season-icon.component';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    EditLinkComponent,
    MediaIconComponent,
    RemoveLinkComponent,
    SeasonIconComponent
  ],
  declarations: [
    EditLinkComponent,
    MediaIconComponent,
    RemoveLinkComponent,
    SeasonIconComponent,
    SharedComponent
  ]
})
export class SharedModule { }
