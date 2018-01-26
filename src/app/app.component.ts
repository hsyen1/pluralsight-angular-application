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
    <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
  `,
  providers: [ProductService]
})
// Class
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
