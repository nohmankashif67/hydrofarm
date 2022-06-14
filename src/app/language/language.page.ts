import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Platform } from '@ionic/angular';
declare let $ : any;
@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
language='English';
collapse=false;
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

  settings(){
    this.router.navigateByUrl('setting');
  }

  inquiries(){
    this.router.navigateByUrl('inquiries');
  }

 
  notifications(){
    this.router.navigateByUrl('notifications');
  }

  
  ngOnInit() {
  }
  passvalue(value){
    $("#collapseTwo").collapse('hide');
    this.language=value
    console.log('kashif');
  }
  collapsetrue(){
    console.log('Inside Collapse True')
    this.collapse=false
  }
}