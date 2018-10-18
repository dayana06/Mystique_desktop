import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"
@Injectable()
export class TipoComentarioService {

  id_comentario: number;
  tipoComentario: any;
  url_negocio: String = 'tipo_comentario/';
  
  constructor(public http: HttpClient) {
    this.id_comentario=0;
   }
   setIdComentario(id){
    console.log(this.id_comentario)
    this.id_comentario=id;
  }
  returnIdReclamo(){
    return this.id_comentario;
  }
  getTipoComentario(){
    return this.http.get(API_URL+this.url_negocio);
  }
  updateTipoComentario(id, datos){
    return this.http.put(API_URL+this.url_negocio+id, datos);
  }
}
