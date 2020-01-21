import { Component, OnInit,  } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators,AbstractControl} from '@angular/forms';
import { NgIf } from '@angular/common';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  email: AbstractControl;
  pswd: AbstractControl;
  constructor(
     //private spinner: NgxSpinnerService,
   // private router: Router,
   private formbuilder: FormBuilder,
   private dataservice:DataserviceService
   //private userService: UserService
  ) {
    this.loginform = formbuilder.group({
      email: ['',[Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      pswd: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]
    });
    this.email = this.loginform.controls['email'];
    this.pswd = this.loginform.controls['pswd'];
    }


  ngOnInit() {
  }
  login(){
    console.log("Method Running....");
    if(this.loginform.value.email && this.loginform.value.pswd)
    {

      
   
     let senddata={
      email:this.loginform.value.email,
      pswd:this.loginform.value.pswd
      
      
    }
    console.log('my data prepared',senddata);
    let data=this.dataservice.login(senddata);
  }
  }
}
