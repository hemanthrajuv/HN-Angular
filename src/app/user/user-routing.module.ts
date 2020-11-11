import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserSubmissionsComponent } from './user-submissions/user-submissions.component';

const userRoutes: Routes = [
    {path: 'user/:id', component: UserDetailComponent},
    {path: 'user/:id/submissions', component: UserSubmissionsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})

export class UserRoutingModule {}


