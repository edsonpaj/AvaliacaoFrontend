import { Component, OnInit, ViewChild } from '@angular/core';

import { Pessoa } from '../model/pessoa.model';
import { RequestResult } from '../model/request-result.model';
import { PessoaService } from '../services/pessoa.service';

import { Table } from 'primeng/table';

@Component({
  selector: 'listagem-pessoa',
  templateUrl: './listagem-pessoa.component.html',
  styleUrls: ['./listagem-pessoa.component.css']
})
export class ListagemPessoaComponent implements OnInit {

  @ViewChild('dt') table: Table;
  pessoas: Pessoa[];
  loadingLista: boolean = true;

  constructor(private pessoaService: PessoaService) {
    PessoaService.novaPessoaCadastrada.subscribe(
      (novaPessoa: Pessoa) =>{
        this.carregarListagemCompletaPessoas();
      }
    );
  }


  ngOnInit(): void {
    this.carregarListagemCompletaPessoas();
  }

  private carregarListagemCompletaPessoas() {
    this.pessoaService.getAll().subscribe(
      (requestResult: RequestResult) => {
        if (requestResult.result == "OK") {
          this.pessoas = requestResult.returnObject;
          this.loadingLista = false;
        } else {
          alert('ERRO: ' + requestResult.messageError);
        }
      });
  }

}
