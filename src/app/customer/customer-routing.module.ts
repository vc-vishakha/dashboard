import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';

const routes: Routes = [
  {
    path : '',
    component: CustomerlistComponent
  },
  {
    path: '/customer:id',
    component: CustomerdetailComponent
  }
  // {
  //   path: 'customer',
  //   loadChildren: './customer/customer.module#CustomerlistModule',
  // },
  // {
  //   path: 'customer/:id',
  //   loadChildren: './customer/customer.module#CustomerdetailModule',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
