import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://localhost:3000/api/';

@Injectable()
export class PromocionesService {
url_listado_promociones = 'promocion/';

  constructor(public http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };


getPromociones() {

  return this.http.get(API_URL + this.url_listado_promociones);
}

getPromocionEspec(id) {

  return this.http.get(API_URL + this.url_listado_promociones + id);
}

addPromociones(promocion) {

  return this.http.post(API_URL + this.url_listado_promociones, promocion );
}


putPromocion(promoId, promo) {
  return this.http.put(API_URL + this.url_listado_promociones + '/' + promoId, promo);
}

getReportePromocion() {
  return this.http.get(API_URL + 'reporte_promocion');
}
}
