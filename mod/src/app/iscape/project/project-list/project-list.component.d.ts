import { OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
export declare class ProjectListComponent implements OnInit {
    private dataService;
    private projects$;
    constructor(dataService: DataService);
    disable(projectId: string, type: boolean): void;
    ngOnInit(): void;
}
