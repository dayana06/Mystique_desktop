import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';

@Injectable()
export class CategoriasServicioService {
  url_listado_categorias = 'categoria_servicio';
  constructor(public http: HttpClient) { }


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };


getCategorias() {

  return this.http.get(API_URL + this.url_listado_categorias);
}



}

