import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
//import { PaymentModalPage } from '../payment-modal/payment-modal.page';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.page.html',
  styleUrls: ['./bills.page.scss'],
})
export class BillsPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, private router: Router, public modalController: ModalController,
    private platform: Platform) { }

  ngOnInit() {
    console.log('Inside Ng On INit')
    this.refsub = this.activatedRoute.params.subscribe(params => {
      this.refresh = params['refresh'];
      console.log(this.refresh)
      if (this.refresh == 'true') {
        console.log('Refresh is True')
        this.call_api()
      }
    });
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });
  }
  call_api() {
    var refresh = true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('paid-bills' + refresh);
    });

  }
  refsub
  refresh
  id
  sub
  bill_data = [
    {
      bill_id: 'TD24153',
      bill_amount: '150 Riyals',
      bill_type: 'Parts',
      bill_status: 'unpaid',
      bill_date: 'Sunday,23-03-2020',
      bill_receipt_status: 'Waiting',
      bill_detail: 'Now make KE e-bill payments on KE website via your Bank Account, Debit or Credit Card',
    },

    {
      bill_id: 'TD24151',
      bill_amount: '250 Riyals',
      bill_type: 'Parts',
      bill_status: 'unpaid',
      bill_date: 'Sunday,23-03-2020',
      bill_receipt_status: 'Waiting',
      bill_detail: 'Now make KE e-bill payments on KE website via your Bank Account, Debit or Credit Card',
    },
    {
      bill_id: 'TD24153',
      bill_amount: '350 Riyals',
      bill_type: 'Parts',
      bill_receipt_status: 'Waiting',
      bill_status: 'unpaid',
      bill_date: 'Sunday,23-03-2020',
      bill_detail: 'Now make KE e-bill payments on KE website via your Bank Account, Debit or Credit Card',

    },
  ]
  back() {
    const refresh = true;
    this.router.navigateByUrl('unpaid-bill/' + refresh);

  }

  // async presentModalUpdatePayment() {
  //   console.log('presentModalUpdatePayment popup');
  //   const modal = await this.modalController.create({
  //     component: PaymentModalPage,
  //     cssClass: 'payment-modal'
  //   });
  //   return await modal.present();
  // }






}