import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators,AbstractControl } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { RouterModule, Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;
  name: AbstractControl;
  gender: AbstractControl;
  email: AbstractControl;
  pswd: AbstractControl;

  userList: Array<any> = [];
  preparedData: Array<any> = [];

  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private dataservice:DataserviceService,



  ) { 

    this.registerform = formbuilder.group({
      email: ['',[Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      pswd: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      name: ['',[Validators.required]],
      gender: ['',[Validators.required]]
    });
    this.email = this.registerform.controls['email'];
    this.pswd = this.registerform.controls['pswd'];
  }

  ngOnInit() {
    this.dataservice.currentMessage.subscribe(data => {
      console.log('Remaining data.....',data);
      if(data){
        let newData = JSON.parse(data);
        console.log('',newData);
        this.preparedData = newData;
      }
    });
  }
  registration(){
    console.log("Method Running....");
    if(this.registerform.value.name && this.registerform.value.gender  && this.registerform.value.email && this.registerform.value.pswd)
    {
     let senddata={
      name:this.registerform.value.name,
      gender:this.registerform.value.gender,
      email:this.registerform.value.email,
      pswd:this.registerform.value.pswd
    }
    console.log('my data prepared',senddata);
    //this.dataservice.changeMessage(JSON.stringify(senddata));
    this.userList.push(senddata);
    console.log('Data pushed......',this.userList);
    
    if(this.preparedData && this.preparedData.length > 0){
      console.log("prepared in if......",this.preparedData);
      this.preparedData.push(senddata);
      this.dataservice.changeMessage(JSON.stringify(this.preparedData));
      this.router.navigate(['contact']);
    }
    else{
      console.log('Prepared in else.... ', this.preparedData);
      this.dataservice.changeMessage(JSON.stringify(this.userList));
      this.router.navigate(['contact']);
    }
  }
   
  }


}
