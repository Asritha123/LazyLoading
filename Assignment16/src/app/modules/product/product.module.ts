import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from 'src/app/app.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProductComponent,

  ],
  imports: [
    CommonModule,
    ProductRoutingModule,FormsModule,HttpClientModule,SharedModule
  ]
})
export class ProductModule { }
