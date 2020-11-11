import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ViewItemComponent } from './view-item/view-item.component';

import { ViewNewsComponent } from './view-news/view-news.component';

const newsRoutes: Routes = [
    {path: '', component: ViewNewsComponent},
    {path: 'item/:id', component: ViewItemComponent}
];

@NgModule({
    imports: [RouterModule.forChild(newsRoutes)],
    exports: [RouterModule]
})
export class NewsRoutingModule {}
