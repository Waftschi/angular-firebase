import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { UserService } from './user.service';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [UserListComponent, UserEditComponent],
    providers: [UserService]
})
export class UserModule {
}
