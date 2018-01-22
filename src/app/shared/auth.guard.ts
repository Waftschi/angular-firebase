import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate(): Observable<boolean> {
    return this.authService.user$
      .map(user => {
          console.dir(user.uid);
        if (user && user.uid) {
          return true;
        } else {
          this.router.navigate([`/home`]);
          return false;
        }
      });
  }

}
