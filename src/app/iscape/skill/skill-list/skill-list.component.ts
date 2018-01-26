import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as skillActions from '../../state/actions/skill.actions';
import { Skill } from '../skill';

@Component({
    selector: 'app-iscape-skill-list',
    templateUrl: './skill-list.component.html',
    styleUrls: ['./skill-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillListComponent implements OnInit, OnDestroy {
    private skills$: Observable<Skill[]>;


    constructor(private store: Store<any>) {}

    disable(skillId: string, type: boolean) {
        this.store.dispatch(new skillActions.DisableAction({  skillId: skillId, isEnabled: type } ));
    }

    ngOnInit() {
        this.loadSkills();
    }

    ngOnDestroy() {
    }


    private loadSkills() {
        this.store.dispatch(new skillActions.LoadAction());
        this.skills$ = this.store.select(state => state.skill.skills);
    }
}
