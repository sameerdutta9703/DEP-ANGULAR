import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './all-users/all-users.component';
import { ManageUserDetailsComponent } from './manage-user-details/manage-user-details.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateFormComponent } from '../shared/forms/create-form/create-form.component';
import { UpdateFormComponent } from '../shared/forms/update-form/update-form.component';

const manageRoutes: Routes = [
  {
    path: 'manage-users', component: AllUsersComponent,
    children: [
      { path: 'details/:id', component: ManageUserDetailsComponent },
      { path: 'create', component: CreateFormComponent },
      { path: 'edit/:id', component: UpdateFormComponent }
    ]
  }
];


@NgModule({
  declarations: [AllUsersComponent, ManageUserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(manageRoutes),
    SharedModule
  ],
  exports: [AllUsersComponent, ManageUserDetailsComponent]
})
export class ManageUsersModule { }
