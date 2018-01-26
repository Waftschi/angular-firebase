import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
export declare class AuthGuard implements CanActivate {
    private router;
    private authService;
    constructor(router: Router, authService: AuthService);
    canActivate(): Observable<boolean>;
}
