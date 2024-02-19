import { Component } from '@angular/core';

@Component({
  selector: 'app-historicos-de-inventario',
  templateUrl: './historicos-de-inventario.component.html',
  styleUrls: ['./historicos-de-inventario.component.scss']
})
export class HistoricosDeInventarioComponent {
  RegionalCaribe:string= "RegionalCaribe"

  icon:string = "icono"

  meses_v2 = [
    { porcentaje1: "23.7%", porcentaje2: "34.3%" },
    { porcentaje1: "15.2%", porcentaje2: "20.6%" },
    { porcentaje1: "17.8%", porcentaje2: "28.8%" },
    { porcentaje1: "43.1%", porcentaje2: "64.4%" },
    { porcentaje1: "8.5%", porcentaje2: "12.6%" },
    { porcentaje1: "3.8%", porcentaje2: "98.2%" },
    { porcentaje1: "19.1%", porcentaje2: "39.2%" },
    { porcentaje1: "25.3%", porcentaje2: "66.2%" },
    { porcentaje1: "12.7%", porcentaje2: "32.2%" },
    { porcentaje1: "37.9%", porcentaje2: "76.2%" },
    { porcentaje1: "6.4%", porcentaje2: "54.2%" },
    { porcentaje1: "33.6%", porcentaje2: "67.8%" },
  ]


  loadDat(mes:string, indice:number){

    for (let index = 1; index <= 6; index++) {
      
      const barras = document.getElementById('barra'+ index)
      barras?.classList.forEach((value)=>{

        if(value!=='progreso' && value!==mes+index){
          barras?.classList.remove(value)
        }
      
      })
      barras?.classList.add (mes+index)
      console.log('barra'+ index)   
      
    }
    const inicio = document.getElementById('mensajeN1')
    const mensaje1 = document.getElementsByClassName('numero') 
    const mensaje2 = document.getElementsByClassName('numero_por')
    const icon = this.icon
    const porcentaje1 = this.meses_v2[indice-1].porcentaje1 
    const porcentaje2 = this.meses_v2[indice-1].porcentaje2

    if(mensaje1.length && mensaje2.length && icon.length >0){
      mensaje1[0].textContent = ""
      inicio!.classList.remove('ini')
      mensaje1[0].textContent = porcentaje1
      mensaje2[0].textContent = porcentaje2
      this.icon = ("porcent")  
    }
  }

  scrollleft () {
    const content_Scroll = document.getElementById('content_Scroll');
    console.log(content_Scroll!.scrollLeft)
    content_Scroll!.scrollLeft -= 120
   }

   scrollrigth () {
     const content_Scroll = document.getElementById('content_Scroll')
     content_Scroll!.scrollLeft += 120
   }
    
  ngOnInit(): void {
    const btns = document.querySelectorAll('.cambios_a');

  btns.forEach(btn=>{
    btn.addEventListener('click', () => {

      btns.forEach(otroB =>{
        const otb = otroB as HTMLButtonElement
        otb.style.backgroundColor = ""
        otb.style.color = ""
        otb.style.fontSize = ""
        otb.style.fontWeight = ""
      })
      const btn_c = btn as HTMLButtonElement;

      btn_c.style.backgroundColor = "#C5C5D3"
      btn_c.style.color = "#712CEE"
      btn_c.style.transition = ".4s ease"
      btn_c.style.fontSize = "15px"
      btn_c.style.fontWeight = "700"
    })
  })
  }

}
