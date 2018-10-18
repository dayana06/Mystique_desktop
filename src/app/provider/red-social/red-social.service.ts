import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"
@Injectable()
export class RedSocialService {
  redS: any;
  url_redS: String = 'red_social/';
  constructor(public http: HttpClient) { }
  getRedS(){
    return this.http.get(API_URL+this.url_redS);
  }
  updateRedS(id, datos){
    return this.http.put(API_URL+this.url_redS+id, datos);
  }

}
