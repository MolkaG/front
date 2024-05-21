import { Component, OnInit } from '@angular/core';
import { AnnuaireComponent } from '../annuaire/annuaire.component';
import {EmployeesService } from '../employees.service';
import { RouterModule,Router, ActivatedRoute, Params } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {House}from '../house';
import { Employees } from '../employees';
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {
  house:any;
  p1:any;
  p2:Employees;
  nom:any;
  nomm:any;
  options = [
    { name: "Cash", value: 1 },
    { name: "Cheque", value: 2 }
  ]
  x:boolean;
  selectedOption: string;
  t:string;
  constructor(
    private empserv:EmployeesService,
    private router:Router,
    private cookie:CookieService,
    private routes:ActivatedRoute) { }

  ngOnInit(){
    this.selectedOption="Cash";
    this.p1=this.routes.snapshot.params.id;
    this.house=this.routes.snapshot.params.ida;
    console.log(this.p1+ this.house);
    this.empserv.getId(this.p1)
      .subscribe((data:Employees) => {
        this.p1=(data[0]);
        this.nom=this.p1.nom+' '+this.p1.prenom;
     this.empserv.getId(this.cookie.get('id'))
      .subscribe((data:Employees) => {
        this.p2=(data[0]);
        console.log(this.p2);  
        this.nomm=this.p2.nom+' '+this.p2.prenom;  
     this.empserv.getId2(this.house)
      .subscribe((data:House) => {
        this.house=(data[0]);
        console.log(this.house);   
  })})})
}
  enregistrer(){
      if(this.selectedOption == "cash"){
        this.t=null;
      }
      this.empserv.updfact(this.p2.cin,this.p1.cin,this.house.ID_A,this.t)
      .subscribe((data:any)=>{
        console.log(data);
      alert("Commande effectuée!!");
      this.router.navigate(["ann"]);
      })
    }
  annuler(){
    this.router.navigate(["offre/"+this.house.ID_A]);
  }
}
