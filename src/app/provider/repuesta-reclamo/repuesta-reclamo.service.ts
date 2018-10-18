import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"
@Injectable()

export class RepuestaReclamoService {

  repuestarec: any;
  url_negocio: String = 'respuesta_reclamo/';
 
  constructor(public http: HttpClient) { }
  getRepuestaRec(){
    return this.http.get(API_URL+this.url_negocio);
  }
  updateRepuestaRec(id, datos){
    return this.http.put(API_URL+this.url_negocio+id, datos);
  }  
  postRepuestaRec( reclamo){
    return this.http.post(API_URL+this.url_negocio,reclamo);
  }




}
