import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Router } from '@angular/router';
import { Products } from '../../shared/models/product.model';
import { Categories } from '../../shared/models/category.model';
import { CategoryService } from '../../shared/services/category.service';

@Component({
  selector: 'app-insrt-product',
  standalone: false,
  templateUrl: './insrt-product.component.html',
  styleUrl: './insrt-product.component.css'
})
export class InsrtProductComponent {

  categories!: Categories[];
  cat_name: string = 'เลือก';
  cat_id!: number;

  constructor(
    private catServe: CategoryService,
    private proServe: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.catServe.getAllCategory().subscribe(
      (res) => {
        this.categories = res.data;
      }
    );
  }
  insertProducts(prod: Products): void {
    // prod.category_id = this.cat_id
    
    
    prod.category_id = this.cat_id
    this.proServe.setProduct(prod).subscribe(  // ใช้ catServ แทน catData
      (res) => {
        if (res.status == 'ok') {
          console.log(prod)
          
          this.router.navigate(['product'])
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

  selectedCat(cat: Categories): void {
    console.log(cat.category_id)
    this.cat_name = cat.category_name;
    this.cat_id = cat.category_id;
  }

}
