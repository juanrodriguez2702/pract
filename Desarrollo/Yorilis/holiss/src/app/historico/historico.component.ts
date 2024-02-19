import { Component} from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {
  meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  porcentajes: number[] = [30, 50, 80, 50, 93, 12, 54, 10, 64, 23.543, 65, 98] ;
  mesSeleccionado: number | null = null;

  seleccionarMes(index: number): void {
    this.mesSeleccionado = index;
  }
  
}







