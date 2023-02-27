import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { LoginAuthComponent } from './login-auth/login-auth.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './users.service';


@NgModule({
  declarations: [
    UsersComponent,
    LoginAuthComponent,
    UsersListComponent,
    UsersDetailsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
})
export class UsersModule { }
