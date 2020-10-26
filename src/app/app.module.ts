import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { InputTextModule}  from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { FieldsetModule } from 'primeng/fieldset';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {FileUploadModule} from 'primeng/fileupload';


import { AppComponent } from './app.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';

import { PessoaService } from './services/pessoa.service';
import { HttpClientModule } from '@angular/common/http';
import { ListagemPessoaComponent } from './listagem-pessoa/listagem-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPessoaComponent,
    ListagemPessoaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    InputMaskModule,
    FieldsetModule,
    TableModule,
    PanelModule,
    FileUploadModule
  ],
  providers: [
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
