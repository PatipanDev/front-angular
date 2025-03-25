import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:5000/api/category/'

  getAllCategory(): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(this.url);
  }
  delCategory(id: any): Observable<CategoryModel> {
    return this.http.delete<any>(this.url +'/' + id);
  }
}
