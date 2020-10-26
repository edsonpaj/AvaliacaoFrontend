import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenssageiroService {

  @Output() static exibirMenssagemSucesso = new EventEmitter();
  @Output() static exibirMenssagemInfo = new EventEmitter();
  @Output() static exibirMenssagemWarn = new EventEmitter();
  @Output() static exibirMenssagemErro = new EventEmitter();

  constructor() { }
}
