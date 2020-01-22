import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 mydata:any;
 name:any;
  gender: any;
  email: any;
  pswd: any;
  constructor(
    private dataservice:DataserviceService,
  ) { }

  ngOnInit() {
    this.getdata();
  }
  getdata(){
    this.dataservice.currentMessage.subscribe(data=>{
      this.mydata=JSON.parse(data);
      console.log("data coming...",this.mydata);
      
    })
  }

}
