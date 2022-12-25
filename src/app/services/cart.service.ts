import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = []

  constructor() { }

  addToCart(product: Product) {
    this.products.push(product);
  }

  removeFromCart(product: Product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

  getCartTotal(){
    const prices = this.products.map(value => value.price );
    if (prices.length) {
      let total: number = prices.reduce( (a, b) => a + b);
      return total.toFixed(2)
    }
    return 0
  }

  getProducts() {
    return this.products;
  }
}
