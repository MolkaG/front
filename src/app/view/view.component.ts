import { Component, OnInit } from '@angular/core';
import {EmployeesService } from '../employees.service';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import {Employees}from '../employees';
import { RouterModule,Router, ActivatedRoute, Params } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  employees: Employees[];
  x:string;
  sessionadmin:boolean;
  sessionuser:boolean;
  addform: FormGroup;
  xx:any;
  
    constructor(private fb: FormBuilder,
      private empserv:EmployeesService,
      private router:Router,
      public cookie:CookieService,
      private routes:ActivatedRoute) {
    }
    onFileChanged(event) {
      console.log(event.target.files[0].name); 
      this.addform.value.img="../../assets/img/"+event.target.files[0].name;
    }
    cinpat="^[01][0-9]{1}([0-9]{3}){2}$";
    numpat = "^[95432][0-9]{1}([0-9]{3}){2}$";  
    mdpat="^[a-zA-Z0-9]{4,20}$";
    chpat="^[a-zA-Z]{3,20}$";
    cdpat="^[0-9]{4,4}$";

    
  
    ngOnInit() {
      if(!this.cookie.get("id")){
        alert("Vous devez vous connectez!!");
        this.router.navigate(["home"])
      }else{
        this.x=this.cookie.get("id")
        if(this.x=="admin"){
          this.sessionadmin=true;
        }else{
          this.sessionuser=true;
        }
      const param=this.routes.snapshot.params;
      

      this.addform=this.fb.group({
        cin:['',[Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
        passwrd:['',[Validators.required,Validators.maxLength(20),Validators.minLength(4)]],
        nom:['',[Validators.required,Validators.maxLength(30)]],
        prenom:['',[Validators.required,Validators.maxLength(30)]],
        age:['',[Validators.required,Validators.maxLength(2),Validators.min(18),Validators.max(110)]],
        tel:['',[Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
        email:['',[Validators.required,Validators.maxLength(50),Validators.email]],
        poids:['',[Validators.required,Validators.maxLength(3),Validators.min(10),Validators.max(1000)]],
        taille:['',[Validators.required,Validators.maxLength(3),Validators.max(200)]],
        img:[],

      });
      
      this.empserv.getIdUser(param.id)
      .subscribe((data:any)=>{
        //console.log(data[0])
        this.addform.patchValue(data[0]);
        this.xx=data[0].img;
      });
    }
    }

    
  update(){
    this.empserv.updUser(this.addform.value)
    .subscribe((data:any)=>{
      console.log(this.addform.value.img)
      alert("Modification effectuée")
      location.reload();
  },
)}
deconnexion(){
  this.cookie.delete("id");
  location.replace("");
}  
}
