import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ActiveUsersComponent } from './active-users/active-users/active-users.component';
import { DeletedUsersComponent } from './deleted-users/deleted-users/deleted-users.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'active-users', component: ActiveUsersComponent },
  { path: 'deleted-users', component: DeletedUsersComponent },
  {
    path: '',
    loadChildren: () => import('./manage-users/manage-users.module').then(
      (file) => file.ManageUsersModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
