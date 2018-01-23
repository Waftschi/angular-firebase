import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Observable } from 'rxjs/Observable';
import { AppDocument } from '../../shared/document';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
    private projects$: Observable<AppDocument[]>;

    constructor(private dataService: DataService) {
        this.projects$ = dataService.getCollection('projects');
    }

    disable(projectId: string, type: boolean) {
        const data = { isEnabled: type };
        this.dataService.update('projects', projectId, data);
    }

    ngOnInit() {
    }
}
