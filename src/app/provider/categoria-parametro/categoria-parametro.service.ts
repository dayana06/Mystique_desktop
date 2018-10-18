import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';
@Injectable()
export class CategoriaParametroService {
  url_listado_categorias = 'categoria_parametro';
  constructor(public http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  getCategoriasParametros() {
    return this.http.get(API_URL + this.url_listado_categorias);
  }
}