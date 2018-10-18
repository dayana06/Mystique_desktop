import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class VistaOrdenCitaService {
  url: String = 'vista_orden_cita/';
  constructor(public http: HttpClient) { }
  getOrdenCita(){
    return this.http.get(API_URL+this.url);
  }
  getOrdenCitaEspec(id){
    return this.http.get(API_URL+this.url + id);
  }
}
 