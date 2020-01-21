import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private emitChangeSource = new Subject<any>();
  // changeEmitted$ = this.emitChangeSource.asObservable();

 
  constructor(
  ) { }

  login(data){
    console.log('getting data in service......',data);
   // let email = sendData.email;
   // let pswd = sendData.pswd;
    if(data.email == "abc@gmail.com" && data.pswd == 12345){
      console.log("Login successful");
      let id = uuid();
      console.log("my id....",id);
    }
    else{
      console.log("Invalid");
    }
  }
}