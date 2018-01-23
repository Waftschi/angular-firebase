import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [LocationListComponent, LocationEditComponent]
})
export class LocationModule {
}
