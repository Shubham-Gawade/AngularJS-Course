import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{

  constructor(private authService:AuthService,private router: Router) {

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute,state);
  }

  canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.isAuthenticated().then(
      (authenticated: boolean) => {
        if (authenticated) {
          return true;
        }
        else {
          this.router.navigate(['/']);
          return false;
        }
      }
    );
  }
}
