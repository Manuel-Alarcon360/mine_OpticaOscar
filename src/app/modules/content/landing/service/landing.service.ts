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

   getProductsData() {
        return[
            { image: 'assets/img/clientes/camilo_sanchez.jpg', name: 'Camilo Sánchez' },
            { image: 'assets/img/clientes/felipe_romero.jpg', name: 'Felipe Romero' }
        ];
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }
    getImages() {
        return Promise.resolve(this.getData());
    }

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
            }
        ]
        }
}
