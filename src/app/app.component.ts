import { Component } from '@angular/core';
import {GetApiService} from './get-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data:any;
  title: any;
  constructor(private api:GetApiService){}
  ngOnInit(){
    this.api.apiCall().subscribe((result)=>this.data=result)
      
  }
}
