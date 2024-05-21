import { Component, OnInit } from '@angular/core';
import {EmployeesService } from '../employees.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { House } from '../house';

@Component({
  selector: 'app-moffre',
  templateUrl: './moffre.component.html',
  styleUrls: ['./moffre.component.scss']
})
export class MoffreComponent implements OnInit {

  emps:House[];
  emp:House;
  srch:any ={};
  constructor(private empserv:EmployeesService,private router:Router,private cookie:CookieService) { }

  ngOnInit() {
    if(!this.cookie.get("id")){ 
      alert("Vous devez vous connectez!")
      this.router.navigate(["home"])
    }else{
    this.empserv.getEmp3(this.cookie.get("id"))
    .subscribe((data:House[]) => {
      console.log(data);
      this.emps=data;
    })}
    
  }

  delete(emp:House):void{
    if(this.empserv.delHous(emp.ID_A).subscribe()){
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
