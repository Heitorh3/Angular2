import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Http } from "@angular/http";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private _formBuilder: FormBuilder, 
    private _http: Http) { }

  ngOnInit() {

    this.formulario = this._formBuilder.group({
      nome: [null],
      email: [null]
    });

    /*
    this.form = new FormGroup({
      nome: new FormControl('valor inicial'),
      email: new FormControl(null)
    });*/
  }

  onSubmit(){
    console.log(this.formulario.value);

     this._http.post('https://httpbin.org/post',JSON.stringify(this.formulario.value))
              .map(resposta => resposta)
              .subscribe(dados => {
                console.log(dados);
                //reseta o form
                this.resetar();
              },
              (erro: any) => alert('Erro'));
  }

  resetar(){
    this.formulario.reset();
  }

}
