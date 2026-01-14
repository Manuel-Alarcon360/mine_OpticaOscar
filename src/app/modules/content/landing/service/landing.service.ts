import { ColorScheme } from '@/modules/layaut/service/layout.service';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LandingEndpoint } from './landing.endpoint';
import { HttpClient } from '@angular/common/http';
import { PaginatorData } from '@/core/models/general/general.models';
import { Observable } from 'rxjs';


export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  private readonly API = environment.apiUrl;
  private readonly URI = LandingEndpoint
  private readonly http = inject(HttpClient);

  activeSeccion = signal<string>('principal');

  constructor() { }
   
  setActiveSeccion(seccion: string) {
    this.activeSeccion.set(seccion);
  }

   $listEventoLanding():Observable<PaginatorData<any>>{
    console.log("INGRESI AL SERVICIO")
      return this.http.get<any>(this.API + this.URI.listEvento);
    }















  // ***************
    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }
        getImages() {
        return Promise.resolve(this.getData());
    }

   getProductsData() {
        return [
              {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Camilo sanchez',
                description: 'Product Description',
                image: 'optometria.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1000-0',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 65,
                        quantity: 1,
                        customer: 'David James',
                        status: 'PENDING'
                    },
                    {
                        id: '1000-1',
                        productCode: 'f230fh0g3',
                        date: '2020-05-14',
                        amount: 130,
                        quantity: 2,
                        customer: 'Leon Rodrigues',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1000-2',
                        productCode: 'f230fh0g3',
                        date: '2019-01-04',
                        amount: 65,
                        quantity: 1,
                        customer: 'Juan Alejandro',
                        status: 'RETURNED'
                    },
                    {
                        id: '1000-3',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 195,
                        quantity: 3,
                        customer: 'Claire Morrow',
                        status: 'CANCELLED'
                    }
                ]
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Camilo pardo',
                description: 'Product Description',
                image: 'optometria.jpg',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1001-0',
                        productCode: 'nvklal433',
                        date: '2020-05-14',
                        amount: 72,
                        quantity: 1,
                        customer: 'Maisha Jefferson',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1001-1',
                        productCode: 'nvklal433',
                        date: '2020-02-28',
                        amount: 144,
                        quantity: 2,
                        customer: 'Octavia Murillo',
                        status: 'PENDING'
                    }
                ]
            },{
                id: '1000',
                code: 'f230fh0g3',
                name: 'Camilo Sanchez',
                description: 'Product Description',
                image: 'OIP.webp',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1000-0',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 65,
                        quantity: 1,
                        customer: 'David James',
                        status: 'PENDING'
                    },
                    {
                        id: '1000-1',
                        productCode: 'f230fh0g3',
                        date: '2020-05-14',
                        amount: 130,
                        quantity: 2,
                        customer: 'Leon Rodrigues',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1000-2',
                        productCode: 'f230fh0g3',
                        date: '2019-01-04',
                        amount: 65,
                        quantity: 1,
                        customer: 'Juan Alejandro',
                        status: 'RETURNED'
                    },
                    {
                        id: '1000-3',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 195,
                        quantity: 3,
                        customer: 'Claire Morrow',
                        status: 'CANCELLED'
                    }
                ]
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Dua lipa',
                description: 'Product Description',
                image: 'optometria.jpg',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1001-0',
                        productCode: 'nvklal433',
                        date: '2020-05-14',
                        amount: 72,
                        quantity: 1,
                        customer: 'Maisha Jefferson',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1001-1',
                        productCode: 'nvklal433',
                        date: '2020-02-28',
                        amount: 144,
                        quantity: 2,
                        customer: 'Octavia Murillo',
                        status: 'PENDING'
                    }
                ]
            },
          ]}

      getData() {
        return [
            {
                itemImageSrc: 'assets/img/optometria.jpg',
                thumbnailImageSrc: 'assets/img/optometria.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'assets/img/optometria.jpg',
                thumbnailImageSrc: 'assets/img/optometria.jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'assets/img/optometria.jpg',
                thumbnailImageSrc: 'assets/img/optometria.jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: 'assets/img/optometria.jpg',
                thumbnailImageSrc: 'assets/img/optometria.jpg',
                alt: 'Description for Image 4',
                title: 'Title 4'
            },
            {
                itemImageSrc: 'assets/img/optometria.jpg',
                thumbnailImageSrc: 'assets/img/optometria.jpg',
                alt: 'Description for Image 5',
                title: 'Title 5'
            },
            {
                itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6s.jpg',
                alt: 'Description for Image 6',
                title: 'Title 6'
            },]}
}
