import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  cursos: string;

  constructor(private _cursosService: CursosService) { }

  ngOnInit() {
    this._cursosService.emitirCursoCriado.subscribe(
      curso => this.cursos = curso
    )
  }

}
