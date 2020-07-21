import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { InsertPageComponent } from "../insert/insert.component";
import { InsertPageModule } from "../insert/insert.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InsertPageModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomePageModule {}
