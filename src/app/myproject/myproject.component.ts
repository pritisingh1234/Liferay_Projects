import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';  
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-myproject',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.css']
})
export class MyprojectComponent implements OnInit {
  isCollapsed = true;
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  showToaster(){
    this.toastr.success("Hello, I'm the toastr message.")
}


}
