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

  constructor(private catServ: CategoryService) {}

  ngOnInit(): void {
    this.catServ.getAllCategory().subscribe(
      (res) => {
        if (res.status == 'ok')
          this.categories = res.data;
        else
          alert('Fail!')
      }
    );
  }
  goInsertPage(): void{
    this.router.navigate(['insertCat']);
  }
  gotoUpdatePage(): void{
    this.router
  }
}
