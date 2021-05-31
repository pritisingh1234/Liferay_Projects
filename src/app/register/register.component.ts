import { Component, OnInit } from '@angular/core';

import {UserServiceService} from '../user-service.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// user:Model= new Model("","");
user={
  username:"",
  password:""
  
}
  message: any;

  constructor(private service:UserServiceService,private router:Router) { }

  ngOnInit(): void {
  }
public registration(){

 
 
 if (this.user.username !="" && this.user.password !="") {
  let response= this.service.doRegistration(this.user);
  response.subscribe(data=>{console.log("sfa-----------",this.message="You have successfully registered");})
}else{
  
}


}

}

