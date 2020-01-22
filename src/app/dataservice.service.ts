import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import{ToastrService} from 'ngx-toastr'; 
import { Subject, BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();
 // email: any;
  //pswd: any;

  constructor(private toastr: ToastrService) { }
  
  changeMessage(message: string){
    this.messageSource.next(message);
  }

  login(data){
console.log("my data coming",data);
//this.email=data.email;
//console.log("dfgdch",this.email);

//this.pswd=data.pswd

if(data.email=="anubrata@gmail.com" && data.pswd==12345){
  console.log("login successful");
  let id = uuid();
  console.log("my id....",id);
  localStorage.setItem("ID",id);
  return true;
    
}else{
console.log("invalid");
}
}
alertForSuccess(message,title){
  this.toastr.success(message, title);
}
alertFordanger(message,title){
  this.toastr.error(message, title);
}
alertForWarning(message,title){
  this.toastr.warning(message, title);
}


registration(data){
  console.log("my data...",data);
}
}
