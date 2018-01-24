import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-iscape-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit, OnDestroy {

    // private sub: Subscription;
    private id: string;
    private isNew: boolean;

    locationForm: FormGroup;
    location: any;
    isDeleteAction: boolean;

    constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService, private fb: FormBuilder) {
        this.isNew = false;
        this.createForm();
    }

    createForm() {
        this.locationForm = this.fb.group({
            name: ['', Validators.required],
            isEnabled: [''],
        });
    }

    update() {
        if (this.locationForm.status === 'INVALID') {
            return;
        }

        if (this.isNew === true) {
            this.dataService.create('locations', this.locationForm.value);
            this.router.navigate(['/location-list']);
            return;
        }

        this.dataService.update('locations', this.id, this.locationForm.value);
        this.router.navigate(['/location-list']);
    }

    delete() {
        this.isDeleteAction = true;
        this.dataService.delete('locations', this.id).then(
            _ => this.router.navigate(['/location-list'])
        );
    }

    disable(type: boolean) {
        const data = { isEnabled: type };
        this.dataService.update('locations', this.id , data);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (this.location === null) {
                return;
            }

            this.id = params['id'];

            if (this.id === '0') {
                this.isNew = true;
                return;
            }

            this.dataService.read('locations', { id: this.id }).subscribe(location => {
                // console.dir(value);
                this.location = location;
                this.locationForm.patchValue({
                    name: this.location ? this.location.name : '',
                    isEnabled: this.location && !!this.location.isEnabled,
                });
            });

        });
    }

    ngOnDestroy() {
        // this.sub.unsubscribe();
    }

}
