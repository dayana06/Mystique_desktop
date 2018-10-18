import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class ServicioSolicitadoService {
  url: String = 'servicio_solicitado/';

  constructor(public http: HttpClient) { }
  getServicioSolicitado(){
    return this.http.get(API_URL+this.url);
  }

  getServicioSolicitadoReporte(fechaInicio, fechaFin, order){
    return this.http.get(API_URL + 'reporte_servicios_solicitados?fecha_inicio=' + fechaInicio + '&fecha_fin=' + fechaFin + '&orderby=' + order);
  }
}
