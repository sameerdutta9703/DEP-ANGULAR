import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ActiveUsersComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ActiveUsersComponent]
})
export class ActiveUsersModule { }
