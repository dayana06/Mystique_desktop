import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class VComentariosService {
  VComentario: any;
  url_negocio: String = 'vista_comentario/';
  
  constructor(public http: HttpClient) { }
  getVistaComentarios(){
    console.log(this.url_negocio)
    return this.http.get(API_URL+this.url_negocio);
  }
  updateVistaComentarios(id, datos){
    return this.http.put(API_URL+this.url_negocio+id, datos);
  }
 

}
