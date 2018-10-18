import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';

@Injectable()
export class ConsejosService {
  url_listado_consejos = 'consejo';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(public http: HttpClient) { }

  getConsejo() {
    return this.http.get(API_URL + this.url_listado_consejos);
  }
  setConsejo(consejo) {
    return this.http.post(API_URL + this.url_listado_consejos, consejo);
  }

  putConsejo(idConsejo, consejo) {
    return this.http.put(API_URL + this.url_listado_consejos + "/" + idConsejo, consejo);
  }
}
