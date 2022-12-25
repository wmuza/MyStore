import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  products = this.cartService.getProducts();
  cartTotal: string | number = this.cartService.getCartTotal()

  constructor(
    private cartService: CartService
  ) { }

  removeFromCart(product: Cart){
    this.cartService.removeFromCart(product)
    this.cartTotal = this.cartService.getCartTotal()
  }
}
