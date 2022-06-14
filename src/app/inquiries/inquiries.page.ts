import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
// import { InstallationService } from '../../services/main.service';
import jwt_decode from "jwt-decode";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.page.html',
  styleUrls: ['./inquiries.page.scss'],
})
export class InquiriesPage implements OnInit {

  constructor(private router: Router){
//  this.call_api()
//         }
//         inquiry_data;
//         call_api(){
//           console.log('In Constructor')
//           this.platform.backButton.subscribeWithPriority(10, () => {
//             this.router.navigateByUrl('menu-tabs/tab1');
//           });
//           var decoded:any={}
//           var retrievedtoken = localStorage.getItem('token') || ""
//           decoded = jwt_decode(retrievedtoken);
//           console.log(decoded)
//           let payload = {
//            user_id:decoded.user_id,
//           }
              //  this.service.getinquiries(payload).subscribe(res => {
              //   this.inquiry_data=res
              //   console.log(this.inquiry_data)
              // })
        }
        ngOnInit() {
          // console.log('Inside Ng On INit')
          //   this.sub = this.activatedRoute.params.subscribe(params => {
          //     this.refresh = params['refresh'];
          //     console.log(this.refresh)
          //     if(this.refresh=='true'){
          //       console.log('Refresh is True')
          //       this.call_api()
          //     }
          //   });
           }
            sub
            refresh
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

  async inquiries(){
    var refresh=true
    this.router.navigateByUrl('/tabs/inquiries/'+refresh);
  }
  faqs(){
    var refresh=true
    this.router.navigateByUrl('faq');
  }
  newinquiry(){
    var refresh=true
    this.router.navigateByUrl('/newinquiries/'+refresh);
  }
}