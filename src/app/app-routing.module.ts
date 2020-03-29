import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component'
import { ActiveusercompComponent } from './active/activeusercomp/activeusercomp.component';
import { DeletedusercompComponent } from './deleted/deletedusercomp/deletedusercomp.component';
import { ManageusercompComponent } from './manage/manageusercomp/manageusercomp.component';
import { DetailsusercompComponent } from './manage/detailsusercomp/detailsusercomp.component';


const routes: Routes = [
  { path: '', component: UserComponent},
  { path: 'Active', component: ActiveusercompComponent },
  { path: 'Deleted', component: DeletedusercompComponent },
  {
    path: 'Manage',
    loadChildren: () => import('./manage/manage.module').then(
      (file) => file.ManageModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
