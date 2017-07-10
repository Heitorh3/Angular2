import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  form: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = this._formBuilder.group({
      nome: [null],
      email: [null]
    });

    /*
    this.form = new FormGroup({
      nome: new FormControl('valor inicial'),
      email: new FormControl(null)
    });*/
  }

}
