import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { CirculoComponent } from './circulo/circulo.component';
import { AppComponent } from './app.component';
import { NOMENCLATURAComponent } from './nomenclatura/nomenclatura.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { InventariosEjecutadosComponent } from './inventarios-ejecutados/inventarios-ejecutados.component';
import { EstadosDeInventarioComponent } from './estados-de-inventario/estados-de-inventario.component';
import { HistoricosDeInventarioComponent } from './historicos-de-inventario/historicos-de-inventario.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  { path: '',
component: AppComponent
},
{ path:'circulo',
 component: CirculoComponent
},
{ path: 'producto',
component: ProductoComponent
},

{path: 'nomenclatura',
component: NOMENCLATURAComponent
},

{path: 'pruebas',
component: PruebasComponent
},

{path: 'historicos-de-inventario',
component:  HistoricosDeInventarioComponent
},

{path: 'inventarios-Ejecutados',
component: InventariosEjecutadosComponent
},


{path: 'estados-de-inventario',
component: EstadosDeInventarioComponent
},

{path: 'cards',
component: CardsComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
