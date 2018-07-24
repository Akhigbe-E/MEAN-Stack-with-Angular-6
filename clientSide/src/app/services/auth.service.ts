import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  domain = "http://localhost:8080"
  constructor(
    private http: HttpClient
  ) { }




  //Function to register User
  registerUser(user: User): Observable<User>{
      return this.http.post<User>(this.domain+'/authenticate/register', user, {headers: new HttpHeaders({'Content-Type':'application/json'})
    });
  };

  checkUsername(username){
    return this.http.get<User>(this.domain+'/authenticate/checkUsername/'+username, {headers: new HttpHeaders({'Content-Type':'application/json'})
  });}

  checkEmail(email){
    return this.http.get(this.domain+'/authenticate/checkEmail/'+ email, {headers: new HttpHeaders({'Content-Type':'application/json'})
  });
}
}
