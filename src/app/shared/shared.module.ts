import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { AuthService } from './auth.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [DataService, AuthService],
    exports: []
})
export class SharedModule {
}
