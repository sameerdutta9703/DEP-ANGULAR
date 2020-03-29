import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ClientComponent } from './client/client.component';
import { UsersService } from './users.service';
import { ActiveModule } from './active/active.module';
import { DeletedModule } from './deleted/deleted.module';
import { ManageModule } from './manage/manage.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    ActiveModule,
    DeletedModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
