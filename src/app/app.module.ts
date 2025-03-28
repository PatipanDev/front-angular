import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InsertCategoryComponent } from './category/insert-category/insert-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { InsrtProductComponent } from './product/insrt-product/insrt-product.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CategoryComponent,
    InsertCategoryComponent,
    UpdateCategoryComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    UpdateProductComponent,
    InsrtProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
