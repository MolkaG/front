import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home0',
  templateUrl: './home0.component.html',
  styleUrls: ['./home0.component.scss']
})
export class Home0Component implements OnInit {
  sessionadmin:boolean;
  sessionuser:boolean;
  coachsession:boolean;
  session:boolean;
  x:string;
  constructor(public cookie:CookieService,private router:Router) {}

  ngOnInit() {
    
    if(this.cookie.get("id")){
     this.x=this.cookie.get("id")
     if(this.x=="admin"){
      this.sessionadmin=true;
     }else{
       this.sessionuser=true;
     }
    }else if(this.cookie.get("coach")){
      this.x=this.cookie.get("coach")
      this.coachsession=true;
    }else{
      this.session=true;
    }
    
  }
  profil(){
    if(this.sessionuser){
      this.router.navigate(["view/"+this.x]);
  }else{
    this.router.navigate(["viewcoach/"+this.x]);
  }
}
  admin(){
    this.router.navigate(["admin/"+this.x])
  }
}
