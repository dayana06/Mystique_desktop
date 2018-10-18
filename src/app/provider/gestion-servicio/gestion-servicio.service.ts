import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';

@Injectable()
export class GestionServicioService {

  url_gestion_servicio = 'agregar_servicio';
  constructor(public http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };



  getServicio() {

    return this.http.get(API_URL + this.url_gestion_servicio);
  }

  addServicio(servicio) {

    return this.http.post(API_URL + this.url_gestion_servicio, servicio );
  }
}
