import { Component, OnInit } from '@angular/core';
import {Employees}from '../employees';
import {EmployeesService } from '../employees.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { Coach } from '../coach';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.scss']
})
export class DemandesComponent implements OnInit {
  emps:Employees[];
  emp:Employees;
  srch:any ={};
  users:any;
  coaches:any;
  xx:any;
  number:any;
  constructor(private empserv:EmployeesService,private router:Router,private cookie:CookieService) { }

  ngOnInit() {
    if(!this.cookie.get("id")){ 
      alert("Vous devez vous connectez entant que Admin !!!")
      this.router.navigate(["home"])
    }else{
    this.empserv.listDemandes()
    .subscribe((data:Coach[]) => {
      this.coaches = data;
      console.log(this.coaches)
    })
  }
    
  }
  accept(coach:Coach):void{
    if(this.empserv.acceptDemande(coach.cin).subscribe()){
      alert("Accepté(e)")
      location.reload()
    }else{
      alert("Erreur")
      location.reload()
    }
  }
  refuse(coach:Coach):void{
    if(this.empserv.refuseDemande(coach.cin).subscribe()){
      alert("Refusé(e)")
      location.reload()
    }else{
      alert("Erreur")
      location.reload()
    }
  }
}