import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class RespuestaComentarioService {

  repuesta: any;
  url_negocio: String = 'respuesta_comentario/';
 
  constructor(public http: HttpClient) { }
  getRepuestaComentario(){
    return this.http.get(API_URL+this.url_negocio);
  }
  updateRepuestaComentario(id, datos){
    return this.http.put(API_URL+this.url_negocio+id, datos);
  }  
  postRepuestaComentario( comentario){
    return this.http.post(API_URL+this.url_negocio,comentario);
  }


}
