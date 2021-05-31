import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: any;
  message!: string;

  username: any;
  password: any;

  constructor(private service: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    let response = this.service.getUsers();

    response.subscribe(data => console.log("-------------------", this.user = data));
  }


  public login(user: any) {
    
    for(let i=0;i<this.user.length;i++){
      
    if (this.username == this.user[i].username && this.password == this.user[i].password) {
     console.log("this is here")
    } else {
      console.log("user does not exist", this.username, this.password)
    }

  }


  }}

