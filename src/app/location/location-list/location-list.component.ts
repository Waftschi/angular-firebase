import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Observable } from 'rxjs/Observable';
import { AppDocument } from '../../shared/document';

@Component({
    selector: 'app-location-list',
    templateUrl: './location-list.component.html',
    styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
    private locations$: Observable<AppDocument[]>;

    constructor(private dataService: DataService) {
        this.locations$ = dataService.getCollection('locations');
    }

    disable(locationId: string, type: boolean) {
        const data = { isEnabled: type };
        this.dataService.update('locations', locationId, data);
    }

    ngOnInit() {
    }

}
