import { Component } from '@angular/core';
import {Categories} from '../../shared/models/category.model'
import { CategoryService } from '../../shared/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-category',
  standalone: false,
  templateUrl: './insert-category.component.html',
  styleUrl: './insert-category.component.css'
})
export class InsertCategoryComponent {

  constructor(
    private catServ: CategoryService,
    private router: Router
  ){}
  insertCategory(catData: Categories): void {
    this.catServ.setCategory(catData).subscribe(  // ใช้ catServ แทน catData
      (res) => {
        if (res.status == 'ok') {
            this.router.navigate(['category'])
        } else {
          alert('Connection insert failed.');
        }
      },
      (error) => {
        alert('Error occurred during insertion.');
        console.error(error);  // ตรวจสอบข้อผิดพลาดใน console
      }
    );
  }

}
