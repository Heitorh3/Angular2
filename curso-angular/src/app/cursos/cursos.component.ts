import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: String[];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training';

    //var servico = new CursosService();
    this.cursos = cursosService.getCursos();
   }

  ngOnInit() {
  }

}
