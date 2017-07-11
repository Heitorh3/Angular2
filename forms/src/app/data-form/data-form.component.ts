import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from "@angular/forms";
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
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.email, Validators.required]],

      endereco: this._formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
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

  verificaValidTouched(campo: string){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  verificaEmailInvalido(){
    let campoEmail = this.formulario.get('email');
    if(campoEmail.errors){
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(){

  let cep = this.formulario.get('endereco.cep').value;

  //Nova variável "cep" somente com dígitos.
  cep = cep.replace(/\D/g, '');

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    this.resetaDadosForm();

    //Valida o formato do CEP.
    if(validacep.test(cep)) {
        this._http.get(`//viacep.com.br/ws/${cep}/json`)
        .map(dados => dados.json())
        .subscribe(dados => this.populaDadosForm(dados));
    }
  }
}

populaDadosForm(dados){
  if(!("erro" in dados)){
      //Atualiza os campos com os valores da consulta.
      this.formulario.patchValue({
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
    this.resetaDadosForm();
    alert("CEP não encontrado.");
  }
      
}

resetaDadosForm(){
  this.formulario.patchValue({
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
