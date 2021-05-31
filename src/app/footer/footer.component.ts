import { UserServiceService } from './../user-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import{ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
  user={
    username:"",
    password:""
    
  }
  searchText:any;
  message: string | undefined;
 
  users: any;
usern:any;
pass:any;

  constructor(private service:UserServiceService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    
    let response= this.service.getCurrentData(this.router.snapshot.params.username).subscribe((result:any)=>{
console.log("this is result",result)
this.user.username=result[0].username;
this.user.password=result[0].password;
console.log(this.user.username,this.user.password);
    
    
  })
}
public update(){

   let response= this.service.doUpdate(this.user);
   response.subscribe(data=>{console.log("sfa-----------",this.message="You have successfully registered");})
  
  }
 
}



