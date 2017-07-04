import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  aluno: any;

 constructor(private _route: ActivatedRoute,
              private _alunoService: AlunosService) { }

  ngOnInit() {
    this.inscricao = this._route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.aluno =this._alunoService.getAluno(this.id);

        if(this.aluno == null){
          this.aluno = [];
        }
      }
    );
  }

}
