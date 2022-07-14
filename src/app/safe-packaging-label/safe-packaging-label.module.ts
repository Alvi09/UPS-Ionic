import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafePackagingLabelPageRoutingModule } from './safe-packaging-label-routing.module';

import { SafePackagingLabelPage } from './safe-packaging-label.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SafePackagingLabelPageRoutingModule
  ],
  declarations: [SafePackagingLabelPage]
})
export class SafePackagingLabelPageModule {}
