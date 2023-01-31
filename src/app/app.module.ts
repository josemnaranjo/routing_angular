import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes , RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductComponent } from './products/product/product.component';

const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'products/:id',component:ProductComponent},
    {path:'users',component:UsersComponent},
    {path:'**',component:ErrorPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    CategoryComponent,
    ErrorPageComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
