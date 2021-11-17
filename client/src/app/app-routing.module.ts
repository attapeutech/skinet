import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
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
  {path: '', component: HomeComponent, data: {breadcrumb: 'Home'}},
  {path: 'test-error', component: TestErrorComponent, data: {breadcrumb: 'Test Errors'}},
  {path: 'server-error', component: ServerErrorComponent, data: {breadcrumb: 'Server Errors'}},
  {path: 'not-found', component: NotFoundComponent, data: {breadcrumb: 'Not Found'}},
  //this one for the shop
  //This a lazy loading on only the shop page
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule),
   data: {breadcrumb: 'Shop'}},
  //** for anything else like empty path root
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'}

  //in appcomponent.html, now we can use <router-outlet></router-outlet> to 
  //automatically take of the routing
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
