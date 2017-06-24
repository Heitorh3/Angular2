import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loaine.traing';
  urlImagen: string = 'http://lorempixel.com/400/200/sports/';
  
  cursoAngular: boolean = true;

  getCurtirCurso(){
    return true;
  }

  getValor(){
    return 2;
  }
  constructor() { }

  ngOnInit() {
  }

}
