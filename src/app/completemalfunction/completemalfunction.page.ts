import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-completemalfunction',
  templateUrl: './completemalfunction.page.html',
  styleUrls: ['./completemalfunction.page.scss'],
})
export class CompletemalfunctionPage implements OnInit {

  constructor(private router:Router , public activatedRoute: ActivatedRoute, private platform: Platform ) { }

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
      this.router.navigateByUrl('../newmalfunction');
    });
  }

  home() {
    this.router.navigateByUrl('home');
  }
  new() {
    this.router.navigateByUrl('newmalfunction');
}
  completed() {
    this.router.navigateByUrl('solvedmalfunctions');
  }
  malfunctionsDetails() {
    this.router.navigateByUrl('malfunctiondetail');
  }



}