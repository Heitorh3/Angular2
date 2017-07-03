import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  insricao: Subscription;

  constructor(private _cursosService: CursosService, private _route: ActivatedRoute, private _router: Router ) {
   }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
    this.insricao = this._route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

proximaPagina(){
  //this.pagina++;
  this._router.navigate(['/cursos'],{queryParams:{'pagina': ++this.pagina}});
  
}


ngOnDestroy(){
  this.insricao.unsubscribe();
}

}