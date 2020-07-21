import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InsertRoutingModule } from './insert-routing.module';
import { InsertPageComponent } from './insert.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [InsertPageComponent],
  exports: [InsertPageComponent],
  entryComponents: [
    InsertPageComponent
  ]
})
export class InsertPageModule {}
