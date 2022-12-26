import { Component, Input } from '@angular/core';
import { Order } from '../models/order';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {
  @Input() cartTotal: string | number = 1;
  cus_name: string = ''
  cus_address: string = ''
  cus_card_number: string = ''

  constructor(
    private router: Router,
    private cartService: CartService
  ) { }

  submitForm(): void{
    const order: Order = {
      cus_name: this.cus_name,
      cus_address: this.cus_address,
      cus_card_number: this.cus_card_number,
      cart_total: this.cartTotal
    }

    // Go to Order confirmation page
    this.router.navigate(['/order-confirmation'], { queryParams: { cus_name: order.cus_name, cartTotal: this.cartTotal} });

    // Reset Form
    this.cus_name = ''
    this.cus_address = ''
    this.cus_card_number = ''

    //Reset Cart
    this.clearCart()
  }

  clearCart(){
    this.cartService.clearCart()
  }
}
