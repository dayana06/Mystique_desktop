import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/'


@Injectable()
export class ValorParametroService {

  url_valorP = 'valor_parametro';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) { }


  getValorParametros() {
    return this.http.get(API_URL + this.url_valorP);
  }

  postValorParametros(valorParametro) {
    return this.http.post(API_URL + this.url_valorP, valorParametro);
  }
}
