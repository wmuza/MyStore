import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product = new Product;
  quantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  productQuantity = this.quantity[0]

  constructor(
    private cartService: CartService
  ) { }

  addToCart(p: Cart) {
    // Update the quantity before adding to cart
    p.quantity = this.productQuantity

    // Update the total price based on quantity
    p.total = this.productQuantity * p.price

    // Now add the product to cart
    this.cartService.addToCart(p);
  }
}
