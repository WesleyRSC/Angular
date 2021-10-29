import { Component, VERSION } from '@angular/core';
import { ArCondicionadoComponent } from './ar-condicionado/ar-condicionado.component';
import { FogaoComponent } from './fogao/fogao.component';
import { GeladeiraComponent } from './geladeira/geladeira.component';
import { MaquinaLavarComponent } from './maquina-lavar/maquina-lavar.component';
import { NotebookComponent } from './notebook/notebook.component';
import { TelevisaoComponent } from './televisao/televisao.component';
import sortBy from 'sort-by';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor() {}

  ordemProdutos = [
    {
      produto: 'fogao',
      posicao: 3,
      componente: FogaoComponent,
      prazo: new Date(2021, 10, 17),
    },
    {
      produto: 'geladeira',
      posicao: 5,
      componente: GeladeiraComponent,
      prazo: new Date(2021, 10, 15),
    },
    {
      produto: 'notebook',
      posicao: 1,
      componente: NotebookComponent,
      prazo: new Date(2021, 10, 29),
    },
    {
      produto: 'ar-condicionado',
      posicao: 4,
      componente: ArCondicionadoComponent,
      prazo: new Date(2021, 11, 29),
    },
    {
      produto: 'televisao',
      posicao: 2,
      componente: TelevisaoComponent,
      prazo: new Date(2021, 10, 3),
    },
    {
      produto: 'maquina-lavar',
      posicao: 6,
      componente: MaquinaLavarComponent,
      prazo: new Date(2021, 10, 29),
    },
  ];

  ngOnInit() {
    this.ordemProdutos.sort(sortBy('prazo'));
  }
}
