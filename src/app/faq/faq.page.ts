import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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

  

  language(){
    this.router.navigateByUrl('language');
  }



  notifications(){
    this.router.navigateByUrl('notifications');
  }

   inquiries(){
    
    this.router.navigateByUrl('inquiries');
  }
  // faqs(){
  //   var refresh=true
  //   this.router.navigateByUrl('inquiries');
  // }
  // newinquiry(){
  //   var refresh=true
  //   this.router.navigateByUrl('/newinquiries/'+refresh);
  // }
}
