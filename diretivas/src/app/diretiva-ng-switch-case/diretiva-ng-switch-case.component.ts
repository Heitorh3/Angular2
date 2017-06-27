import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-switch-case',
  templateUrl: './diretiva-ng-switch-case.component.html',
  styleUrls: ['./diretiva-ng-switch-case.component.css']
})
export class DiretivaNgSwitchCaseComponent implements OnInit {

  aba: string = 'home';
  
  constructor() { }

  ngOnInit() {
  }

}
