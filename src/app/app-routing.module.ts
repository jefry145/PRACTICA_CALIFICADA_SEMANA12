import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { PagesComponent } from "./pages/pages.component";



const routes: Routes = [
    { path: "", component: PagesComponent },
    { path: "about", component: AboutComponent},

]
@NgModule({
   imports:[RouterModule.forRoot( routes ) ],
   exports: [RouterModule]
})
export class AppRoutingModule{}