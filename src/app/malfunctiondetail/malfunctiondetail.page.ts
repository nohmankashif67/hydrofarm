import { Component, OnInit } from '@angular/core';
//import {Router} from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
//import { MapPage } from '../map/map.page'; 

@Component({
  selector: 'app-malfunctiondetail',
  templateUrl: './malfunctiondetail.page.html',
  styleUrls: ['./malfunctiondetail.page.scss'],
})
export class MalfunctiondetailPage implements OnInit {

  constructor(private router: Router, public modalController:
    ModalController, public activatedRoute: ActivatedRoute, private platform: Platform) { }

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
     this.router.navigateByUrl('../completemalfunction');
   });
 }


 malfunctionupdate(){
this.router.navigateByUrl('updatemalfunction');
 }

 back() {
   this.router.navigateByUrl('home');

 }


//  async map() {

//    console.log('map popup');
//    const modal = await this.modalController.create({
//      component: MapPage,
//      cssClass: 'map'
//    });
//    return await modal.present();
//  }

}
