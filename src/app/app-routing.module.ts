import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items/items.component';
import { SkillListComponent } from './skill/skill-list/skill-list.component';
import { SkillEditComponent } from './skill/skill-edit/skill-edit.component';
import { AuthGuard } from './shared/auth.guard';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'items', component: ItemsComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UserListComponent },
    { path: 'user-edit/:id', component: UserEditComponent },
    { path: 'skills', component: SkillListComponent },
    { path: 'skill-edit/:id', component: SkillEditComponent },
    // { path: 'company-list', component: CompanyListComponent, canActivate: [AuthGuard] },
    // { path: 'company-edit/:id', component: CompanyEditComponent, canActivate: [AuthGuard] },
    // { path: 'contact-list', component: ContactListComponent, canActivate: [AuthGuard] },
    // { path: 'contact-edit/:id', component: ContactEditComponent, canActivate: [AuthGuard] }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
