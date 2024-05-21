import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addoff',
  templateUrl: './addoff.component.html',
  styleUrls: ['./addoff.component.scss']
})
export class AddoffComponent implements OnInit {
  addform: FormGroup;
  options = ['Mr','Mme','Melle'];
  options1 = ['Appartement', 'Villa', 'Bureau', 'Terrain'];
  options2 = ['Vente','Location'];
  options3 = ['Meuble','Vide'];

  selectedOption: string;

  constructor(private fb: FormBuilder,
    private empserv:EmployeesService,
    private router:Router) {
      
  }
  cinpat="^[01][0-9]{1}([0-9]{3}){2}$"
  numpat = "^[95432][0-9]{1}([0-9]{3}){2}$";  
  fixpat = "^[7][0-9]{1}([0-9]{3}){2}$";
  mdpat="^[a-zA-Z0-9]{4,20}$";
  chpat="^[a-zA-Z]{3,20}$";
  cdpat="^[0-9]{4,4}$";

  ngOnInit() {
    this.addform=this.fb.group({
      cin:['',[Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
      civilite:[Validators.required],
      mdp:['',[Validators.required,Validators.maxLength(20),Validators.minLength(4)]],
      nom:['',[Validators.required,Validators.maxLength(30)]],
      prenom:['',[Validators.required,Validators.maxLength(30)]],
      R_SC:['',[Validators.required,Validators.maxLength(30)]],
      adresse:['',[Validators.required,Validators.maxLength(30)]],
      ville:['',[Validators.required,Validators.maxLength(30)]],
      code:['',[Validators.required,Validators.maxLength(4),Validators.minLength(4)]],
      tel_p:['',[Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
      tel_f:['',[Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
      mail:['',[Validators.required,Validators.maxLength(50),Validators.email]],
     });
  }


 onSubmit(){
  this.empserv.addEmp(this.addform.value)
  .subscribe(data =>{
    console.log(this.addform)
    this.router.navigate(['']);
    },
    error=>{
      alert('Ce compte est deja existant');
    }
  )}  
  
}