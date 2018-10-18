import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';


@Injectable()
export class GestionPromocionService {
  url_gestion_promociones = 'agregar_promocion';
  constructor(public http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'undefined',
      'Authorization': 'my-auth-token'
    })
  };



  getPromociones() {

    return this.http.get(API_URL + this.url_gestion_promociones);
  }

  addPromociones(promocion) {

    return this.http.post(API_URL + this.url_gestion_promociones, promocion);
  }







}
