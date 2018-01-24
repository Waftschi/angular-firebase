import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class FormService {
    private form: FormGroup;

    constructor() {
    }

    setForm(form: FormGroup) {
        this.form = form;
    }

    validate(name, type) {
        const errors = this.form.get(name).errors;

        if (!errors) {
            return;
        }
        switch (type) {
            case 'required':
                return errors.required;
            case 'email':
                return errors.email;

        }

    }

}
