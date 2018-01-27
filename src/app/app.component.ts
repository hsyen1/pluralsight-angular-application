/*
Component = Template + Class + Metadata

Template: View layout, HTML, binding and directives
Class; Code supporting the view, typescript, properties and methods (for an e.g, AppComponent)
Metadata: Extra data for Angular, defined with decorator (a function that adds metadata to a class, its members or its method arguments)
* */
import { Component } from '@angular/core';
import {ProductService} from './products/product.service';

//  @Component decorator that defines the metadata
// a component must always have a template
// double curly braces indicates curly braces
@Component({
  // metadata includes template
  selector: 'pm-root',
  // {{pageTitle}} is an example of interpolation
  template: `
    <!--navbar default: the default style for the navigation bar on boostrap-->
    <!--container-fluid: full width container, spanning the entire width of the viewport
      -- navbar-brand: used to highlight the brand or logo of the page
      -- navbar-nav: a list/link inside a navbar-->
    <div>
      <nav class='navbar navbar-default'>
        <div class='container-fluid'>
          <a class='navbar-brand'>{{ pageTitle }}</a>
          <ul class='nav navbar-nav'>
            <!--binding
              -- the path specified is then bind to the URL-->
            <li><a [routerLink]="['/welcome']">Home</a></li>
            <li><a [routerLink]="['/products']">Product List</a></li>
          </ul>
        </div>
      </nav>
      <div class='container'>
        <!--the specified path of the component is then injected to this directive (renders the component's page)-->
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  providers: [ProductService]
})
// Class
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
