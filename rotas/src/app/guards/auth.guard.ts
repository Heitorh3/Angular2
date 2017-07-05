import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanLoad, Route } from "@angular/router";

import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private _authService: AuthService,
    private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
  
   return this.verificarAcesso();
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
   return this.verificarAcesso(); 
  }

  private verificarAcesso(){
     if(this._authService.usuarioEstaAutenticado()){
      return true;
    }
      this._router.navigate(['/login']);
      return false;
  }

}
