import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_URL = 'http://localhost:3000/api/';

@Injectable()
export class VistaSolicitudService {
  solicitud: any;
  url: String = 'vista_solicitud/';
 
  constructor(public http: HttpClient) { }
 
  getSolicitud(){
    return this.http.get(API_URL+this.url);
  }
 

}
