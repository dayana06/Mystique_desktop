import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class ReclamoService {
  reclamo: any;
  url_negocio: String = 'reclamo/';
  
  url:string='vista_reclamos_realizados';
  constructor(public http: HttpClient) { }
  getReclamo(){
    return this.http.get(API_URL+this.url);
  }
  updateReclamo(id, datos){
    return this.http.put(API_URL+this.url_negocio+id, datos);
  }

  getReporteReclamo (fechaInicio, fechaFin) {
    return this.http.get(API_URL + 'reporte_reclamo?fecha_inicio=' + fechaInicio + '&fecha_fin=' + fechaFin);
  }
}
