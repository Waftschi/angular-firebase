import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-iscape-skill-edit',
    templateUrl: './skill-edit.component.html',
    styleUrls: ['./skill-edit.component.css']
})
export class SkillEditComponent implements OnInit, OnDestroy {
    // private sub: Subscription;
    private id: string;
    private isNew: boolean;

    skillForm: FormGroup;
    skill: any;
    isDeleteAction: boolean;

    constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService, private fb: FormBuilder) {
        this.isNew = false;
        this.createForm();
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
            this.dataService.create('skills', this.skillForm.value);
            this.router.navigate(['/skill-list']);
            return;
        }

        this.dataService.update('skills', this.id, this.skillForm.value);
        this.router.navigate(['/skill-list']);
    }

    delete() {
        this.isDeleteAction = true;
        this.dataService.delete('skills', this.id).then(
            _ => this.router.navigate(['/skill-list'])
        );
    }

    disable(type: boolean) {
        const data = { isEnabled: type };
        this.dataService.update('skills', this.id , data);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (this.skill === null) {
                return;
            }

            this.id = params['id'];

            if (this.id === '0') {
                this.isNew = true;
                return;
            }

            this.dataService.read('skills', { id: this.id }).subscribe(skill => {
                // console.dir(value);
                this.skill = skill;
                this.skillForm.patchValue({
                    name: this.skill ? this.skill.name : '',
                    isEnabled: this.skill && !!this.skill.isEnabled,
                });
            });

        });
    }

    ngOnDestroy() {
        // this.sub.unsubscribe();
    }
}
