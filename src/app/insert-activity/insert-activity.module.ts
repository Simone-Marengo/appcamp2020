import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { InsertActivityRoutingModule } from "./insert-activity-routing.module";
import { InsertActivityComponent } from "./insert-activity.component";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  imports: [IonicModule, CommonModule, InsertActivityRoutingModule],
  declarations: [InsertActivityComponent]
})
export class InsertActivityPageModule {}
