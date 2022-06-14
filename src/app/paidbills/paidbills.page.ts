import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-paidbills',
  templateUrl: './paidbills.page.html',
  styleUrls: ['./paidbills.page.scss'],
})
export class PaidbillsPage implements OnInit {

  constructor(private router:Router,  public activatedRoute: ActivatedRoute, private platform: Platform) { }

  ngOnInit() {
    console.log('Inside Ng On INit')
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.refresh = params['refresh'];
      console.log(this.refresh)
      if (this.refresh == 'true') {
        console.log('Refresh is True')
        this.call_api()
      }
    });
  }
  sub
  refresh
  call_api() {
    var refresh = true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('home');
    });
  }



  bill_data = [
    {
      bill_id: 'TD24153',
      bill_amount: '350 Riyals',
      bill_type: 'Parts',
      bill_status: 'paid',
      bill_date: 'Sunday,23-03-2020'
    },
    {
      bill_id: 'TD24153',
      bill_amount: '250 Riyals',
      bill_status: 'paid',
      bill_date: 'Sunday,23-03-2020'
    },
    {
      bill_id: 'TD24153',
      bill_amount: '150 Riyals',
      bill_type: 'Parts',
      bill_status: 'paid',
      bill_date: 'Sunday,23-03-2020',

    },
  ]

  home() {
    this.router.navigateByUrl('home');
  }
  
  paid() {
    this.router.navigateByUrl('paidbills');
  }
  
  billdetails(id) {
    this.router.navigateByUrl('billsdetail/' + id);
  }


}