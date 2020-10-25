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

  novaPessoa: Pessoa;

  hoje: Date = new Date();

  constructor(private pessoaService: PessoaService) { 
    this.novaPessoa = new Pessoa;
  }

  public cadastrarPessoa(){
    console.log(this.novaPessoa);
    this.pessoaService.save(this.novaPessoa).subscribe(
      (requestResult: RequestResult) => {
        if(requestResult.result == "OK"){
          alert('Pessoa Cadastrada');
        }else{
          alert('ERRO: '+requestResult.messageError);
        }
      }
    );
  }

  

  ngOnInit(): void {
  }

}
