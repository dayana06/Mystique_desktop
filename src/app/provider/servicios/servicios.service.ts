import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/'
@Injectable()
export class ServiciosService {
  listado_servicio = 'servicio/'
  constructor(public http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content -type': `application/json`,
      'Authoryzacoion': `my-auth-token`
    })
  };



  getServicios() {

    return this.http.get(API_URL + this.listado_servicio);

  }

  getServicioEspec(id) {
    return this.http.get(API_URL + this.listado_servicio + id);
  }

  getReporteCalificacion(order) {
    return this.http.get(API_URL + 'reporte_servicio_calificado?orderby=' + order);
  }

  getInsumos() {
    return this.http.get(API_URL + 'insumo');
  }

}
