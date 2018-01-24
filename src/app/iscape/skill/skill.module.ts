import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillService } from './skill.service';
import { MaterialModule } from '../material/material.module';
import { SkillEditComponent } from './skill-edit/skill-edit.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [SkillListComponent, SkillEditComponent],
    providers: [SkillService]
})
export class SkillModule {
}
