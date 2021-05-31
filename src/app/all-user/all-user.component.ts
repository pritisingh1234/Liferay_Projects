import { UserServiceService } from './../user-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
 
  user: any;
  searchText:any;
  message: string | undefined;
  

  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
    let response= this.service.getUsers();
    response.subscribe(data =>this.user=data);
    
  }
  public removeUser(username:String){
    
    if(confirm("Are you sure you want to delete"))
    {
    let response= this.service.deleteUser(username);
    response.subscribe((data: any) =>this.user=data);
    response.subscribe(data=>{console.log("sfa-----------",this.message="You have successfully deleted");})

  }
  
}
 
  
}
