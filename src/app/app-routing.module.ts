import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { InsertCategoryComponent } from './category/insert-category/insert-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'category', component: CategoryComponent},
  {path: 'insertCat', component: InsertCategoryComponent},
  {path: 'updateCat/:id', component: UpdateCategoryComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent }
  // {patj}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
