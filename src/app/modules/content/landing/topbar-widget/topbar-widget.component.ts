import { Component, computed, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { LandingService } from '../service/landing.service';

@Component({
  selector: 'app-topbar-widget',
  imports: [CommonModule, RouterModule, StyleClassModule, ButtonModule, RippleModule],
  templateUrl: './topbar-widget.component.html',
  styleUrl: './topbar-widget.component.scss'
})
export class TopbarWidgetComponent {

    activeSection: string = 'principal'
    activeSeccion = computed(() => this.landingService.activeSeccion());
    public landingService: LandingService = inject(LandingService);
    constructor(public router: Router) {}

    navigate(id: any) {
         this.smoothScroll(id);
    }
    setSection(seccion: string) {
        this.landingService.setActiveSeccion(seccion);
    }

    smoothScroll(id: any) {
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    }
}
