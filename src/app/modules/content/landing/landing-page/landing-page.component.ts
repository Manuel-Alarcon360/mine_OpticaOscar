import { Component, computed, inject } from '@angular/core';
import { TopbarWidgetComponent } from '@/modules/content/landing/topbar-widget/topbar-widget.component';
import { HomewidgetComponent } from '../homewidget/homewidget.component';
import { AppsWidgetComponent } from '../apps-widget/apps-widget.component';
import { ProductoswidgetComponent } from "../productoswidget/productoswidget.component";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LayoutService } from '@/modules/layaut/service/layout.service';
import { PricingComponent } from '../pricing/pricing.component';
import { FooterComponent } from "../footer/footer.component";
import { LandingService } from '../service/landing.service';
import { ClientslandingComponent } from '../clientslanding/clientslanding.component';
import { PruebaLentesComponent } from '../../historia-clinica/prueba-lentes/prueba-lentes.component';
import { EventosOpticaComponent } from '../eventos-optica/eventos-optica.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    TopbarWidgetComponent,
    HomewidgetComponent,
    AppsWidgetComponent,
    PruebaLentesComponent,
    EventosOpticaComponent,
    FooterComponent,
    ClientslandingComponent
    
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
      subscription: Subscription;

    darkMode: boolean = false;

    public landingService: LandingService = inject(LandingService);

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
    activeSeccion = computed(() => this.landingService.activeSeccion());
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
