import { OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
export declare class LocationListComponent implements OnInit {
    private dataService;
    private locations$;
    constructor(dataService: DataService);
    disable(locationId: string, type: boolean): void;
    ngOnInit(): void;
}
