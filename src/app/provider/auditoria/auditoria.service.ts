import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL='http://localhost:3000/api/'

@Injectable()
export class AuditoriaService {

  url_auditoria='auditoria';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http:HttpClient) { }

getAuditoria(){
  return this.http.get(API_URL+this.url_auditoria);
}

}
