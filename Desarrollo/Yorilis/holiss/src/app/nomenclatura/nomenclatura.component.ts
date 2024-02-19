/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-nomenclatura',
  templateUrl: './nomenclatura.component.html',
  styleUrls: ['./nomenclatura.component.css']
})
export class NomenclaturaComponent {

}
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-nomenclatura',
  templateUrl: './nomenclatura.component.html',
  styleUrls: ['./nomenclatura.component.css']
})

export class NomenclaturaComponent {
  botonActivo: string | null = null;
  listaVisible: string | null = null;
  productoSeleccionado: string | null = null;

  
  mostrarLista(opcion: string){
    this.botonActivo = this.botonActivo === opcion ? null : opcion;
    this.listaVisible = opcion;
  }

  seleccionarProducto(producto: string) {
    this.productoSeleccionado = this.productoSeleccionado === producto ? null : producto;
  }


}
