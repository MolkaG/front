import { Component, OnInit } from '@angular/core';
import {Employees}from '../employees';
import {House}from '../house';
import {EmployeesService } from '../employees.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-annuaire',
  templateUrl: './annuaire.component.html',
  styleUrls: ['./annuaire.component.scss']
})
export class AnnuaireComponent implements OnInit {
  emps:Employees[];
  house:House[];
  emp:Employees;
  empp:Employees;
  hous:House;
  x:string;
  srch:any ={};

  constructor(private empserv:EmployeesService,private router:Router,private cookie:CookieService) { }
  ngOnInit() {
    this.x=this.cookie.get("id");
    this.empserv.getEmp()
    .subscribe((data:House[]) => {
            console.log(data);
            this.house = data;
    })
  
  }
  contact(hous:House){
    if(this.x){
      this.router.navigate(["offre/"+hous.ID_A]);
    }else{
      alert("Vous devez vous connectez !")
      this.router.navigate(["home"])
    }
  }   
}