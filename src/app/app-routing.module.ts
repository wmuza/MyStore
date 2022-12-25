import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';

const routes: Routes = [
  { title: 'Home', path: '', component: ProductListComponent },
  { title: 'Products', path: 'products', component: ProductListComponent },
  { title: 'Product Item', path: 'product/:productId', component: ProductDetailsComponent },
  { title: 'Cart', path: 'cart', component: ShoppingCartComponent },
  { title: 'Checkout', path: 'checkout', component: CheckoutFormComponent },
  { title: 'Order Confirmation', path: 'order-confirmation', component: OrderConfirmationComponent },
  { title: '404', path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
