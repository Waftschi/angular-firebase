import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
export declare class AuthService {
    private router;
    afAuth: AngularFireAuth;
    user$: Observable<firebase.User>;
    constructor(router: Router, afAuth: AngularFireAuth);
    login(): void;
    logout(): void;
    getClient(): {
        clientId: number;
    };
}
