import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { SkillEffects } from './skill.effects';
import * as skillActions from '../../state/actions/skill.actions';
import { Observable } from 'rxjs/Observable';
import { SkillService } from '../../skill/skill.service';
import { RouterTestingModule } from '@angular/router/testing';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { DisableAction } from '../actions/skill.actions';
import { cold, hot } from 'jasmine-marbles';

describe('SkillEffects', () => {
    let skillEffects: SkillEffects,
        skillService: SkillService;

    let actions: ReplaySubject<any>;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            // EffectsTestingModule
            RouterTestingModule.withRoutes([]),
        ],
        providers: [
            SkillEffects,
            provideMockActions(() => actions),
            {
                provide: SkillService,
                useValue: jasmine.createSpyObj('skillService', { 'getSkills': Promise.resolve([{ skillId: '123' }]) })
            }
        ]
    }));

    beforeEach(() => {
        // runner = TestBed.get(EffectsRunner);
        skillEffects = TestBed.get(SkillEffects);
        skillService = TestBed.get(SkillService);
    });

    describe('skill$', () => {

        it('should return a LOAD_SUCCESS action, on success', function () {
            actions = new ReplaySubject(1);
            actions.next(new skillActions.LoadAction());

            skillEffects.loadSkillActions$.subscribe(result => expect(result)
                .toEqual(new skillActions.LoadSuccessAction([{ skillId: '123' }])));

        });


    });

});
