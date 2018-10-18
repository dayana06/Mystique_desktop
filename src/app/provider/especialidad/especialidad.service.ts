import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_URL='http://localhost:3000/api/'

@Injectable()
export class EspecialidadService {
  url='especialidad/';

  constructor(public http: HttpClient) { }
  getEspecialidadEspecif(id){
    return this.http.get(API_URL+this.url+id);
  }
  getEspecialidad(){
    return this.http.get(API_URL+this.url);
  }

}
