import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { InsertCategoryComponent } from './category/insert-category/insert-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ComspecComponent } from './comspec/comspec.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path: 'category', component: CategoryComponent},
  {path: 'insertCat', component: InsertCategoryComponent},
  {path: 'updateCat/:id', component: UpdateCategoryComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent },
  {path: 'comspec', component: ComspecComponent},
  {path: 'product', component: ProductComponent}
  // {patj}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
