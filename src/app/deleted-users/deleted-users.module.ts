import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedUsersComponent } from './deleted-users/deleted-users.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DeletedUsersComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DeletedUsersModule { }
