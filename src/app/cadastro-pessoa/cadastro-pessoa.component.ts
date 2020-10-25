import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';


@Component({
  selector: 'cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  novaPessoa: Pessoa;

  hoje: Date = new Date();

  constructor() { 
    this.novaPessoa = new Pessoa;
  }

  public cadastrarPessoa(){
    console.log(this.novaPessoa);
  }

  ngOnInit(): void {
  }

}
