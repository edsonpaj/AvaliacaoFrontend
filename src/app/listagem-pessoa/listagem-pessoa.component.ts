import { Component, OnInit } from '@angular/core';

import { Pessoa } from '../model/pessoa.model';
import { RequestResult } from '../model/request-result.model';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'listagem-pessoa',
  templateUrl: './listagem-pessoa.component.html',
  styleUrls: ['./listagem-pessoa.component.css']
})
export class ListagemPessoaComponent implements OnInit {

  constructor(private pessoaService: PessoaService) {
    PessoaService.novaPessoaCadastrada.subscribe(
      (novaPessoa: Pessoa) =>{
        this.carregarListagemCompletaPessoas();
      }
    );
  }

  pessoas: Pessoa[];

  ngOnInit(): void {
    this.carregarListagemCompletaPessoas();
  }

  private carregarListagemCompletaPessoas() {
    this.pessoaService.getAll().subscribe(
      (requestResult: RequestResult) => {
        if (requestResult.result == "OK") {
          this.pessoas = requestResult.returnObject;
        } else {
          alert('ERRO: ' + requestResult.messageError);
        }
      });
  }

}
