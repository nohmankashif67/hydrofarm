import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(private platform: Platform,private router: Router) {
    this.platform.backButton.subscribeWithPriority(10, () => {
     this.router.navigateByUrl('menu-tabs/tab1');
    });
   
  }
 
  home(){
    this.router.navigateByUrl('home');
  }
  profile(){
    this.router.navigateByUrl('profile');
  }

  language(){
    this.router.navigateByUrl('language');
  }

  inquiries(){
    this.router.navigateByUrl('inquiries');
  }

 
  notifications(){
    this.router.navigateByUrl('notifications');
  }

  ngOnInit() {
    
  }

}
