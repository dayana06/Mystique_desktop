import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/'


@Injectable()
export class ParametroService {

  url_param = 'parametro';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) { }


  getParametros() {
    return this.http.get(API_URL + this.url_param);
  }


  postParametros(parametro) {
    return this.http.post(API_URL + this.url_param, parametro)
  }

  putParametros(id, parametro) {
    return this.http.put(API_URL + this.url_param + '/' + id, parametro)
  }
}
