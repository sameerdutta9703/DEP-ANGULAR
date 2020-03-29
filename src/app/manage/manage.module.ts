import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageusercompComponent } from './manageusercomp/manageusercomp.component';
import { DetailsusercompComponent } from './detailsusercomp/detailsusercomp.component';
import { RouterModule, Routes } from '@angular/router';

const manageRoutes: Routes = [
  {
    path: '', component: ManageusercompComponent,
    children: [
      { path: ':id', component: DetailsusercompComponent }
    ]

  }
];

@NgModule({
  declarations: [ManageusercompComponent, DetailsusercompComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(manageRoutes)
  ],
  exports: [ManageusercompComponent, DetailsusercompComponent]
})
export class ManageModule { }
