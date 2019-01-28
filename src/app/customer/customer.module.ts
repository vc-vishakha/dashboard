import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [CustomerlistComponent,CustomerdetailComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatButtonModule
  ]
})
export class CustomerModule { }
