import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class TiposServiciosService {
  url: String = 'tipo_servicio/';
  
  constructor(public http: HttpClient) { }
  
  getTipoServicio(){
    return this.http.get(API_URL+this.url);
  }

  getTipoServicioEsp(id){
    return this.http.get(API_URL+this.url+id);
  }
}
