import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosDeInventarioComponent } from '../estados-de-inventario/estados-de-inventario.component';

@Component({
  selector: 'app-nomenclatura-de-productos',
  standalone: true,
  imports: [CommonModule,EstadosDeInventarioComponent],
  templateUrl: './nomenclatura-de-productos.component.html',
  styleUrl: './nomenclatura-de-productos.component.css'
})
export class NomenclaturaDeProductosComponent implements OnInit{
constructor(){

}
value:string="+"
idElAcordeon:string="acordeon"
idacordion:string='Contenido_Acordeón'
idBtnDesple:string='desple'

listados: string ="";

filtrarContenido(estado: string) {
  this.listados  = estado;
  let cerrarTodo = document.querySelectorAll('.id-product');
  cerrarTodo.forEach(cerrar=>{
    cerrar.classList.remove('mostrar')
  })

}

  desplegar(btn:string){
    const desple = document.getElementById('Contenido_Acordeón'+btn)
    const borderE = document.getElementById(this.idElAcordeon + btn)
    desple?.classList.toggle('mostrar')
    borderE?.classList.toggle('borde')
    console.log(btn)

    const button = document.getElementById(this.idBtnDesple + btn)
    if(button){
      if(button.textContent === '+'){
        button.textContent = '-'
      }
      else if(button.textContent === '-'){
        button.textContent= '+'
      }
    }
  }

  ngOnInit(): void {
    const btns = document.querySelectorAll('.btn');

    btns.forEach(btn=>{
      btn.addEventListener('click', () => {

        btns.forEach(otroB =>{
          const otb = otroB as HTMLButtonElement
          otb.style.backgroundColor = ""
          otb.style.color = ""
          otb.style.fontWeight = ""
        })
        const btn_c = btn as HTMLButtonElement;

        btn_c.style.backgroundColor = "#712CEE"
        btn_c.style.color = "#ffffff"
        btn_c.style.transition = ".4s ease"
        btn_c.style.fontWeight = "700"
      })
    })

  }

  listaProductos = [
    { id: '1', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['elemento1', 'elemento2', 'elemento3','elemento1', 'elemento2', 'elemento3',], estado: "activo" },
    { id: '2', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "activo" },
    { id: '3', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "activo" },
    { id: '4', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "activo" },
    { id: '5', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "activo" },
    { id: '6', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "activo" },
    { id: '7', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "activo" },
    { id: '8', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "activo" },
    { id: '9', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "activo" },
    { id: '10', nombre: 'activo G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "activo" },
    { id: '11', nombre: 'otro contenido', contenido: ['otro1', 'otro2', 'otro3'], estado: "inactivo" },
    { id: '12', nombre: 'inactivo 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "inactivo" },
    { id: '13', nombre: 'inactivo 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "inactivo" },
    { id: '14', nombre: 'inactivo 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "inactivo" },
    { id: '15', nombre: 'inactivo 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "inactivo" },
    { id: '16', nombre: 'inactivo 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "inactivo" },
    { id: '17', nombre: 'inactivo 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "inactivo" },
    { id: '18', nombre: 'inactivo 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "inactivo" },
    { id: '19', nombre: 'inactivo 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "inactivo" },
    { id: '20', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "inactivo" },
    { id: '21', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "inactivo" },
    { id: '22', nombre: 'producto descontinuado ', contenido: ['otro1', 'otro2', 'otro3'], estado: "descontinuados" },
    { id: '23', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "descontinuados" },
    { id: '24', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "descontinuados" },
    { id: '25', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "descontinuados" },
    { id: '26', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "descontinuados" },
    { id: '27', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "descontinuados" },
    { id: '28', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "descontinuados" },
    { id: '29', nombre: 'descontinuados MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "descontinuados" },
    { id: '30', nombre: 'otro contenido mas', contenido: ['otro1', 'otro2', 'otro3'], estado: "descontinuados" },
    { id: '31', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "descontinuados" },
    { id: '32', nombre: 'suspendidos 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "suspendidos" },
    { id: '33', nombre: 'suspendidos 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "suspendidos" },
    { id: '34', nombre: 'suspendidos 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "suspendidos" },
    { id: '35', nombre: 'suspendidos 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "suspendidos" },
    { id: '36', nombre: 'suspendidos 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "suspendidos" },
    { id: '37', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "suspendidos" },
    { id: '38', nombre: 'producto en pendientes', contenido: ['otro1', 'otro2', 'otro3'], estado: "pendientes" },
    { id: '39', nombre: 'otro contenido de prueba', contenido: ['otro1', 'otro2', 'otro3'], estado: "pendientes" },
    { id: '40', nombre: 'otro contenido de prueba', contenido: ['otro1', 'otro2', 'otro3'], estado: "pendientes" },
    { id: '41', nombre: 'otro contenido de prueba', contenido: ['otro1', 'otro2', 'otro3'], estado: "pendientes" },
    { id: '42', nombre: 'otro contenido de prueba', contenido: ['otro1', 'otro2', 'otro3'], estado: "pendientes" },
    { id: '43', nombre: 'otro contenido de prueba', contenido: ['otro1', 'otro2', 'otro3'], estado: "pendientes" },
    { id: '44', nombre: 'AREPA DE HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "pendientes" },
    { id: '45', nombre: 'nuevo G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "nuevos" },
    { id: '46', nombre: 'nuevo G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "nuevos" },
    { id: '47', nombre: 'nuevo G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "nuevos" },
    { id: '48', nombre: 'nuevo G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "nuevos" },
    { id: '49', nombre: 'nuevo G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "nuevos" },
    { id: '50', nombre: 'nuevo G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "nuevos" },
    { id: '51', nombre: 'nuevo G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "nuevos" },
    { id: '52', nombre: 'nuevo G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "nuevos" },
    { id: '53', nombre: 'nuevo G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "nuevos" },
    { id: '54', nombre: 'new HUEVO MINI 240 G-CJ12', contenido: ['otro1', 'otro2', 'otro3'], estado: "nuevos" },
  ];
}
