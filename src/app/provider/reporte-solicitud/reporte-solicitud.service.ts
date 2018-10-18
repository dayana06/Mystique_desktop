import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class ReporteSolicitudService {
  reporteC:any
  url_reporteSol: String = 'reporte_solicitud?';
    
  url:string='vista_reclamos_realizados';
  constructor(public http: HttpClient) { }
  
  getReporteC(url) {
    console.log(url);
    return this.http.get(API_URL + this.url_reporteSol + url);
   }
   /*
   getReporteC() {
    
    return this.http.get(API_URL + this.url_reporteSol);
   }*/
}
