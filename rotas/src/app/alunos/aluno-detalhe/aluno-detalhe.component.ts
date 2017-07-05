import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { AlunosService } from './../alunos.service';
import { Aluno } from './../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  aluno: Aluno;

  constructor(private _route: ActivatedRoute, 
              private _router: Router, 
              private _alunoService: AlunosService) { }

  editarContato(){
    this._router.navigate(['/alunos',this.aluno.id,'editar']);
  }              

  ngOnInit() {
    /*
    this.inscricao = this._route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.aluno =this._alunoService.getAluno(this.id);
      }
    );
    */

    this.inscricao = this._route.data.subscribe(
      (info) => {
        this.aluno = info.aluno;
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
