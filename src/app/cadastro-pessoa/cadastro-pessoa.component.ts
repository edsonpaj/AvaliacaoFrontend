import { Component, OnInit } from '@angular/core';

import { Pessoa } from '../model/pessoa.model';
import { RequestResult } from '../model/request-result.model';
import { PessoaService } from '../services/pessoa.service';


@Component({
  selector: 'cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  pessoa: Pessoa;

  hoje: Date = new Date();

  constructor(private pessoaService: PessoaService) { 
    
    this.pessoa = new Pessoa;

    PessoaService.iniciarEdicaoPessoa.subscribe(
      (pessoaParaEdicao: Pessoa) =>{
        //problema de conversão de data
        pessoaParaEdicao.dataNascimento = new Date(pessoaParaEdicao.dataNascimento);
        this.pessoa = Object.assign(new Pessoa, pessoaParaEdicao);
      });

  }

  public salvarPessoa(){
    if(this.pessoa.id != null && this.pessoa.id != 0){
      this.pessoaService.editar(this.pessoa).subscribe(
        (requestResult: RequestResult) => {
          if(requestResult.result == "OK"){
            this.pessoa = new Pessoa;
            PessoaService.pessoaModificada.emit(requestResult.returnObject);
            alert('Pessoa ATUALIZADA');
          }else{
            alert('ERRO: '+requestResult.messageError);
          }
        });
    }else{
      this.pessoaService.save(this.pessoa).subscribe(
        (requestResult: RequestResult) => {
          if(requestResult.result == "OK"){
            this.pessoa = new Pessoa;
            PessoaService.novaPessoaCadastrada.emit(requestResult.returnObject);
            alert('Pessoa CADASTRADA');
          }else{
            alert('ERRO: '+requestResult.messageError);
          }
        });
    }
  }

  ngOnInit(): void {
  }

  limpar(){
    this.pessoa = new Pessoa;
  }

  onSelectImage(event: any) {
    const file = event[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
     this.pessoa.fotoBase64 = reader.result.toString();
    };
  }


}
