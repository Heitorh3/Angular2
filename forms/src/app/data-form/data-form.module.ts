import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { DataFormComponent } from './data-form.component';

@NgModule({
  imports: [
    SharedModule,
    HttpModule
  ],
  declarations: [
    DataFormComponent
  ]
})
export class DataFormModule { }
