import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../../shared/form.service';
import { SkillService } from '../../skill/skill.service';
import { Skill } from '../../skill/skill';
import { MatSelectChange } from '@angular/material';
import { Subject } from 'rxjs/Subject';
export declare class UserEditComponent implements OnInit, OnDestroy {
    private route;
    private router;
    private dataService;
    private fb;
    private formService;
    private skillService;
    private id;
    private isNew;
    userForm: FormGroup;
    user: any;
    isDeleteAction: boolean;
    skills: Skill[];
    skills$: Subject<{}>;
    constructor(route: ActivatedRoute, router: Router, dataService: DataService, fb: FormBuilder, formService: FormService, skillService: SkillService);
    createForm(): void;
    NotIsIn(skill: any): boolean;
    removeSkill(skill: any): void;
    update(): void;
    delete(): void;
    disable(type: boolean): void;
    addSkill($event: MatSelectChange): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}