import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//This routes are loaded when the app started
//Also in the app.module.ts these are also loaded
//CoreModule, ShopModule and HomeModule, but
//we don't need to load all the module at once
//only load the page that requested.

const routes: Routes = [
  //create an object for home route with empty string
  {path: '', component: HomeComponent},
  //this one for the shop
  //This a lazy loading on only the shop page
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule)},
  //** for anything else like empty path root
  {path: '**', redirectTo: '', pathMatch: 'full'}

  //in appcomponent.html, now we can use <router-outlet></router-outlet> to 
  //automatically take of the routing
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
