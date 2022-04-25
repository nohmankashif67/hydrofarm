import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-updatemalfunction',
  templateUrl: './updatemalfunction.page.html',
  styleUrls: ['./updatemalfunction.page.scss'],
})
export class UpdatemalfunctionPage implements OnInit {

  constructor(private router:Router, public activatedRoute: ActivatedRoute, private platform: Platform) { }

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
  // eslint-disable-next-line @typescript-eslint/member-ordering
  refresh
  call_api() {
    var refresh = true
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigateByUrl('../malfunctiondetail');
    });
  }

  back(){
    this.router.navigateByUrl('malfunctiondetail');

  }
  map() {
    this.router.navigateByUrl('map');
  }


}
