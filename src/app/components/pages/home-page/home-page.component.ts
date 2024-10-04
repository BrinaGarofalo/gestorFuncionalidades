import { Component, Input, OnInit } from "@angular/core";
import { Data, Product } from "src/app/interfaces/product.interface";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  dataList: Product[]= [];

  constructor(private ProductService: ProductsService) {}

  ngOnInit(): void {
    this.serviceProduct()
  }
  serviceProduct(): void{
    this.ProductService.getProducts().subscribe((result:Data) => {
      this.dataList = result.data;
      console.log(this.dataList);
    });
  }
}
