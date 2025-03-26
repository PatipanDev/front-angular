import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel, OneCategoryModel } from '../models/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  url = 'http://10.7.10.16:7890/api/category'

  getAllCategory(): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(this.url);
  }
  getCategorybyID(id: any): Observable<OneCategoryModel> {
    return this.http.get<OneCategoryModel>(this.url + '/' + id);
  }
  delCategory(id: any): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id);
  }
}
