import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { ViewNewsComponent } from './view-news/view-news.component';
import { MaterialModule } from '../shared/material/material.module';
import { NewsRoutingModule } from './news-routing.module';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { ViewItemComponent } from './view-item/view-item.component';

@NgModule({
  declarations: [MenuComponent, ViewNewsComponent, ViewItemComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NewsRoutingModule,
    SharedComponentsModule
  ],
  exports: []
})
export class NewsModule { }
