import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // gets the id from the url path and converts it to number
    let id = +route.url[1].path;
    if(isNaN(id) || id < 1) {
      alert('Invalid product ID');
      // redirects back to the products page
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
