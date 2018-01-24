import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { IscapeModule } from './iscape/iscape.module';



@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        IscapeModule.forRoot(environment.firebase)
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
