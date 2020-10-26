import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api/message';
import { MenssageiroService } from '../services/menssageiro.service';

@Component({
  selector: 'menssageiro',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  msgs: Message[];
  timeout: number = 10000;
  timeoutErro: number = 20000;

  constructor() { 
    MenssageiroService.exibirMenssagemSucesso.subscribe(
      (msg: string) =>{
        this.msgs = [{severity:'success', summary:'Sucesso: ', detail:msg}];
        setTimeout(() => { this.clearMessages(); }, this.timeout);
      });
    MenssageiroService.exibirMenssagemInfo.subscribe(
      (msg: string) =>{
        this.msgs = [{severity:'info', summary:'Informação: ', detail:msg}];
        setTimeout(() => { this.clearMessages(); }, this.timeout);
      });
    MenssageiroService.exibirMenssagemWarn.subscribe(
      (msg: string) =>{
        this.msgs = [{severity:'warn', summary:'Aviso: ', detail:msg}];
        setTimeout(() => { this.clearMessages(); }, this.timeout);
      });
    MenssageiroService.exibirMenssagemErro.subscribe(
      (msg: string) =>{
        this.msgs = [{severity:'error', summary:'Erro: ', detail:msg}];
        setTimeout(() => { this.clearMessages(); }, this.timeoutErro);
      });
  }

  ngOnInit(): void {
  }

  clearMessages() {
    this.msgs = [];
  }

}
