import { Component, inject } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CitasService } from '../service/citas.service';
import esLocale from '@fullcalendar/core/locales/es';
import listPlugin from '@fullcalendar/list';
import { ButtonModule } from 'primeng/button';
import { pairs } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citas-listado',
  imports: [
    FullCalendarModule,
    ButtonModule,
  ],
  templateUrl: './citas-listado.component.html',
  styleUrl: './citas-listado.component.scss'
})
export class CitasListadoComponent {

  private citasService : CitasService = inject(CitasService)
  private router = inject(Router);


  citas : number = 0
  clientes : number = 0
  colaboradores : number = 0
  calendarOptions: any = {
    initialView: 'listWeek',
    plugins: [listPlugin],
    firstDay: 1,
    navLinks: false,
    headerToolbar : {
      start:'title',
      center:'',
      end:''
    },
    locale: esLocale,
    height: 'auto',
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: 'lowercase',
      hour12: true
    },
    slotLabelFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: 'lowercase',
      hour12: true
    },
    weekends: false,

  eventMouseEnter: (info: any) => {
    info.el.style.cursor = 'pointer';
  },

  eventClick: (info: any) => this.seleccionarCita(info.event._def.extendedProps)
  }

  ngOnInit(): void {
    this.getInformationDashboard()
  }



  getInformationDashboard(){
    this.citasService.getInformationDashboard().subscribe(res=>{
      this.calendarOptions.events = res.results
    })
  }
  seleccionarCita(data:any){
    const cliente ={
      apellidos:data.lastname_client,
      compania:data.compania,
      complete_name:data.name_client_complete,
      correo:data.name_client_complete,
      created_at:data.created_at,
      direccion:data.direccion_client,
      id:data.cliente,
      nombre:data.name_client,
      numero_identificacion:data.observacion,
      telefono:data.telefono_client,
      update_at:data.updated_at
    }
    this.router.navigate(['/historia/historia-clinica'], { state: { cliente } });
  }

}
