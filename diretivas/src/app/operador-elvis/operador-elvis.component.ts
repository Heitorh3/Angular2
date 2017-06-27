import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  tarefa: any = {
    descricao: "Tarefa a ser executada",
    operador: {
      usuario: {
        nome: 'João',
        idade: null
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
