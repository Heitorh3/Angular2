import { Resolve } from '@angular/router';
import { RouterModule, CanActivateChild, CanDeactivate } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunosGuard } from './alunos.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes = [
     {path: '',
      component: AlunosComponent,
      canActivateChild: [AlunosGuard],
     children:[
            {path: 'novo', component: AlunoFormComponent},
            {path: ':id', 
                component: AlunoDetalheComponent,
                resolve: {aluno: AlunoDetalheResolver}
            },
            {path: ':id/editar', 
                component: AlunoFormComponent,
                canDeactivate: [AlunosDeactivateGuard]
            }
     ]},

]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule{}
