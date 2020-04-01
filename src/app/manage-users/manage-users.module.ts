import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './all-users/all-users.component';
import { ManageUserDetailsComponent } from './manage-user-details/manage-user-details.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const manageRoutes: Routes = [
  {
    path: 'manage-users', component: AllUsersComponent,
    children: [
      { path: ':id', component: ManageUserDetailsComponent }
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
