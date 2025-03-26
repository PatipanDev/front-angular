import { Component } from '@angular/core';
import {CategoryService} from '../shared/services/category.service';
import {CategoryModel, Categories } from '../shared/models/category.model';
import { Router } from '@angular/router';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

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
    private router: Router,
    private modalService: NgbModal,
    modalConfig: NgbModalConfig
  ) {
    modalConfig.backdrop = 'static';
		modalConfig.keyboard = false;
  }

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
    this.router.navigate(['updateCat',id]);
  }

  openConfirmModel(content: any): void {
    this.modalService.open(content);
  }
}
