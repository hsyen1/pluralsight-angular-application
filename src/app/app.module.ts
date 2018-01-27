import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from '@angular/router';
import { ProductGuardService } from './products/product-guard.service';

//  class that defines this module
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // route configuration
    // order matters
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      // canActivate service is added to guard the routing
      { path: 'products/:id',
        canActivate: [ ProductGuardService ],
        component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
