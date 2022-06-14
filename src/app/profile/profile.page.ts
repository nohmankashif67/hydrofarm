import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router) { }
profile_data = {
client_name:'kashif',
client_phoneno:'03061234567',
client_location:'gujrat',
building_type:'kashif',
no_of_lifts:'1',
maintenance_start_date:'kashif',
maintenance_end_date:'kashif',

}
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

  inquiries(){
    this.router.navigateByUrl('inquiries');
  }

 
  notifications(){
    this.router.navigateByUrl('notifications');
  }

}
