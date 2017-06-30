import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './../shared/log.service';

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'Java', 'PHP', 'C++']

    constructor(private _logService: LogService){
        this._logService.consoleLog('CursosService');        
    }

    getCursos(){
        this._logService.consoleLog('Listando todos os cursos');
        return this.cursos;
    }

    addCurso(curso: string){
        this._logService.consoleLog(`Criando um novo curso ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
    }

}