import { Component, inject } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { LandingService } from '../service/landing.service';
import { Evento } from '@/core/models/eventos/evento.models';

@Component({
  selector: 'app-eventos-optica',
  imports: [AccordionModule],
  templateUrl: './eventos-optica.component.html',
  styleUrl: './eventos-optica.component.scss'
})
export class EventosOpticaComponent {

  eventos:Evento[]=[]
  activeIndex: number[] = [];

  private readonly landingService = inject(LandingService);


  ngOnInit() {
    this.listTipoEvento()
  }
  listTipoEvento(){
    this.landingService.$listEventoLanding().subscribe({
            next: (data: any) => {
                if (this.eventos.length > 0) {
                  this.activeIndex = [0]; 
                }
              this.eventos = data
              console.log("this.eventos",data)
            },
            error: (error:any) => {
              console.error('Error fetching formularios:', error);
            }
          });

  }

  


}
