import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ViewNewsComponent } from './news/view-news/view-news.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule)},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
