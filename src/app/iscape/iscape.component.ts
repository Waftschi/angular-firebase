import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';


@Component({
    selector: 'app-iscape-root',
    templateUrl: './iscape.component.html',
    styleUrls: ['./iscape.component.css']
})
export class IscapeComponent {
    title = 'app';

    constructor(public authService: AuthService) {

    }
}
