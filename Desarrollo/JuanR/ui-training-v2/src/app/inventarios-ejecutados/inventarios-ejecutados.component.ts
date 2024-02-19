import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventarios-ejecutados',
  standalone: true,
  imports: [],
  templateUrl: './inventarios-ejecutados.component.html',
  styleUrl: './inventarios-ejecutados.component.css'
})
export class InventariosEjecutadosComponent implements OnInit {

  icon:string= "icono"

  loadData(mes:string){
      const barra = document.getElementById('cambio_porcentajes')
      barra?.classList.forEach((value)=>{

        if(value!=='barra' && value!==mes){
          barra?.classList.remove(value)
        }
      
      })
      barra?.classList.add (mes)
  }
  scrollleft () {
    const contenedor_Sc = document.getElementById('content_Sc');
    console.log(contenedor_Sc!.scrollLeft)
   contenedor_Sc!.scrollLeft -= 120
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

        btn_c.style.backgroundColor = "#712CEE1A"
        btn_c.style.color = "#712CEE"
        btn_c.style.transition = ".4s ease"
        btn_c.style.fontSize = "15px"
        btn_c.style.fontWeight = "700"
      })
    })

   }

}
