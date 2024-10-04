import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Data, Product } from "../interfaces/product.interface";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  
  
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Data> {
    const headers = new HttpHeaders().set("authorId", "300");
    console.log(headers);
    return this.http.get<Data>(
      "http://localhost:3002/bp/products",
      { headers: headers }
    );
  }
  
}
