import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-paymentmodal',
  templateUrl: './paymentmodal.page.html',
  styleUrls: ['./paymentmodal.page.scss'],
})
export class PaymentmodalPage implements OnInit {

  billdata: any = {};
  constructor(private platform: Platform, private router: Router, public modalController: ModalController) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.modalController.dismiss({
        'dismissed': true
      }).then((data) => {
        console.log('In Modaaaaaal');
        const refresh = true; // Here's your selected user!
        this.router.navigateByUrl('billsdetail' + refresh);
      });
    });
  }
  postbill() {

    // console.log(this.bill_receipt)
    const formData = new FormData();
    formData.append('bill_receipt', this.billdata.bill_receipt);
    //formData.append('user_id', decoded.user_id);
    //formData.append('bill_amount', this.amount);
    // let payload = {
    //  user_id:decoded.user_id,
    //  bill_amount:this.amount
    // }

    const refresh = true;
    this.modalController.dismiss(refresh);
  }
  ngOnInit() {
  }
  uploadFiles(e) {
    const file = e.target.files[0];
    this.billdata.bill_receipt = file;
    console.log(this.billdata.bill_receipt);
    console.log('An Image Uploaded');
  }

  dismiss() {
    console.log('Modal Dismissed!!!!!!!!!!!!')
    // let data={'dismissed': true,refresh:true}
    var refresh=true
     this.modalController.dismiss(refresh)
  //    .then((data) => {
  //      console.log('In Modaaaaaal')
  //     var refresh = true // Here's your selected user!
  //     this.router.navigateByUrl('tabs/paidbills/'+refresh);
  // });
   }


}
