import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';

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

  removeFromCart(product: Product){
    this.cartService.removeFromCart(product)
    this.cartTotal = this.cartService.getCartTotal()
  }
}
