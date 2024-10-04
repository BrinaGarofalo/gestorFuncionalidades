import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Product } from "../interfaces/product.interface";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  products: Product[] = [];
  
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const headers = new HttpHeaders().set("authorId", "300");
    console.log(headers);
    return this.http.get<Product[]>(
      "http://localhost:3002/bp/products",
      { headers: headers }
    );
  }
  
}
