import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class RespuestaSolicitudService {
  url: String = 'respuesta_solicitud/';

  constructor(public http: HttpClient) { }
  registrarRespSolic(respuesta){
    return this.http.post(API_URL+this.url, respuesta);
  }

}
