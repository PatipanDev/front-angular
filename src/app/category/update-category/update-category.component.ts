import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../shared/services/category.service';
import { Categories } from '../../shared/models/category.model';


@Component({
  selector: 'app-update-category',
  standalone: false,
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent implements OnInit{
  constructor(
    private actiRoute: ActivatedRoute,
    private catServ: CategoryService
  ){}

  category_id: any;
  cat_Data!: Categories;
  

  ngOnInit(): void {
    this.actiRoute.params.subscribe(
      (res) =>{
        this.category_id = res['id'];
        console.log(this.category_id)
        this.catServ.getCategorybyID(this.category_id).subscribe(
          (res1) => {
            console.log
            this.cat_Data = res1.data;
            console.log(this.cat_Data)
          }
        )
      }
    )
  }
  updateCategory(newcatData: Categories): void{
    console.log(newcatData)
    
  }
}
