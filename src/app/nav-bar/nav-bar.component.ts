import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  total: number = 0

  constructor(
    private cartService: CartService
  ) {
    this.cartService.cartItems().subscribe(i =>{
      this.total = i.length
    })
  }

}
