import { Component, OnInit } from '@angular/core';
import {Employees}from '../employees';
import {EmployeesService } from '../employees.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { user } from '../user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  emps:Employees[];
  emp:Employees;
  srch:any ={};
  users:any;
  xx:any;
  constructor(private empserv:EmployeesService,private router:Router,private cookie:CookieService) { }

  ngOnInit() {
    if(!this.cookie.get("id")){ 
      alert("Vous devez vous connectez entant que Admin !!!")
      this.router.navigate(["home"])
    }else{
    this.empserv.getUsers()
    .subscribe((data:user[]) => {
      this.users = data;
      console.log(this.users)
    })}
    
  }
  updateUser(user:user):void{
    this.router.navigate(['view/'+user.cin])
  }

  delete(user:user):void{
    if(this.empserv.delUser(user.cin).subscribe()){
      alert("Suppression effectuée")
      location.reload()
    }else{
      alert("Erreur lors de la suppression")
      location.reload()
    }
  }
  /*search(){
    if(this.srch==""){
      this.ngOnInit();
    }else{
    this.emps=this.emps.filter(res =>{
      return res.nom.toLocaleLowerCase().match(this.srch.toLocaleLowerCase())
    });
  }
}*/

  
}
