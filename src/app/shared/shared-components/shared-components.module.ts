import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { ItemComponent } from './item/item.component';
import { CommentsComponent } from './comments/comments.component';
import { TimeAgoPipe } from '../pipes/time-ago.pipe';
import { GetIndexPipe } from '../pipes/get-index.pipe';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';
import { UrlShorttenPipe } from '../pipes/url-shortten.pipe';

@NgModule({
  declarations: [
    ItemComponent,
     CommentsComponent,
        UrlShorttenPipe,
    TimeAgoPipe,
    GetIndexPipe,
    SafeHtmlPipe, ],
  imports: [
    CommonModule,
    MaterialModule,
    // UrlShorttenPipe,
    // TimeAgoPipe,
    // GetIndexPipe,
    // SafeHtmlPipe,
  ],
  exports: [
    ItemComponent,
    CommentsComponent
  ]
})
export class SharedComponentsModule { }
