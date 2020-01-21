import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  id: any;
  constructor( 
    private router: Router,
    private dataservice:DataserviceService,) { }

  ngOnInit() {
    this.getId();
  }
  getId(){
    this.id = localStorage.getItem("ID");
    //console.log("my id....",this.id);
    
  }
  logout(){
    localStorage.removeItem("ID");
    this.router.navigate(['login']);
    this.dataservice.alertForSuccess("log out","successfully");
  }

}
