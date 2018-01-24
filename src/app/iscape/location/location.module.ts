import { AppRoutingModule } from '../../app-routing.module';
import { CommonModule } from '@angular/common';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { LocationListComponent } from './location-list/location-list.component';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        AppRoutingModule,
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [LocationListComponent, LocationEditComponent]
})
export class LocationModule {
}
