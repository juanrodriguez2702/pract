import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { CirculoComponent } from './circulo/circulo.component';
import { NOMENCLATURAComponent } from './nomenclatura/nomenclatura.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { HistoricosDeInventarioComponent } from './historicos-de-inventario/historicos-de-inventario.component';
import { InventariosEjecutadosComponent } from './inventarios-ejecutados/inventarios-ejecutados.component';
import { EstadosDeInventarioComponent } from './estados-de-inventario/estados-de-inventario.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    CirculoComponent,
    NOMENCLATURAComponent,
    PruebasComponent,
    HistoricosDeInventarioComponent,
    InventariosEjecutadosComponent,
    EstadosDeInventarioComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
