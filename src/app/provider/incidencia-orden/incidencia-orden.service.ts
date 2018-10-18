import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';

@Injectable()
export class IncidenciaOrdenService {
  url = 'incidencia_orden/';
  constructor(public http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  getIncidencia() {
    return this.http.get(API_URL + this.url);
  }

  postIncidencia(datos) {
    return this.http.post(API_URL + this.url, datos);
  }

}
