import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(private router:Router, ) { }

  back(){
    this.router.navigateByUrl('home');
  }
  home(){
    this.router.navigateByUrl('home');
  }
  profile(){
    this.router.navigateByUrl('profile');
  }

  settings(){
    this.router.navigateByUrl('setting');
  }

  inquiries(){
    this.router.navigateByUrl('inquiries');
  }

  language(){
    this.router.navigateByUrl('language');
  }

 

 


  ngOnInit() {
  }

}
