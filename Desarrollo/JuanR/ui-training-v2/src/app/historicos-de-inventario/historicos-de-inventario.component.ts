import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historicos-de-inventario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historicos-de-inventario.component.html',
  styleUrl: './historicos-de-inventario.component.css',

          
})
export class HistoricosDeInventarioComponent implements OnInit {
  icon:string = "icono"
  
  mesSeleccionado:any = ["","","","","",""]


  meses_v1:any = [
    {enero:["10%","25%","8%","60%","45%","80%"], porcentaje1: 23.34, porcentaje2: 34.38},
    {febrero:["15%","30%","50%","20%","70%","90%"],porcentaje1: 15.67, porcentaje2: 20.63},
    {marzo:["25%","40%","55%","30%","65%","75%"],porcentaje1: 12.80, porcentaje2: 21.82}, 
    {abril:["35%","50%","70%","40%","80%","95%"],porcentaje1: 17.88, porcentaje2: 28.83 },
    {mayo:["20%","35%","60%","25%","75%","85%"],porcentaje1: 43.17, porcentaje2: 64.48 },
    {junio:["40%","55%","75%","45%","90%","50%"], porcentaje1: 8.54, porcentaje2: 12.68},
    {julio:["30%","45%","65%","35%","60%","70%"],porcentaje1: 3.82, porcentaje2: 98.28},
    {agosto:["18%","33%","58%","23%","68%","78%"],porcentaje1: 25.3, porcentaje2: 66.25},
    {septiembre:["22%","37%","52%","28%","73%","83%"],porcentaje1: 12.75, porcentaje2: 32.23},
    {octubre:["28%","43%","68%","33%","78%","88%"], porcentaje1: 37.94, porcentaje2: 76.24},
    {noviembre:["33%","48%","63%","38%","83%","93%"],porcentaje1: 6.43, porcentaje2: 54.62},
    {diciembre:["38%","53%","78%","43%","88%","98%"],porcentaje1: 33.64, porcentaje2: 67.87 },
  ]

  BuscarMes(obtenerMes: string , indice:number) {
    const mesEncontrado = this.meses_v1.find((mesObj: any) => obtenerMes in mesObj);
    this.mesSeleccionado = mesEncontrado[obtenerMes]    

    const por1 = this.meses_v1[indice-1].porcentaje1 
    const por2 = this.meses_v1[indice-1].porcentaje2
    
    const primerP = document.getElementById('mensaje1')
    const segundoP = document.getElementById('mensaje2')
    primerP?.classList.remove('ini')
    this.icon = ("")
    let cantidad = 0
    let cantidad2 = 0
    let tiempo=setInterval(()=>{
      cantidad+=0.01
      primerP!.textContent=cantidad.toFixed(2)+"%";
      if(cantidad >= por1){
        clearInterval(tiempo)
      }

    },)
    let tiempo2=setInterval(()=>{
      cantidad2+=0.01
      segundoP!.textContent = cantidad2.toFixed(2)+"%"
      if(cantidad2 >= por2){
        clearInterval(tiempo2)
      }
    },)


  }

  

  // meses_v2 = [
  //   { porcentaje1: "23.7%", porcentaje2: "34.3%" },
  //   { porcentaje1: "15.2%", porcentaje2: "20.6%" },
  //   { porcentaje1: "17.8%", porcentaje2: "28.8%" },
  //   { porcentaje1: "43.1%", porcentaje2: "64.4%" },
  //   { porcentaje1: "8.5%", porcentaje2: "12.6%" },
  //   { porcentaje1: "3.8%", porcentaje2: "98.2%" },
  //   { porcentaje1: "19.1%", porcentaje2: "39.2%" },
  //   { porcentaje1: "25.3%", porcentaje2: "66.2%" },
  //   { porcentaje1: "12.7%", porcentaje2: "32.2%" },
  //   { porcentaje1: "37.9%", porcentaje2: "76.2%" },
  //   { porcentaje1: "6.4%", porcentaje2: "54.2%" },
  //   { porcentaje1: "33.6%", porcentaje2: "67.8%" },
  // ]

  // loadData(mes:string, indice:number){
    
  //   for (let index = 1; index <= 6; index++) {
      
  //     const barra = document.getElementById('barra'+ index)
  //     barra?.classList.forEach((value)=>{

  //       if(value!=='progreso' && value!==mes+index){
  //         barra?.classList.remove(value)
  //       }
      
  //     })
  //     barra?.classList.add (mes+index)
  //     console.log(mes+index)     

      
  //   } 
  //   const inicio = document.getElementById('mensaje1')
  //   const mensaje1 = document.getElementsByClassName('numero') 
  //   const mensaje2 = document.getElementsByClassName('numero_por')
  //   const porcentaje1 = this.meses_v2[indice-1].porcentaje1 
  //   const porcentaje2 = this.meses_v2[indice-1].porcentaje2

  //   if(mensaje1.length && mensaje2.length>0){
  //     mensaje1[0].textContent = ""
  //     inicio!.classList.remove('ini')
  //     mensaje1[0].textContent = porcentaje1
  //     mensaje2[0].textContent = porcentaje2
  //     this.icon = ("true")
  //   }
  // }
  //fin btn pruebas info

  scrollleft () {
    const contenedor_Sc = document.getElementById('content_Sc');
    console.log(contenedor_Sc!.scrollLeft)
   contenedor_Sc!.scrollLeft -= 120
   console.log(this.meses_v1[0])
   }

   scrollrigth () {
     const contenedor_Sc = document.getElementById('content_Sc')
     contenedor_Sc!.scrollLeft += 120
   }

   ngOnInit(): void {

    const btns = document.querySelectorAll('.cambio_a');

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
