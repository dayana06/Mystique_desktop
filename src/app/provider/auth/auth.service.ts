import { UserService } from './../user/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL="http://localhost:3000/api/"

@Injectable()
export class AuthService {
  user: any;
  url_login: String = 'signin';
  perfil: any;
  token: any;
  id_user_token: any;

  constructor(
    public http:HttpClient,
    public usuario: UserService
  ) { 
    console.log('authprovider');
  }

  loguear(cred){
    return this.http.post(API_URL+this.url_login, cred);
  }
  ApiUrl(){
    return API_URL;
  }
}
