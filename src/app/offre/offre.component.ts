import { Component, OnInit } from '@angular/core';
import {Employees}from '../employees';
import {EmployeesService } from '../employees.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { Coach } from '../coach';
@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {
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
    this.empserv.getCoach()
    .subscribe((data:Coach[]) => {
      this.coaches = data;
      console.log(this.coaches)
    })
    this.empserv.demandes().subscribe(data =>
      {
        console.log(data);
        this.number=data;
    })
  }
    
  }
  updateCoach(coach:Coach):void{
    this.router.navigate(['view/'+coach.cin])
  }
  tp(){
    this.router.navigate(['demandes'])
  }
  delete(coach:Coach):void{
    if(this.empserv.delCoach(coach.cin).subscribe()){
      alert("Suppression effectuée")
      location.reload()
    }else{
      alert("Erreur lors de la suppression")
      location.reload()
    }
  }
}