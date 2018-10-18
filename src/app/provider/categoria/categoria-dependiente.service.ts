import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';
@Injectable()
export class CategoriaDependienteService {

  constructor(public http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content -type': `application/json`,
      'Authoryzacoion': `my-auth-token`
    })
  };

  getCategoriaDependiente(categoriaABuscar) {

    return this.http.get(API_URL + categoriaABuscar);

  }

  postCategoriaDependiente(categoriaABuscar, categoria) {
    return this.http.post(API_URL + categoriaABuscar, categoria);
  }
}
