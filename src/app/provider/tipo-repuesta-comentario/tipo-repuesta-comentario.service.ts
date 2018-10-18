import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"
@Injectable()
export class TipoRepuestaComentarioService {

  repuesta: any;
  id_comentario:number;
  url_negocio: String = 'tipo_respuesta_comentario/';
 
  constructor(public http: HttpClient) {
    this.id_comentario=0;
   }
   setIdComentario(id){
     console.log(this.id_comentario)
     this.id_comentario=id;
   }
   returnIdComenario(){
     return this.id_comentario;
   }
  getTipoRepuestaC(){
    return this.http.get(API_URL+this.url_negocio);
  }
  updateTipoRepuestaC(id, datos){
    return this.http.put(API_URL+this.url_negocio+id, datos);
  }  

}
