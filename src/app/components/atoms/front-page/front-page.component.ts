import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Product } from "src/app/interfaces/product.interface";

@Component({
  selector: "app-front-page",
  templateUrl: "./front-page.component.html",
  styleUrls: ["./front-page.component.scss"],
})
export class FrontPageComponent implements OnInit, OnChanges {
  @Input() productData: Product[] = [];

  name: string = "";
  optionNumbers: number[] = [];
  dateCurrent: string[] = [];
  productsFilter?: Product[] = [];
  cantdSelect: number = 5;

  variant = "primary";
  label = "Button Labe";
  size = "xlarge";
  loading = false;
  disabled = false;
  iconName = "calendar_today";
  dropdownIcon = true;

  constructor() {}

  ngOnInit(): void {
    this.searchProductName();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["productData"]) {
      this.searchProductName();
    }
  }

  searchProductName() {
    if (!this.name) {
      this.productsFilter = this.productData.slice(0, this.cantdSelect);
      console.log(this.productsFilter);
    } else {
      this.productsFilter = this.productData.filter((product) =>
        product.name.toLowerCase().includes(this.name.toLowerCase())
      );
    }
  }
}
