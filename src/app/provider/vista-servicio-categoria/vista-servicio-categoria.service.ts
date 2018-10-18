import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class VistaServicioCategoriaService {
  url: String = 'vista_servicio_categoria/';
  
  constructor(public http: HttpClient) { }
  
  getServicios(){
    return this.http.get(API_URL+this.url);
  }
}
