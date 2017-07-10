import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

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

  constructor(private _http: Http) { }

  ngOnInit() {
  }

  onSubmit(formulario){

    this._http.post('https://httpbin.org/post',JSON.stringify(formulario.value))
              .map(resposta => resposta)
              .subscribe(dados => {
                 console.log(dados);
                 formulario.form.reset();
              });
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep, form){
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      this.resetaDadosForm(form);

      //Valida o formato do CEP.
      if(validacep.test(cep)) {
          this._http.get(`//viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json())
          .subscribe(dados => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados, formulario){
    if(!("erro" in dados)){
       //Atualiza os campos com os valores da consulta.
        formulario.form.patchValue({
          endereco: {
            rua: dados.logradouro,
            complemento: dados.complemento,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          }
        });
    }else{
      //CEP pesquisado não foi encontrado.
     this.resetaDadosForm(formulario);
      alert("CEP não encontrado.");
    }
       
  }

  resetaDadosForm(formulario){
    formulario.form.patchValue({
      endereco: {
        rua:null,        
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    })
  }
}
