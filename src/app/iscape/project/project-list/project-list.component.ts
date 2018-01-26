import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { Observable } from 'rxjs/Observable';
import { AppDocument } from '../../shared/document';
import * as skillActions from '../../state/actions/skill.actions';
import { Store } from '@ngrx/store';
import { Skill } from '../../skill/skill';

@Component({
    selector: 'app-iscape-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
    private projects$: Observable<AppDocument[]>;
    private skills$: Store<any>;
    private skills: Skill[];
    private skill: Skill | undefined;

    constructor(private dataService: DataService, private store: Store<any>) {
        this.projects$ = dataService.getCollection('projects');
        this.store.dispatch(new skillActions.LoadAction());
        this.skills$ = this.store.select(state => state.skill.skills);
    }

    disable(projectId: string, type: boolean) {
        const data = { isEnabled: type };
        this.dataService.update('projects', projectId, data);
    }

    ngOnInit() {
    }

    getSkill(skillId): Skill {
        if (!this.skills) {

            this.skills$.subscribe(skills => this.skills = skills);
            this.skill = this.skills.find(skill => skill.id === skillId);
            return this.skill;
        }

        return this.skill;
    }

}
