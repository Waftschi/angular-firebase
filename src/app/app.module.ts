import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ItemsModule } from './items/items.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SkillModule } from './skill/skill.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuard } from './shared/auth.guard';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { LocationModule } from './location/location.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        HomeModule,
        ItemsModule,
        MaterialModule,
        ReactiveFormsModule,
        SharedModule,
        SkillModule,
        UserModule,
        ProjectModule,
        LocationModule
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
