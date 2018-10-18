import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/'

@Injectable()
export class ImagenService {
  url = 'imagen';

  constructor(public http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  getImagen() {
    return this.http.get(API_URL + this.url);
  }

  putImagen(imagenId, imagen) {
    return this.http.put(API_URL + this.url + '/' + imagenId, imagen);
  }

  postImagen(imagen) {
    return this.http.post(API_URL + this.url, imagen);
  }


}
