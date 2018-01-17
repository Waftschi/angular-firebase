import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemsComponent} from './items/items.component';
import {MaterialModule} from '../material/material.module';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [ItemsComponent],
    exports: [ItemsComponent]
})
export class ItemsModule {
}
