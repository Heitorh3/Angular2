import { AuthService } from './../login/auth.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router/router";
import { RouterStateSnapshot } from "@angular/router/public_api";

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
  
    if(this._authService.usuarioEstaAutenticado()){
      return true;
    }
      this._router.navigate(['/login']);
      return false;
  }

  constructor(
    private _authService: AuthService,
    private _router: Router) {}
}
