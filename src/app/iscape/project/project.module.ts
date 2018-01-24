import { AppRoutingModule } from '../../app-routing.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
      AppRoutingModule,
      CommonModule,
      MaterialModule,
      ReactiveFormsModule
  ],
  declarations: [ProjectListComponent, ProjectEditComponent]
})
export class ProjectModule { }
