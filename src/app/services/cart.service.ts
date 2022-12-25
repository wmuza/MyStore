import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Cart[] = []

  constructor() { }

  addToCart(product: Cart) {
    this.products.push(product);
  }

  removeFromCart(product: Cart) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

  getCartTotal(){
    const prices = this.products.map(value => value.total );
    if (prices.length && prices != undefined) {
      let total = prices.reduce( (a, b) => a! + b!);
      if (total) {
        return total.toFixed(2)
      }
      return 0
    }
    return 0
  }

  getProducts() {
    return this.products;
  }
}
