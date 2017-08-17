import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DropdownService {

  constructor(private _http: Http) { }

  getEstadosBr(){
    return  this._http.get('assets/dados/estadosbr.json')
                .map((res: Response) => res.json());
  }
}