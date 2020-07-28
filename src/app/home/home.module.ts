import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HomeComponent } from "./home.component";
import { InsertPageComponent } from "../insert/insert.component";
import { HomeRoutingModule } from "./home-routing.module";
import { InsertPageModule } from "../insert/insert.module";
import { CardListComponent } from "./card-list/card-list.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    InsertPageModule
  ],
  declarations: [HomeComponent, CardListComponent]
})
export class HomePageModule {}
