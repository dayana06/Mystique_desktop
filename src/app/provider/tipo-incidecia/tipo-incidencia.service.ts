import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL='http://localhost:3000/api/'

@Injectable()
export class TipoIncidenciaService {
  url='tipo_incidencia/';
  constructor(public http: HttpClient) { }
  getTipoIncidencia(){
    return this.http.get(API_URL+this.url);
  }
}
