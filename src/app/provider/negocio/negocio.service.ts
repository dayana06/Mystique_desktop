import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class NegocioService {
  negocio: any;
  url_negocio: String = 'negocio/';
 
  constructor(public http: HttpClient) { }
  getNegocio(){
    return this.http.get(API_URL+this.url_negocio);
  }
  updateNegocio(id, datos){
    return this.http.put(API_URL+this.url_negocio+id, datos);
  }
  
/*
  post(imagen) {
    return this.http.post(API_URL + this.url_negocio, imagen);
  }*/
}
