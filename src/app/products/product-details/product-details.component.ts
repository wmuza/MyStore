import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: number = 1
  product: Product | undefined
  products: Product[] = []
  quantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
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
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = this.products.find(product => product.id === productIdFromRoute);

    //If product not found go to 404 page
    this.product ? '' : this.router.navigate(['/page-not-found']);
  }
}
