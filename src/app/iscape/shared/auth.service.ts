import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

    user$: Observable<firebase.User>;

    constructor(private router: Router,
                public afAuth: AngularFireAuth) {
        this.user$ = this.afAuth.authState;
    }

    login() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(_ => this.router.navigate([`/items`]))
            .catch(error => console.log('auth error', error));
    }

    logout() {
        this.afAuth.auth.signOut();
        this.router.navigate([`/home`]);
    }


    getClient() {
        return { clientId: 1 };
    }

}
