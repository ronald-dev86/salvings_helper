import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyoutPage } from './buyout.page';

const routes: Routes = [
  {
    path: '',
    component: BuyoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyoutPageRoutingModule {}
