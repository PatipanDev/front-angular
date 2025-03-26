import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { InsertCategoryComponent } from './category/insert-category/insert-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';


const routes: Routes = [
  {path: 'category', component: CategoryComponent},
  {path: 'insertCat', component: InsertCategoryComponent},
  {path: 'updateCat', component: UpdateCategoryComponent},
  // {patj}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
