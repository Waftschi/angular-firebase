import { FormGroup } from '@angular/forms';
export declare class FormService {
    private form;
    constructor();
    setForm(form: FormGroup): void;
    validate(name: any, type: any): any;
}
