import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot  } from "@angular/router";

import { AlunosService } from './../alunos.service';
import { Aluno } from './../aluno';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(private _alunoService: AlunosService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            return this._alunoService.getAluno(route.params['id']);
    }
}