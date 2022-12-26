import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Cart[] = []
  cart_items = new BehaviorSubject<Cart[]>([]);
  cart_add = new BehaviorSubject<Cart[]>([]);
  cart_remove = new BehaviorSubject<Cart[]>([]);

  addToCart(product: Cart) {
    this.products.push(product);
    this.cart_items.next(this.products);
    this.cart_add.next([product]);
  }

  removeFromCart(product: Cart) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
    this.cart_items.next(this.products);
    this.cart_remove.next([product]);
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

  clearCart() {
    this.products = [];
    this.cart_items.next(this.products);
    return this.products;
  }

  cartItems() {
    return this.cart_items.asObservable();
  }

  cartAddItem() {
    return this.cart_add.asObservable();
  }

  cartRemoveItem() {
    return this.cart_remove.asObservable();
  }
}
