import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  filteredProducts: IProduct[];

  // Uses product interface for strong typing
  products: IProduct[];
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  // listFilter is the text/string that user wants to filter
  _listFilter: string;

  // dependency injection
  // this class now can use ProductService
  constructor(private _productService: ProductService) {
  }

  get listFilter(): string {
    return this._listFilter;
  }

  // every time the user modifies the value, the data binding calls the setter
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  // a function that performs filter
  // uses arrow function (callback)
  // when the includes method return true it returns the value and assign it to the product
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // when this component receives the event, the function below is executed
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  // life cycle hook
  ngOnInit(): void {
    this._productService.getProducts()
      // observable emits that map data to any subscribers  (in this case, this.products)
      // subscriber receives the emitted data and assigns this.product to the emitted array of product
      // so the initial filteredProducts now have the full list of products
      .subscribe(products => { // num 2
          this.products = products; // num 3
          this.filteredProducts = this.products;
        },
        error => this.errorMessage = <any>error);
  }

}

/*
*
* - when this method is called, the service receives the http response from the request (ngOnInit method)
  - the response data is mapped into an array of products (IProduct[])
  // num 1
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
      // converts the JSON data to string and logs it onto the console
      .do(data => console.log('All' + JSON.stringify(data)))
      .catch(this.handleError);
  }
*/

