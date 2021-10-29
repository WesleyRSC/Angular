import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TelevisaoComponent } from './televisao/televisao.component';
import { MaquinaLavarComponent } from './maquina-lavar/maquina-lavar.component';
import { GeladeiraComponent } from './geladeira/geladeira.component';
import { FogaoComponent } from './fogao/fogao.component';
import { NotebookComponent } from './notebook/notebook.component';
import { CelularComponent } from './celular/celular.component';
import { ArCondicionadoComponent } from './ar-condicionado/ar-condicionado.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TelevisaoComponent, MaquinaLavarComponent, GeladeiraComponent, FogaoComponent, NotebookComponent, CelularComponent, ArCondicionadoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
