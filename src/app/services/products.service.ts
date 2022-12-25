import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  product: Product = new Product

  constructor( private http: HttpClient) { }

  getProducts(): Observable <[]>{
    return this.http.get<[]>('assets/data.json')
  }
}
