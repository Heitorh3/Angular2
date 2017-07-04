import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  aluno: any;

  constructor(private _route: ActivatedRoute, 
              private _router: Router, 
              private _alunoService: AlunosService) { }

  editarContato(){
    this._router.navigate(['/alunos',this.aluno.id,'editar']);
  }              

  ngOnInit() {
    this.inscricao = this._route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.aluno =this._alunoService.getAluno(this.id);
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
