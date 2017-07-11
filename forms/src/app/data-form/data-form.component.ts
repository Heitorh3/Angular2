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
      email: [null, [Validators.email, Validators.required]]
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

  verificaValidTouched(campo){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  verificaEmailInvalido(){
    let campoEmail = this.formulario.get('email');
    if(campoEmail.errors){
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

}
