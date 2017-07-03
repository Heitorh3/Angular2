import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';

const APP_ROUTES: Routes = [

    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'cursos/:id', component: CursoDetalheComponent},
    {path: 'naoEcontrado', component: CursoNaoEncontradoComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);