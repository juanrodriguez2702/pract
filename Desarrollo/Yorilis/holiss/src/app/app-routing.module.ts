import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { EstadosComponent } from './estados/estados.component';
import { NomenclaturaComponent } from './nomenclatura/nomenclatura.component';
import { HistoricoComponent } from './historico/historico.component';
import { PruebaNomenclaturaComponent } from './prueba-nomenclatura/prueba-nomenclatura.component';

const routes: Routes = [
  {
    path: '', 
    component:AppComponent
  },
 
  {
    path: 'producto', 
    component:ProductoComponent
  },

  {
    path: 'estados',
    component:EstadosComponent
  },

  {
    path: 'nomenclatura',
    component:NomenclaturaComponent
  },

  {
    path: 'historico',
    component:HistoricoComponent
  },

  {
    path: 'prueba',
    component:PruebaNomenclaturaComponent
  },

  
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
