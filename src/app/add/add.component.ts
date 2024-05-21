import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

  export class AddComponent implements OnInit {
    addform: FormGroup;
    selectedOption: string;
    x:any;

    constructor(private fb: FormBuilder,
      private empserv:EmployeesService,
      private router:Router) {
        
    }
    cinpat="^[01][0-9]{1}([0-9]{3}){2}$";
    numpat = "^[95432][0-9]{1}([0-9]{3}){2}$";  
    mdpat="^[a-zA-Z0-9]{4,20}$";
    chpat="^[a-zA-Z]{3,20}$";
    cdpat="^[0-9]{4,4}$";
  

    onFileChanged(event) {
      console.log(event.target.files[0].name); 
      this.x="../../assets/img/"+event.target.files[0].name;
    }
  
    ngOnInit() {
      this.x="../../assets/img/unknown.jpg";

      this.addform=this.fb.group({
        cin:['',[Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
        passwrd:['',[Validators.required,Validators.maxLength(20),Validators.minLength(4)]],
        nom:['',[Validators.required,Validators.maxLength(30)]],
        prenom:['',[Validators.required,Validators.maxLength(30)]],
        age:['',[Validators.required,Validators.maxLength(2),Validators.min(18),Validators.max(110)]],
        tel:['',[Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
        email:['',[Validators.required,Validators.maxLength(50),Validators.email]],
        poids:['',[Validators.required,Validators.maxLength(3),Validators.min(10),Validators.max(1000)]],
        taille:['',[Validators.required,Validators.maxLength(3),Validators.min(100),Validators.max(300)]],
        img:[],
      });
    }

 
   onSubmit(){
    this.addform.value.img=this.x;
    this.empserv.addUser(this.addform.value)
    .subscribe(data =>{
      console.log(this.addform)
      this.router.navigate(['']);
      },
      error=>{
        alert('Ce compte est deja existant');
      }
    )}  
    
  }