import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';
export declare class LocationEditComponent implements OnInit, OnDestroy {
    private route;
    private router;
    private dataService;
    private fb;
    private id;
    private isNew;
    locationForm: FormGroup;
    location: any;
    isDeleteAction: boolean;
    constructor(route: ActivatedRoute, router: Router, dataService: DataService, fb: FormBuilder);
    createForm(): void;
    update(): void;
    delete(): void;
    disable(type: boolean): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
