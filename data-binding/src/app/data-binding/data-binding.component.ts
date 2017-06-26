import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
    .highlight{
        background-color: yellowgreen;
        font-weight: bold;
    }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loaine.traing';
  urlImagen: string = 'http://lorempixel.com/400/200/sports/';

  valorAtual: string = '';
  valorSalvo = '';
  
  isonMouseOver: boolean = false;

  cursoAngular: boolean = true;

  valorInicial: number = 3;

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert("Botão clicado");
  }
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isonMouseOver = ! this.isonMouseOver;
  }

   onMudouValor(evento){
    console.log(evento.novoValor);
  }


  getValor(){
    return 2;
  }

  constructor() { }

  ngOnInit() {
  }

}
