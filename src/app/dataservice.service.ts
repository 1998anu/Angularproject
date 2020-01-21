import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  email: any;
  pswd: any;

  constructor() { }
  login(data){
console.log("my data coming",data);
this.email=data.email;
console.log("dfgdch",this.email);

this.pswd=data.pswd

if(data.email=="anubrata@gmail.com" && data.pswd==12345){
  console.log("login successful");
    
}else{
console.log("invalid");

}
}
}
