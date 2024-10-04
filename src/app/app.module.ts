import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ImagePageComponent } from "./components/atoms/image-page/image-page.component";
import { FrontPageComponent } from "./components/atoms/front-page/front-page.component";








@NgModule({
  declarations: [
    AppComponent,
    ImagePageComponent,
    FrontPageComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   

   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
