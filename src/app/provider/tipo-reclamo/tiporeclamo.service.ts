import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"
@Injectable()
export class TiporeclamoService {
  tipoReclamo: any;
  url_negocio: String = 'tipo_reclamo/';
  
  constructor(public http: HttpClient) { }
  getTipoReclamo(){
    return this.http.get(API_URL+this);
  }
  updateTipoReclamo(id, datos){
    return this.http.put(API_URL+this.url_negocio+id, datos);
  }
  

}
