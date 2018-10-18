import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class VistaEmpleadosCategoriaService {
  url: String = 'vista_empleados_categoria/';
  constructor(public http: HttpClient) { }
  getEmpleadosCat(){
    return this.http.get(API_URL+this.url);
  }

  getEmpleadosCatEsp(id){
    return this.http.get(API_URL+this.url+id);
  }
}
