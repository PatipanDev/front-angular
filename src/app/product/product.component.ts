import { Component } from '@angular/core';
import {CategoryService} from '../shared/services/category.service';
import {Products, ProductsModel } from '../shared/models/product.model';
import { Router } from '@angular/router';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  products!: Products[];
  del_catName ='';
  

  constructor(
    private catServ: ProductService,
    private router: Router,
    private modalService: NgbModal,
    modalConfig: NgbModalConfig
  ) {
    modalConfig.backdrop = 'static';
		modalConfig.keyboard = false;
  }

  ngOnInit(): void {
    this.catServ.getAllProduct().subscribe(
      (res) => {
        if (res.status == 'ok'){
          this.products = res.data;
          console.log(this.products);
        }else{
          alert('Fail!')
        }
      }
    );
  }
  gotoInsertPage(): void {
    this.router.navigate(['insertPro']);
  }
  gotoUpdatePage(id: any): void {
    console.log(id);
    this.router.navigate(['updatePro',id]);
  }

  openConfirmModel(content: any, cat: Products): void {
    this.del_catName = cat.product_name;
    this.modalService.open(content).result.then(
      (resModal)=>{
        if(resModal){
          this.catServ.delProduct(cat.product_id).subscribe(
            (res)=>{
              if(res.status =='ok')
                alert('ลบข้อมูลสำเร็จ')
               console.log(res)
              alert('ลบข้อมูลสำเร็จ')
              this.products = this.products.filter(c => c.product_id !== cat.product_id);
            }
          )
          console.log(cat.product_id)
          console.log(resModal)
        }else{

        }
     
      }
    );
  }
}
