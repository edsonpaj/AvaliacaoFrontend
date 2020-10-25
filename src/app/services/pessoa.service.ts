import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError,  Observable } from 'rxjs';

import { Pessoa } from '../model/pessoa.model';
import { RequestResult } from '../model/request-result.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private urlPrefix: string = 'http://localhost:8080/pessoa';
  
  constructor(private http: HttpClient) {
  }

  save(novaPessoa: Pessoa): Observable<RequestResult> {
    return this.http.post<RequestResult>(this.urlPrefix, novaPessoa).pipe(catchError(this.serverError));
  }

  serverError(err: any) {
    console.error('sever error:', err);
    return observableThrowError(err || 'backend server error');
  }

}
