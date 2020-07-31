import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

interface myData {
  id: Variable,
  name: string,
  surname: string,
  birthdate: string,
  gender: string,
  email: string,
  status: string,
  createdBy: string,
  createdDate: string,
  lastModifiedBy: string,
  lastModifiedDate: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUserData() {
    return this.http.get<myData>('https://gateway.mrbee.az/api/customers/info');
  }
  getProductData() {
    return this.http.get('https://gateway.mrbee.az/frontservices/api/public/AZ/products/featured');
  }
}
