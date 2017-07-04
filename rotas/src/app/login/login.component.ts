import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin(){
    this._authService.fazerLogin(this.usuario);
  }

}
