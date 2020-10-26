import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError,  Observable } from 'rxjs';

import { Pessoa } from '../model/pessoa.model';
import { RequestResult } from '../model/request-result.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private urlBasePessoa: string = 'http://localhost:8080/pessoa';

  @Output() static novaPessoaCadastrada = new EventEmitter();
  @Output() static iniciarEdicaoPessoa = new EventEmitter();
  @Output() static pessoaModificada = new EventEmitter();
  @Output() static pessoaExcluida = new EventEmitter();
  
  constructor(private http: HttpClient) {
  }

  save(novaPessoa: Pessoa): Observable<RequestResult> {
    return this.http.post<RequestResult>(this.urlBasePessoa, novaPessoa).pipe(catchError(this.serverError));
  }

  getAll(): Observable<RequestResult> {
    return this.http.get<RequestResult>(this.urlBasePessoa).pipe(catchError(this.serverError));
  }

  editar(pessoaUpdate: Pessoa): Observable<RequestResult> {
    console.log(pessoaUpdate);
    return this.http.put<RequestResult>(this.urlBasePessoa, pessoaUpdate).pipe(catchError(this.serverError));
  }

  excluir(id: number): Observable<RequestResult> {
    return this.http.delete<RequestResult>(this.urlBasePessoa+'/'+id).pipe(catchError(this.serverError));
  }

  serverError(err: any) {
    console.error('sever error:', err);
    return observableThrowError(err || 'backend server error');
  }

}
