import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: number = 1
  product: Product = new Product;
  products: Product[] = []
  quantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  productQuantity = this.quantity[0]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data
      this.displayProduct()
    })
  }

  displayProduct(){
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId')) as number;

    // Find the product that correspond with the id provided in route.
    let p = this.products.find(product => product.id === productIdFromRoute)
    if(p){
      this.product = p
    } else {
      //If product not found go to 404 page
      this.router.navigate(['/page-not-found']);
    }
  }

  addToCart(p: Product) {
    // Update the quantity before adding to cart
    p.quantity = this.productQuantity

    // Update the total price based on quantity
    p.total = this.productQuantity * p.price

    // Now add the product to cart
    this.cartService.addToCart(p);
    window.alert(`Your ${this.productQuantity} product(s) ${p.name} has been added to the cart!`);
  }
}
