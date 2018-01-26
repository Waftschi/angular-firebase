import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as skillActions from '../../state/actions/skill.actions';

@Component({
    selector: 'app-iscape-project-edit',
    templateUrl: './project-edit.component.html',
    styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit, OnDestroy {

    // private sub: Subscription;
    private id: string;
    private isNew: boolean;

    projectForm: FormGroup;
    project: any;
    isDeleteAction: boolean;
    private skills$: Store<any>;

    constructor(private route: ActivatedRoute, private router: Router,
                private dataService: DataService, private fb: FormBuilder,
                private store: Store<any>) {

        this.isNew = false;

        this.loadSkills();
        this.createForm();
    }

    createForm() {
        this.projectForm = this.fb.group({
            name: ['', Validators.required],
            skillId: ['', Validators.required],
            isEnabled: [''],
        });
    }

    update() {
        if (this.projectForm.status === 'INVALID') {
            return;
        }

        if (this.isNew === true) {
            this.dataService.create('projects', this.projectForm.value);
            this.router.navigate(['/project-list']);
            return;
        }

        this.dataService.update('projects', this.id, this.projectForm.value);
        this.router.navigate(['/project-list']);
    }

    delete() {
        this.isDeleteAction = true;
        this.dataService.delete('projects', this.id).then(
            _ => this.router.navigate(['/project-list'])
        );
    }

    disable(type: boolean) {
        const data = { isEnabled: type };
        this.dataService.update('projects', this.id, data);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (this.project === null) {
                return;
            }

            this.id = params['id'];

            if (this.id === '0') {
                this.isNew = true;
                return;
            }

            this.dataService.read('projects', { id: this.id }).subscribe(project => {
                this.project = project;

                this.projectForm.patchValue({
                    name: this.project ? this.project.name : '',
                    isEnabled: this.project && !!this.project.isEnabled,
                    skillId: this.project.skillId

                });
            });

        });
    }

    private loadSkills() {
        this.store.dispatch(new skillActions.LoadAction());
        this.skills$ = this.store.select(state => state.skill.skills);
    }

    ngOnDestroy() {
        //  this.skills$.unsubscribe();
    }

}
