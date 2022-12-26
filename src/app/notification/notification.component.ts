import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  product_added: boolean = false
  product_removed: boolean = false
  product: Cart = new Cart

  constructor(
    private cartService: CartService
  ) {
    this.cartService.cartAddItem().subscribe(i =>{
      if (i.length) {
        this.product = i[i.length - 1]
        this.product_added = true
        this.clearNotification()
      }
    })

    this.cartService.cartRemoveItem().subscribe(i =>{
      if (i.length) {
        this.product = i[i.length - 1]
        this.product_removed = true
        this.clearNotification()
      }
    })
  }

  clearNotification(){
    setTimeout (() => {
      this.product_added = false
      this.product_removed = false
    }, 3000);
  }

}
