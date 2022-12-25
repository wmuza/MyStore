import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  addToCart(product: Product) {
    // Update the quantity before adding to cart
    product.quantity = this.productQuantity

    // Update the total price based on quantity
    product.price = this.productQuantity * product.price

    // Now add the product to cart
    this.cartService.addToCart(product);
    window.alert(`Your ${this.productQuantity} product(s) ${product.name} has been added to the cart!`);
  }
}
