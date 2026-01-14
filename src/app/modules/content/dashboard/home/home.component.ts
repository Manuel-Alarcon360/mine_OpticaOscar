import { Component} from '@angular/core';
import { CitasListadoComponent } from '@/modules/content/citas/citas-listado/citas-listado.component';

@Component({
  selector: 'app-home',
  imports: [
    CitasListadoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  openNewWindow() {
    window.open('https://docalendar.com.co/auth/login', '_blank', 'noopener,noreferrer');
  }

}
