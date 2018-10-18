import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';
@Injectable()
export class CategoriaService {

  constructor(public http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content -type': `application/json`,
      'Authoryzacoion': `my-auth-token`
    })
  };

  getCategoria(categoriaABuscar) {

    return this.http.get(API_URL + categoriaABuscar);

  }

  postCategoria(categoriaABuscar, categoria) {
    return this.http.post(API_URL + categoriaABuscar, categoria);
  }
}
