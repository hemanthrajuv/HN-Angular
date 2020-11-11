import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MaterialModule } from '../shared/material/material.module';
import { UserSubmissionsComponent } from './user-submissions/user-submissions.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';

@NgModule({
  declarations: [UserDetailComponent, UserSubmissionsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule,
    SharedComponentsModule
  ],
  exports: [
  ]
})
export class UserModule { }
