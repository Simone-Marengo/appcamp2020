import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Tab3RoutingModule } from './tab3-routing.module';
import { Tab3Component } from './tab3.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    Tab3RoutingModule
  ],
  declarations: [Tab3Component]
})
export class Tab3PageModule {}
