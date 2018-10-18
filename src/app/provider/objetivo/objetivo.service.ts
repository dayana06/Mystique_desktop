import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class ObjetivoService {
  objetivo: any;
  url_negocio: String = 'objetivo/';
  constructor(public http: HttpClient) { }
  getNegocio(){
    return this.http.get(API_URL+this.url_negocio);
  }
  updateNegocio(id, datos){
    return this.http.put(API_URL+this.url_negocio+id, datos);
  }

}
