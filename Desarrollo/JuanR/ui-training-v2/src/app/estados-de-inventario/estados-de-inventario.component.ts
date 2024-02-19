import { Component, OnInit } from '@angular/core';
import { NomenclaturaDeProductosComponent } from '../nomenclatura-de-productos/nomenclatura-de-productos.component';

@Component({
  selector: 'app-estados-de-inventario',
  standalone: true,
  imports: [NomenclaturaDeProductosComponent],
  templateUrl: './estados-de-inventario.component.html',
  styleUrl: './estados-de-inventario.component.css'
})
export class EstadosDeInventarioComponent implements OnInit {
ngOnInit(): void {
  const btns = document.querySelectorAll('.change_st');

  btns.forEach(btn=>{
    btn.addEventListener('click', () => {

      btns.forEach(otroB => {
        const otb = otroB as HTMLButtonElement
        otb.style.backgroundColor = ""
        otb.style.color = ""
      })
      const Bg = btn as HTMLButtonElement;

      Bg.style.backgroundColor = "#712CEE";
      Bg.style.color = "#FFFFFF"
      Bg.style.transition = ".7s ease"
  })

  })
  
}
}
