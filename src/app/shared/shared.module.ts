import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { FormService } from './form.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [DataService, AuthService, FormService],
    exports: []
})
export class SharedModule {
}
