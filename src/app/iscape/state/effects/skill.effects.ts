import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import * as skillActions from '../actions/skill.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SkillService } from '../../skill/skill.service';
import { switchMap, tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SkillEffects {
    constructor(private skillService: SkillService,
                private actions$: Actions, private router: Router) {
    }


    // @Effect() loadSkills$ = this.actions$
    //     .ofType(skillActions.LOAD)
    //     .switchMap(_ => this.skillService.getSkills()
    //         .map(skills => new skillActions.LoadSuccessAction(skills))
    //         // If request fails, dispatch failed action
    //         .catch(() => Observable.of({ type: skillActions.LOAD_FAIL }))
    //     );

    @Effect() loadSkillActions$ = this.actions$.pipe(
        ofType(skillActions.LOAD),
        tap(action => console.log(action)),
        switchMap((action: skillActions.LoadAction) => this.skillService.getSkills()),
        map(skills => new skillActions.LoadSuccessAction(skills)),
        catchError(_ => of(new skillActions.LoadFailAction()))
    );


    @Effect() disableSkillActions$ = this.actions$.pipe(
        ofType(skillActions.DISABLE),
        tap(action => console.log(action)),
        switchMap((action: skillActions.DisableAction) => this.skillService.disable(action.payload)),
        map(skills => new skillActions.DisableActionSuccess(skills)),
        catchError(_ => of(new skillActions.LoadFailAction()))
    );

    @Effect() deleteSkillActions$ = this.actions$.pipe(
        ofType(skillActions.DELETE),
        tap(action => console.log(action)),
        switchMap((action: skillActions.DeleteAction) => this.deleteSkill(action)),
        map(_ => new skillActions.DeleteActionSuccess())
    );

    @Effect() updateSkillActions$ = this.actions$.pipe(
        ofType(skillActions.UPDATE),
        tap(action => console.log(action)),
        switchMap((action: skillActions.UpdateAction) => this.updateSkill(action)),
        map(skills => new skillActions.UpdateActionSuccess())
    );

    @Effect() createSkillAction$ = this.actions$.pipe(
        ofType(skillActions.CREATE),
        tap(action => console.log(action)),
        switchMap((action: skillActions.CreateAction) => this.createSkill(action)),
        map(() => new skillActions.CreateActionSuccess())
    );


    private updateSkill(action: skillActions.UpdateAction) {
        return this.skillService.update(action.payload).then(
            _ => this.router.navigate(['/skill-list']));
    }

    private deleteSkill(action: skillActions.DeleteAction) {
        return this.skillService.delete(action.payload).then(
            _ => this.router.navigate(['/skill-list'])
        );
    }

    private createSkill(action: skillActions.CreateAction) {
        return this.skillService.create(action.payload).then(
            _ => this.router.navigate(['/skill-list'])
        );
    }
}
