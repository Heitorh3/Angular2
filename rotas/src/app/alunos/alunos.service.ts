import { Injectable } from '@angular/core';

import { Aluno } from './aluno';

@Injectable()
export class AlunosService {

  private alunos: Aluno[] = [
    { id: 1, 
      nome: 'Heitor Neto',
      email: 'heitor@gmail.com'
    },
    { id: 2,
      nome:'João de Deus',
      email: 'joao@gmail.com'
    },
    {
      id:3,
      nome:'Maria Idalina',
      email: 'mariaida@gmail.com'
    }
  ];

  constructor() { }

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    let alunos = this.getAlunos();
    for (let i=0; i<alunos.length; i++){
      let aluno = alunos[i];
      if (aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

}
