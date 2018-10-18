import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class TipoRespPresupuestoService {
  url: String = 'tipo_respuesta_presupuesto/';
  
  constructor(public http: HttpClient) { }
  
  getTipoRespPresupuesto(){
    return this.http.get(API_URL+this.url);
  }
}
