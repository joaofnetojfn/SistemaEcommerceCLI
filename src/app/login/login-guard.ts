import { LoginServiceService } from './login-service.service';
import { Observable } from 'rxjs/RX';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable ()
export class AuthGuard implements CanActivate{

    constructor( private router: Router, private authService: LoginServiceService){}

    canActivate (route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> | boolean{
        if(this.authService.isAuthenticated()){
            return true;
        }
        this.router.navigate(['/signin']);
        return false;
    }

    

}
