import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';
import { Injectable } from '@angular/core';

@Injectable()
export class PresupuestoService {
  url = 'presupuesto';
  constructor(public http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  postPresupuesto(presupuesto) {

    return this.http.post(API_URL + this.url, presupuesto);
  }

}
