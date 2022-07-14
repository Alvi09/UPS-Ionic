import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafePackagingLabelPage } from './safe-packaging-label.page';

const routes: Routes = [
  {
    path: '',
    component: SafePackagingLabelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafePackagingLabelPageRoutingModule {}
