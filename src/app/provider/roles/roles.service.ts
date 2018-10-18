import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL='http://localhost:3000/api/'

@Injectable()
export class RolesService {

  url_roles='rol';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) { }

  getRoles(){
    return this.http.get(API_URL+this.url_roles);
  }
  getRol(id){
    return this.http.get(API_URL+this.url_roles+"/"+id);
  }
  putRol(id,rol){
    return this.http.put(API_URL+this.url_roles+"/"+id,rol);
  }
  postRol(rol){
    return this.http.post(API_URL+this.url_roles,rol);
  }

}
