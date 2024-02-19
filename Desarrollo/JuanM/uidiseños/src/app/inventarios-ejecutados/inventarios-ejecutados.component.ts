import { Component } from '@angular/core';

@Component({
  selector: 'app-inventarios-ejecutados',
  templateUrl: './inventarios-ejecutados.component.html',
  styleUrls: ['./inventarios-ejecutados.component.scss']
})
export class InventariosEjecutadosComponent {

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
    const scroll_Invent = document.getElementById('content_Invent');
    console.log(scroll_Invent!.scrollLeft)
    scroll_Invent!.scrollLeft -= 120
   }

   scrollrigth () {
     const scroll_Invent = document.getElementById('content_Invent')
     scroll_Invent!.scrollLeft += 120
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
