import { Component } from '@angular/core';

@Component({
  selector: 'app-nomenclatura',
  templateUrl: './nomenclatura.component.html',
  styleUrls: ['./nomenclatura.component.scss']
})
export class NOMENCLATURAComponent {
  
  desplegar(btn:string){
    const desple = document.getElementById('Contenido_Acordeón'+btn)
    desple?.classList.toggle('mostrar')
  }

}

// productos_c(){
//   const alimento = document.
// }








