import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';

@Injectable()
export class VistaAgendasService {
  url: String = 'vista_agendas/';
 
  constructor(public http: HttpClient) { }
 
  getSolicitud(){
    return this.http.get(API_URL+this.url);
  }

}
