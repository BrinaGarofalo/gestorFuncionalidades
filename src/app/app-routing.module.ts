import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";




const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  //{ path: "home", component: HomePageComponent },
  //{ path: "forms", component: FormsComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
