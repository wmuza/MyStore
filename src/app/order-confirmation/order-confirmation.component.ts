import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {
  cus_name: string = '';
  cartTotal: string = ''

  // Pass query parameters to Router.navigate using queryParams.
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.cus_name = params['cus_name'];
        this.cartTotal = params['cartTotal'];
      }
    );
  }

}
