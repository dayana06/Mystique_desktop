import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';

@Injectable()
export class GestionConsejoService {

  url_gestion_consejo = 'agregar_consejo';
  constructor(public http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };



  getConsejo() {

    return this.http.get(API_URL + this.url_gestion_consejo);
  }

  addConsejo(consejo) {

    return this.http.post(API_URL + this.url_gestion_consejo, consejo );
  }

}
