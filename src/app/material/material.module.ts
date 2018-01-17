import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatMenuModule, MatSlideToggleModule,
    MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const MATERIAL_COMPONENTS = [MatToolbarModule, FlexLayoutModule, MatCardModule, MatButtonModule,
    MatIconModule, MatMenuModule, MatInputModule, MatSlideToggleModule];

@NgModule({
    imports: [
        CommonModule,
        MATERIAL_COMPONENTS
    ],
    exports: [MATERIAL_COMPONENTS],
    declarations: []
})
export class MaterialModule {
}
