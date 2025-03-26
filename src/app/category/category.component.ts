import { Component } from '@angular/core';
import {CategoryService} from '../shared/services/category.service';
import {CategoryModel, Categories} from '../shared/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  categories!: Categories[];
  

  constructor(
    private catServ: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.catServ.getAllCategory().subscribe(
      (res) => {
        if (res.status == 'ok'){
          this.categories = res.data;
          console.log(this.categories);
        }else{
          alert('Fail!')
        }
      }
    );
  }
  gotoInsertPage(): void {
    this.router.navigate(['insertCat']);
  }
  gotoUpdatePage(id: any): void {
    console.log(id);
    this.router.navigate(['updateCat']);
  }
}
