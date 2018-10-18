import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';

@Injectable()
export class RazonIncidenciaService {
  url: String = 'razon_incidencia/';
 
  constructor(public http: HttpClient) { }
  getRazonInc(){
    return this.http.get(API_URL+this.url);
  }
  
}
