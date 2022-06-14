import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router:Router, ) { }
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

  notification(){
    this.router.navigateByUrl('setting');
  }

  notifications(){
    this.router.navigateByUrl('notifications');
  }

  



  totalmalfunctions(){
    console.log('inside Malfunctions');
    this.router.navigateByUrl('newmalfunction')
  }

  solvedmalfunction(){
    console.log('inside Malfunctions');
    this.router.navigateByUrl('solvedmalfunctions')
  }

  bills(){
    console.log('inside Malfunctions');
   // const refresh=true;
  this.router.navigateByUrl('paidbills');
  }

  todaymalfunction() {
    console.log('inside Installation');
    this.router.navigateByUrl('malfunctiondetail');
  }

  assignedmalfunction(){
    console.log('inside Malfunctions');
    this.router.navigateByUrl('assignedmalfunctions')
  }

  malfunction_data = [
    { malfunction_id:'1',
      Client_Name: 'Naeem Arshad',
      Client_Location: 'Abu Dhabi',
    },
    {
      malfunction_id: '2',
      Client_Name : 'Naeem Arshad',
      Client_Location: 'Abu Dhabi',
    },
{
      malfunction_id: '3',
      Client_Name: 'Naeem Arshad',
      Client_Location : 'Abu Dhabi',
    }

  ]

  ngOnInit() {
  }

}
