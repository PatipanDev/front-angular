import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel, OneCategoryModel } from '../models/category.model';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = `${environment.apiUrl}/api/category`
  private access_token: string | null = null; // ประกาศค่าตัวแปรเริ่มต้นในที่นี้

  constructor(private http: HttpClient) {
    this.access_token = localStorage.getItem('access_token'); // ค่าใน loc
  }




  getAllCategory(): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(this.url);
  }
  getCategorybyID(id: any): Observable<OneCategoryModel> {
    let xxx = this.url + '/' + id
    console.log(xxx)
    return this.http.get<OneCategoryModel>(this.url + '/' + id);
  }
  delCategory(id: any): Observable<any> {
    let header = {};
    if (this.access_token) {
      header = {
        'Authorization': this.access_token
      }
    }
    return this.http.delete<any>(this.url + '/' + id, { headers: header });

  }
  setCategory(catData: any): Observable<any> {
    let header = {};
    if (this.access_token) {
      header = {
        'Content-type': 'application/json',
        'Authorization': this.access_token
      }
    };
    return this.http.post<any>(this.url, catData, { headers: header })
  }
  updateCategory(id: any, catData: any): Observable<any> {
    console.log(this.access_token)
    let header = {};
    if (this.access_token) {
      header = {
        'Content-type': 'application/json',
        'Authorization': this.access_token
      }
    };
    return this.http.put<any>(this.url + '/' + id, catData, { headers: header });
  }
}
