import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class ReporteClienteService {
  reporteC:any
  url_reporteC: String = 'reporte_cliente?';
    
  url:string='vista_reclamos_realizados';
  constructor(public http: HttpClient) { }
  
  getReporteC(url) {
    console.log(url);
    return this.http.get(API_URL + this.url_reporteC + url);
   }
  
  
}
