import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

//Create root for our shop components 
//for lazy loading
const routes: Routes = [
  //Root component for shop module
  {path: '', component: ShopComponent},
  //for product details
  {path: ':id', component: ProductDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], 
  exports: [RouterModule]
})
export class ShopRoutingModule { }
