import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: 'heitor@ufu.br'
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form){

  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssError(campo){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

}
