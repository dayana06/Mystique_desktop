import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';

@Injectable()
export class OrdenServicioService {
  url = 'orden_servicio/';
  public incidencia: {
    id_servicio: number;
    id_tipo_incidencia: number;
    descripcion: string;
    realizado: boolean;
    nombre: string;
  }
  constructor(public http: HttpClient) { 
    this.incidencia = {
      id_servicio: null,
      id_tipo_incidencia: null,
      descripcion: '',
      realizado: false,
      nombre: ''
    }
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
   putOrden(id, datos) {

      return this.http.put(API_URL + this.url + id, datos );
  }

  setIncidencia(datos){
    this.incidencia = datos
  }

  getIncidencia(){
    return this.incidencia
  }
}
