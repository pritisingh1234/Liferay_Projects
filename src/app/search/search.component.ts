import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from './../user-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user={
    username:"",
    password:""
    
  }

  constructor(private service:UserServiceService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    let response= this.service.getCurrentData(this.router.snapshot.params.username).subscribe((result:any)=>{
      console.log("this is result",result)
      this.user.username=result[0].username;
      this.user.password=result[0].password;
      console.log(this.user.username,this.user.password);
  });
  }
  }


