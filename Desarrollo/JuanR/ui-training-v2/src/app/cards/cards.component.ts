import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  imgs:string =''
  DatosNgFor = [
    {nombre: 'Total inventarios', numero:'1010', img: 'assets/imgcards/calendar.png'},
    {nombre: 'Inventarios Programados', numero:'1010', img: 'assets/imgcards/calendar.png'},
    {nombre: 'Inventarios Pendientes', numero:'18', img: 'assets/imgcards/exc.png'},
    {nombre: 'Total Tienda Agendadas', numero:'18', img: 'assets/imgcards/exc.png'},
    {nombre: 'Inventarios Realizados', numero:'18', img: 'assets/imgcards/check2.png'},
    {nombre: 'Inventarios Realizados', numero:'18', img: 'assets/imgcards/check2.png'},
  
  ];

  push(){
    
    this.DatosNgFor.push({nombre: 'Total almacenaje', numero:'1410', img: 'assets/imgcards/calendar.png'})
  }
  push2(){
    this.DatosNgFor.push({nombre: 'Total almacenaje', numero:'1410', img: 'assets/imgcards/calendar.png'})
    this.DatosNgFor.push({nombre: 'inventario', numero:'1410', img: 'assets/imgcards/calendar.png'})
    
  }
  
}
