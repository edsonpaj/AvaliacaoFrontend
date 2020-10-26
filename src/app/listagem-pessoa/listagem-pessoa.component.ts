import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Pessoa } from '../model/pessoa.model';
import { RequestResult } from '../model/request-result.model';
import { PessoaService } from '../services/pessoa.service';



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
        this.pessoas.push(novaPessoa);
      });

    PessoaService.pessoaModificada.subscribe(
      (pessoaModificada: Pessoa) =>{
        this.pessoas = this.pessoas.filter(f => f.id != pessoaModificada.id);
        this.pessoas.push(pessoaModificada);
      });

    PessoaService.pessoaExcluida.subscribe(
      (pessoaExcluida: Pessoa) =>{
        this.pessoas = this.pessoas.filter(f => f.id != pessoaExcluida.id);
      });
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

  editarPessoa(pess: Pessoa){
    this.pessoaService.editar(pess).subscribe(
      (requestResult: RequestResult) => {
        if (requestResult.result == "OK") {
          PessoaService.pessoaModificada.emit(pess);
        } else {
          alert('ERRO: ' + requestResult.messageError);
        }
      });
  }

  excluirPessoa(pess: Pessoa){
    if(confirm('Tem certeza que deseja excluir '+pess.nome+'?')){
      this.pessoaService.excluir(pess.id).subscribe(
        (requestResult: RequestResult) => {
          if (requestResult.result == "OK") {
            PessoaService.pessoaExcluida.emit(pess);
          } else {
            alert('ERRO: ' + requestResult.messageError);
          }
        });
    }
  }

}
