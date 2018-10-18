import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';

@Injectable()
export class GestionDetalleServicioService {
  url = 'gestion_detalle_servicio';
  constructor(public http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
   postDetalle(datos) {

      return this.http.post(API_URL + this.url, datos );
  }
}
