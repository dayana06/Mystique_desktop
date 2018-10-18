import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/'

@Injectable()
export class TituloSeccionService {
  url = 'titulo_seccion';

  constructor(public http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  getTituloSeccion() {
    return this.http.get(API_URL + this.url);
  }

  putTituloSeccion(tituloId, tituloSeccion) {
    return this.http.put(API_URL + this.url + '/' + tituloId, tituloSeccion);
  }

  postTituloSeccion(tituloSeccion){
    return this.http.post(API_URL+this.url, tituloSeccion);
  }

}
