import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { EstadosComponent } from './estados/estados.component';
import { NomenclaturaComponent } from './nomenclatura/nomenclatura.component';
import { HistoricoComponent } from './historico/historico.component';
import { PruebaNomenclaturaComponent } from './prueba-nomenclatura/prueba-nomenclatura.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    EstadosComponent,
    NomenclaturaComponent,
    HistoricoComponent,
    PruebaNomenclaturaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
