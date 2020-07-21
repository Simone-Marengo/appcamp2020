import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { HomeComponent } from "./home.component";
import { InsertPageComponent } from "../insert/insert.component";
import { InsertPageModule } from "../insert/insert.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InsertPageModule,
    RouterModule.forChild([{ path: "", component: HomeComponent }])
  ],
  declarations: [HomeComponent]
})
export class HomePageModule {}
