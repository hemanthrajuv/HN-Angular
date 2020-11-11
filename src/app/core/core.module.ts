import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { Routes, RouterModule } from '@angular/router';

import { HeadingComponent } from './heading/heading.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const coreRoutes: Routes = [
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [HeadingComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(coreRoutes)
  ],
  exports: [HeadingComponent]
})
export class CoreModule { }
