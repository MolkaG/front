import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';
import{user} from '../user'
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  addform: FormGroup;
  constructor(private fb: FormBuilder,
    private empserv:EmployeesService,
    private router:Router,
    private cookie:CookieService) {
  }
  
 ngOnInit() {
    this.addform=this.fb.group({
      cin:['',[Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
      mdp:['']
    });
  }
onSubmit(){
  if(this.addform.controls.cin.value =='admin'&&this.addform.controls.mdp.value =='admin'){
    this.cookie.set('id', 'admin', null, null, null, null, "Lax");
    location.replace('')
  }else{
  this.empserv.checkUser(this.addform.value)
  .subscribe(
    data =>{this.cookie.set("id",this.addform.controls.cin.value, null, null, null, null, "Strict"),
    location.replace('');
    
  },
    error=>{this.empserv.checkCoach(this.addform.value).subscribe(
      data =>{this.cookie.set("coach",this.addform.controls.cin.value, null, null, null, null, "Strict"),
      location.replace('');
    },
    error=>{alert("Nom de compte / Mot de passe incorrect!!");
    })},)
  }
}
add(){
  location.replace('add');
}
}
