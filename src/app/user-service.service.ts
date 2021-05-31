import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
username:any;
  apiurl='http://localhost:8080/getusers';
 
  constructor(private http:HttpClient) { }
public doRegistration(user:any){
  return this.http.post('http://localhost:8080/save-users',user,{responseType:'text' as 'json'});

}

public getUsers(){
  return this.http.get('http://localhost:8080/getusers');

}

public deleteUser(username:String){
  return this.http.get('http://localhost:8080/deleted0.........../'+username);

}
public getCurrentData(username:String){
  return this.http.get('http://localhost:8080/getuser/'+username)
  
  }
  
  public doUpdate(user:any){
    return this.http.put('http://localhost:8080/update-users',user,{responseType:'text' as 'json'});
  
  }
}

