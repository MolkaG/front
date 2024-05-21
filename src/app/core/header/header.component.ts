import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sessionadmin:boolean;
  sessionuser:boolean;
  coachsession:boolean;
  session:boolean;
  x:string;
  constructor(private router:Router,public cookie:CookieService) { }
  
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
  profilcoach(){
    this.router.navigate(['viewcoach/'+this.x]);
  }
  profil(){
    this.router.navigate(['view/'+this.x]);
  }
  admin(){
    this.router.navigate(["admin/"+this.x])
  }

  deconnexion(){
    this.cookie.delete("id");
    this.cookie.delete("coach");
    location.replace("");
  }

}
