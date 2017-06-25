import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: string = 'Heitor Neto';

  pessoa: any = {
    nome: 'Heitor Neto',
    idade: 25
  } 

  constructor() { }

  ngOnInit() {
  }

}
