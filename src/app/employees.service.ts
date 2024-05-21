import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Employees } from './Employees';
import { House } from './house';
import{user} from './user';
import{Coach} from './coach';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(public http:HttpClient) {}
  
  demandes(){
    return this.http.get<any>('http://127.0.0.1/angularphp/demandes.php');
  }

  checkUser(user:user){
    return this.http.post<user>('http://127.0.0.1/angularphp/checklogUser.php',user);
  }

  checkCoach(coach:Coach){
    return this.http.post<Coach>('http://127.0.0.1/angularphp/checkLogCoach.php',coach);
  }

  addUser(user:user){
    return this.http.post<user>('http://127.0.0.1/angularphp/addUser.php',user);
  }

  addCoach(coach:Coach){
    return this.http.post<Coach>('http://127.0.0.1/angularphp/addCoach.php',coach);
  }

 updUser(user:user){
    return this.http.post<user>('http://127.0.0.1/angularphp/updateUser.php',user);
  }

  updCoach(coach:Coach){
    return this.http.post<Coach>('http://127.0.0.1/angularphp/updateCoach.php',coach);
  }

  getIdUser(id:any){
    return this.http.get<user>('http://127.0.0.1/angularphp/rechUser.php?id='+id);
  }

  getIdCoah(id:any){
    return this.http.get<Coach>('http://127.0.0.1/angularphp/rechCoach.php?id='+id);
  }

  getUsers(){
    return this.http.get<user[]>('http://127.0.0.1/angularphp/listUser.php');
  }

  getCoach(){
    return this.http.get<Coach[]>('http://127.0.0.1/angularphp/listCoach.php');
  }

  delUser(id:string){
    return this.http.delete<user>('http://127.0.0.1/angularphp/deleteUser.php?id='+id);
  }

  delCoach(id:string){
    return this.http.delete<Coach>('http://127.0.0.1/angularphp/deleteCoach.php?id='+id);
  }

  acceptDemande(id:any){
    return this.http.get<Coach[]>('http://127.0.0.1/angularphp/acceptDemande.php?id='+id);
  }

  refuseDemande(id:any){
    return this.http.get<Coach[]>('http://127.0.0.1/angularphp/deleteDemande.php?id='+id);
  }

  listDemandes(){
    return this.http.get<Coach[]>('http://127.0.0.1/angularphp/listDemandes.php');
  }














  checkEmp(emp:Employees){
    return this.http.post<Employees[]>('http://127.0.0.1/angularphp/checklog.php',emp);
  }

  updEmp(emp:Employees){
    return this.http.post<Employees[]>('http://127.0.0.1/angularphp/update.php',emp);
  }
  
 
 
  addEmp(emp:Employees){
    return this.http.post<Employees[]>('http://127.0.0.1/angularphp/add.php',emp);
  }

  getId(id:any){
    return this.http.get<Employees>('http://127.0.0.1/angularphp/rech.php?id='+id);
  }



  getEmp(){
    return this.http.get<House[]>('http://127.0.0.1/angularphp/list.php');
  }



  delEmp(id:string){
    return this.http.delete<Employees[]>('http://127.0.0.1/angularphp/delete.php?id='+id);
  }
  




  getEmp3(id:any){
    return this.http.get<House[]>('http://127.0.0.1/angularphp/list3.php?id='+id);
  }
  getEmp2(){
    return this.http.get<Employees[]>('http://127.0.0.1/angularphp/list2.php');
  }
 
 
  getId2(id:any){
    return this.http.get<House>('http://127.0.0.1/angularphp/rech2.php?id='+id);
  }
 
  updfact(id1:any,id2:any,ida:any,code:any){
    return this.http.get<any>('http://127.0.0.1/angularphp/update2.php?id1='+id1+'&id2='+id2+'&ida='+ida+'&code='+code);
  }
  
  delHous(id:any){
    return this.http.delete<House>('http://127.0.0.1/angularphp/delete2.php?id='+id);
  }
}
