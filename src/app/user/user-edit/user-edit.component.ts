import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../shared/form.service';

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

    constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService, private fb: FormBuilder, private formService: FormService) {
        this.isNew = false;
        this.createForm();
    }

    createForm() {
        this.userForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            isEnabled: [''],
        });

        this.formService.setForm(this.userForm);
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

        this.dataService.update('users', this.id, this.userForm.value);
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
