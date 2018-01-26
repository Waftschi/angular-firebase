import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class SkillEditComponent implements OnInit, OnDestroy {
    private route;
    private router;
    private dataService;
    private fb;
    private id;
    private isNew;
    skillForm: FormGroup;
    skill: any;
    isDeleteAction: boolean;
    constructor(route: ActivatedRoute, router: Router, dataService: DataService, fb: FormBuilder);
    createForm(): void;
    update(): void;
    delete(): void;
    disable(type: boolean): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
