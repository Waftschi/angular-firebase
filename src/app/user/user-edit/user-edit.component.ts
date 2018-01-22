import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../shared/form.service';
import { SkillService } from '../../skill/skill.service';
import { Skill } from '../../skill/skill';
import { MatSelectChange } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { User } from '../user';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
    // private sub: Subscription;
    private id: string;
    private isNew: boolean;
    userForm: FormGroup;
    user: any;
    isDeleteAction: boolean;
    skills: Skill[];
    skills$ = new Subject<Skill[]>();

    constructor(private route: ActivatedRoute, private router: Router,
                private dataService: DataService, private fb: FormBuilder,
                private formService: FormService, private skillService: SkillService) {
        this.isNew = false;
        // this.user.skills = [];
        this.createForm();
        this.skillService.getSkills().subscribe(
            skills => this.skills$.next(skills)
        );
    }


    createForm() {
        this.userForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            isEnabled: [''],
            // skills: []
        });

        this.formService.setForm(this.userForm);
    }

    // getNotUsedSkills() {
    //     // console.dir(this.user.skills);
    //     return this.skills.filter(skill => this.user.skills && this.user.skills.indexOf(skill) === -1);
    // }

    removeSkill(skill: any): void {
        const index = this.user.skills.indexOf(skill);

        if (index >= 0) {
            this.user.skills.splice(index, 1);
        }
    }

    update() {
        if (this.userForm.status === 'INVALID') {
            return;
        }

        if (this.isNew === true) {
            this.dataService.create('users', this.userForm.value);
            this.router.navigate(['/users']);
            return;
        }

        const data = { skills: this.user.skills, ...this.userForm.value };
        this.dataService.update('users', this.id, data);
        this.router.navigate(['/users']);
    }

    delete() {
        this.isDeleteAction = true;
        this.dataService.delete('users', this.id).then(
            _ => this.router.navigate(['/users'])
        );
    }

    disable(type: boolean) {
        const data = { isEnabled: type };
        this.dataService.update('users', this.id, data);
    }

    addSkill($event: MatSelectChange) {
        console.dir($event);
        console.dir($event.value);

        if (!this.user.skills) {
            this.user.skills = [];
        }


        if (!this.user.skills.find(skill => skill.id === $event.value.id)) {
            this.user.skills.push($event.value);
        }


    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (this.user === null) {
                return;
            }

            this.id = params['id'];

            if (this.id === '0') {
                this.isNew = true;
                return;
            }

            this.dataService.read('users', { id: this.id }).subscribe(user => {
                // console.dir(value);
                this.user = user;

                // notUsedSkills = user.skills.filter( skill => skill.id !== )

                this.userForm.patchValue({
                    name: this.user ? this.user.name : '',
                    email: this.user ? this.user.email : '',
                    isEnabled: this.user && !!this.user.isEnabled,
                });
            });

        });
    }

    ngOnDestroy() {
        // this.sub.unsubscribe();
    }
}
