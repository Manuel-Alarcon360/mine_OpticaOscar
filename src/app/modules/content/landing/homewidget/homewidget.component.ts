import { LayoutService } from '@/modules/layaut/service/layout.service';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Subscription } from 'rxjs';
import { IntegracionesService } from '../../integracion/service/integraciones.service';
import { MessageService } from 'primeng/api';
import { Toast } from "primeng/toast";

@Component({
  selector: 'app-homewidget',
  imports: [ButtonModule, RippleModule, ButtonModule, Toast],
  templateUrl: './homewidget.component.html',
  providers: [MessageService],
  styleUrl: './homewidget.component.scss'
})
export class HomewidgetComponent {
    subscription: Subscription;
    darkMode: boolean = false;
    visiblePincipal: boolean = false;
    private readonly integracionService = inject(IntegracionesService)
    private  messageService = inject(MessageService);

    constructor(
        public router: Router,
        private layoutService: LayoutService,
    ) {
        this.subscription = this.layoutService.configUpdate$.subscribe(
            (config) => {
                this.darkMode =
                    config.colorScheme === 'dark' ||
                    config.colorScheme === 'dim'
                        ? true
                        : false;
            },
        );
    }
    agendarCita(){
        this.integracionService.getUrlClient().subscribe({
            next: (response:any) => {
                if (response?.data?.length > 0 && response.data[0]?.url_cliente) {
                    const res = response.data[0].url_cliente;
                    window.open(res, '_blank', 'noopener,noreferrer');
                } else {
                    this.messageService.add({ severity: 'info', summary: 'Error',life:4000 })
                }
            },error: (error) => 
                this.messageService.add({ severity: 'info', summary: 'Error',life:4000 })
            }) 
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
