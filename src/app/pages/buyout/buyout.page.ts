import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { BuyoutService } from 'src/app/services/buyout/buyout.service';

@Component({
  selector: 'app-buyout',
  templateUrl: './buyout.page.html',
  styleUrls: ['./buyout.page.scss'],
})
export class BuyoutPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  itemForm: FormGroup;

  constructor(
      public buyoutService: BuyoutService,
      private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.createForm();
    this.getBuyOut();
  }

  createForm() {
    this.itemForm = this.formBuilder.group({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      _id_category: new FormControl('', Validators.required),
      description: new FormControl(''),
      amount: new FormControl('', Validators.required),
      badge: new FormControl('', Validators.required),
      month: new FormControl(new Date().toISOString(), Validators.required)
    });
  }

  async getBuyOut(){
    try {
      const buyout = await this.buyoutService.find();
      console.log(buyout);
    } catch (error) {
      console.log(error);
    }
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
    const data = this.itemForm.value;
    data.month = data.month.slice(0, 7);
    this.buyoutService.create(data);
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.getBuyOut();
    }
  }
}
