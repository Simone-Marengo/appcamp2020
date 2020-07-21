import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HomeComponent } from "./home.component";
import { InsertPageComponent } from "../insert/insert.component";
import { InsertPageModule } from "../insert/insert.module";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    InsertPageModule
  ],
  declarations: [HomeComponent]
})
export class HomePageModule {}
