import * as skillActions from '../../state/actions/skill.actions';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/find';


@Component({
    selector: 'app-iscape-skill-edit',
    templateUrl: './skill-edit.component.html',
    styleUrls: ['./skill-edit.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillEditComponent implements OnInit, OnDestroy {
    private id: string;
    private isNew: boolean;

    skillForm: FormGroup;
    skill: any;
    isHide: boolean;

    constructor(private route: ActivatedRoute,
                private fb: FormBuilder,
                private store: Store<any>) {

        this.isNew = false;
        this.createForm();
        this.loadSkills();
    }

    createForm() {
        this.skillForm = this.fb.group({
            name: ['', Validators.required],
            isEnabled: [''],
        });
    }

    update() {
        if (this.skillForm.status === 'INVALID') {
            return;
        }

        if (this.isNew === true) {
            return this.create();
        }


        const payload = { skillId: this.id, ...this.skillForm.value };
        const action = new skillActions.UpdateAction(payload);
        this.store.dispatch(action);
    }

    create() {
        this.isHide = true;
        const action1 = new skillActions.CreateAction(this.skillForm.value);
        this.store.dispatch(action1);
        return;
    }


    delete() {
        this.isHide = true;
        const action = new skillActions.DeleteAction({ skillId: this.id });
        this.store.dispatch(action);
    }

    disable(type: boolean) {

        const action = new skillActions.DisableAction({ skillId: this.id, isEnabled: type });
        this.store.dispatch(action);
    }


    ngOnInit() {
        this.route.params.subscribe(params => {
            if ((this.id = params['id']) === '0') {
                this.isNew = true;
                return;
            }
        });
    }

    ngOnDestroy() {
    }


    private loadSkills() {
        if (!this.skill) {

            this.store.dispatch(new skillActions.LoadAction());
            const skills$ = this.store.select(state => state.skill.skills);
            skills$.subscribe(skills => {
                this.skill = skills.find(skill => skill.id === this.id);
                this.skillForm.patchValue({
                    name: this.skill ? this.skill.name : '',
                    isEnabled: this.skill && !!this.skill.isEnabled || !!this.skill,
                });
            });
        }
    }
}
