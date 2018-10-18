import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"
@Injectable()
export class VistaReclamoService {
  VReclamo: any;
  url_negocio: String = 'vista_reclamo/';
  
  constructor(public http: HttpClient) { }
  getVistaReclamo(){
    console.log(this.url_negocio)
    return this.http.get(API_URL+this.url_negocio);
  }
  updateVistaReclamo(id, datos){
    return this.http.put(API_URL+this.url_negocio+id, datos);
  }
 

}
