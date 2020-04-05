import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './all-users/all-users.component';
import { ManageUserDetailsComponent } from './manage-user-details/manage-user-details.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageUserUpdationComponent } from './manage-user-updation/manage-user-updation.component';
import { ManageUserCreationComponent } from './manage-user-creation/manage-user-creation.component';

const manageRoutes: Routes = [
  {
    path: 'manage-users', component: AllUsersComponent,
    children: [
      { path: 'details/:id', component: ManageUserDetailsComponent },
      { path: 'create', component: ManageUserCreationComponent },
      { path: 'edit/:id', component: ManageUserUpdationComponent }
    ]
  }
];


@NgModule({
  declarations: [AllUsersComponent, ManageUserDetailsComponent, ManageUserUpdationComponent, ManageUserCreationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(manageRoutes),
    SharedModule
  ],
  exports: [AllUsersComponent, ManageUserDetailsComponent,  ManageUserUpdationComponent, ManageUserCreationComponent]
})
export class ManageUsersModule { }
