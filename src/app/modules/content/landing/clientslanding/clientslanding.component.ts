import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {ImageModule} from 'primeng/image';
import { LandingService, Product } from '../service/landing.service';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-clientslanding',
  imports: [CommonModule, CarouselModule, ButtonModule, ImageModule,TagModule],
  templateUrl: './clientslanding.component.html',
  styleUrl: './clientslanding.component.scss'
})
export class ClientslandingComponent {
   products!: Product[];

    images!: any[];

    galleriaResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    carouselResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    constructor(
        private productService: LandingService,
        private photoService: LandingService
    ) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return 'success';
        }
    }
}
