import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL='http://localhost:3000/api/'


@Injectable()
export class TipoParametroService {

  url_tipoP='tipo_parametro';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http:HttpClient) {}


getTipoParametros(){
  return this.http.get(API_URL+this.url_tipoP);
}

  postTipoParametros(tipoParametro) {

    return this.http.post(API_URL + 'agregar_tipo_parametro', tipoParametro);

  }
}
