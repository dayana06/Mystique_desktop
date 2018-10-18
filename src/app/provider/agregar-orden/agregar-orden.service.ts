import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class AgregarOrdenService {
  url = 'agregar_orden/';
  constructor(public http: HttpClient) { }

   postOrden(datos) {
      return this.http.post(API_URL + this.url, datos );
  }


}
