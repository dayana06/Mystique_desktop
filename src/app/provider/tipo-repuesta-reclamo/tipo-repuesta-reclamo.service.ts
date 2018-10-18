import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"
@Injectable()
export class TipoRepuestaReclamoService {

  repuesta: any;
  id_reclamo:number;
  url_negocio: String = 'tipo_respuesta_reclamo/';
 
  constructor(public http: HttpClient) {
    this.id_reclamo=0;
   }
   setIdReclamo(id){
     console.log(this.id_reclamo)
     this.id_reclamo=id;
   }
   returnIdReclamo(){
     return this.id_reclamo;
   }
  getRepuestaReclamo(){
    return this.http.get(API_URL+this.url_negocio);
  }
  updateRepuestaReclamo(id, datos){
    return this.http.put(API_URL+this.url_negocio+id, datos);
  }  

}
