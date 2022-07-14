import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-safe-packaging-label',
  templateUrl: './safe-packaging-label.page.html',
  styleUrls: ['./safe-packaging-label.page.scss'],
})
export class SafePackagingLabelPage implements OnInit {

  constructor(private modalController: ModalController) { }
  
  ngOnInit() {
  }
  back_button() {
    this.modalController.dismiss();
  }
}
