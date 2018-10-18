import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"
@Injectable()
export class ComentarioService {

  comentario: any;
  url_negocio: String = 'comentario/';
  url:string='vista_comentario';
  constructor(public http: HttpClient) { }
  getComentario(){
    return this.http.get(API_URL+this.url);
  }
  updateComentario(id, datos){
    return this.http.put(API_URL+this.url_negocio+id, datos);
  }
  
}