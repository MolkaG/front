import { Component, OnInit } from '@angular/core';
import {EmployeesService } from '../employees.service';
import { RouterModule,Router, ActivatedRoute, Params } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  x:string;
  mail:string;
  session:boolean;
    constructor(
      private empserv:EmployeesService,
      private router:Router,
      private cookie:CookieService,
      private routes:ActivatedRoute) { }

  ngOnInit() {
    if(this.cookie.get("id")){
      this.session=true;
      this.x=this.cookie.get("id")
      this.empserv.getIdUser(this.x) .subscribe((data:any)=>{
        //console.log(data[0])
        this.mail=data[0].email;});
    }else{
      this.session=false;
    }
    
  }
  submit(){
    alert("Message envoyé");
    this.router.navigate([""])
  }
}
