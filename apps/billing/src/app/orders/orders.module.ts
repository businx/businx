import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { InvoiceModule } from '@businx/invoice';


@NgModule({
  declarations: [OrdersComponent, OrderListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    InvoiceModule
  ]
})
export class OrdersModule { }
