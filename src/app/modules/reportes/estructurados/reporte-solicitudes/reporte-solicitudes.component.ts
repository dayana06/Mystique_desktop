import { ReporteSolicitudService } from './../../../../provider/reporte-solicitud/reporte-solicitud.service';
import { VistaServicioCategoriaService } from './../../../../provider/vista-servicio-categoria/vista-servicio-categoria.service';
import { TipoRespPresupuestoService } from './../../../../provider/tipo-resp-presupuesto/tipo-resp-presupuesto.service';
import { TipoRespSolicitudService } from './../../../../provider/tipo-resp-solicitud/tipo-resp-solicitud.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ServiciosService } from '../../../../provider/servicios/servicios.service';
import * as jsPDF from 'jspdf';
import * as $ from 'jquery';
import * as html2canvas from 'html2canvas';


@Component({
  selector: 'app-reporte-solicitudes',
  templateUrl: './reporte-solicitudes.component.html',
  styleUrls: ['./reporte-solicitudes.component.scss']
})
export class ReporteSolicitudesComponent implements OnInit {
  TipoRespPresupSelec = '';
  TipoRespSolicSelec = '';
  filtroTipoRec = [
    {value: 'a', viewValue: 'A'},
    {value: 'b', viewValue: 'B'},
    {value: 'todos', viewValue: 'Todos'},
  ];
  filtroTipoResp = [
    {value: 'positiva', viewValue: 'Positiva'},
    {value: 'negativa', viewValue: 'Negativa'},
    {value: 'sin', viewValue: 'Sin responder'},
    {value: 'todos', viewValue: 'Todos'},
  ];
  
  empleadosSeleccionados = [];
  clientesSeleccionados = [];
  empleados = ['Qohollo', 'Irri Handmaiden', 'Thoros', 'Maester'];
  servicioSeleccionados = [];
  displayedColumns = ['cliente', 'fecha', 'servicio',  'empleado', 'tipoRS', 'respS', 'tipoRP', 'respP'];
  respSolic: any;
  respPresup: any;
  filtroServicio: any;
  dataSource: any;
  dateInic: Date;
  dateFin: Date;
  fecha: boolean;
  report: any

  //para filtrar
  fechaini: Date;
  fechafin: Date;
  
  fechainiAux: Date;
  fechafinAux: Date;
  idServ: string;     //servicio
  tipoReS: string;    //solicitud
  tipoReP: string;        //presupuesto
  cadena: string;         //para la url
  vTipoReS: string;
  vTipoReP: string;
  vIdServ: string;
  vFechaIni: string;
  vFechaFin: string;
  serv: any
  

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  @ViewChild(MatSort) sort: MatSort;
  
  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
    constructor(
      public tipoRespSolic: TipoRespSolicitudService,
      public TipoRespPresup: TipoRespPresupuestoService,
      public servicios: VistaServicioCategoriaService,
      public repSol: ReporteSolicitudService,
      
    ) { 
      this.cadena = '';
      this.fechaini = new Date ()
      this.fechafin = new Date ()
      this.tipoReS = '';
      this.tipoReP = '';
      this.idServ = '';
      this.vTipoReS = 'tipo_respuesta_solicitud=';
      this.vTipoReP = '&tipo_respuesta_presupuesto=';
      this.vIdServ = '&servicio=';
      this.vFechaIni = '&fecha_inicio=';
      this.vFechaFin = '&fecha_fin=';
  
    }
  
    ngOnInit() {
      this.getRespSolic()
      this.getRespPresup()
      this.getServicios();
      this.getReporteSol()
    }
    
getPDF(){
  html2canvas(document.querySelector("#content")).then(canvas => {
    
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img, 'JPEG', 10, 10);
      doc.save('Reporte-Solicitudes.pdf');
    
  });
}

    crearUrl() {
      // tslint:disable-next-line:max-line-length
      
      
      let inicio = '';
      let fin = '';
      let dia = ''
      let mes = ''
      if (this.fechaini != null) {
          if(this.fechaini.getDate() <10){
            dia = '0'+this.fechaini.getDate()
          }else{
            dia = ''+this.fechaini.getDate()
          }
          if(this.fechaini.getMonth() < 9){
            mes = '0'+(this.fechaini.getMonth()+1)
            console.log('menlr')
          }else if(this.fechaini.getMonth() === 9){
            mes = '0'+this.fechaini.getMonth()
            console.log('igual')
          }else{
            mes = ''+(this.fechaini.getMonth()+1)
            console.log('mayor')
          }
          if(this.fechaini.getMonth() < 9){
            inicio = this.fechaini.getFullYear() + '-0'+ (this.fechaini.getMonth()+1) + '-' + dia       
          }else{
            inicio = this.fechaini.getFullYear() + '-'+ (this.fechaini.getMonth()+1) + '-' + dia       
          }        
       console.log(inicio)
      } else {
       inicio = '';
      }
      if (this.fechafin != null) {

        if(this.fechafin.getDate() <10){
          dia = '0'+this.fechafin.getDate()
        }else{
          dia = ''+this.fechafin.getDate()
        }
        if(this.fechafin.getMonth() < 9){
          mes = '0'+(this.fechafin.getMonth()+1)
          console.log('menlr')
        }else if(this.fechafin.getMonth() === 9){
          mes = '0'+this.fechafin.getMonth()
          console.log('igual')
        }else{
          mes = ''+(this.fechafin.getMonth()+1)
          console.log('mayor')
        }
        if(this.fechafin.getMonth() < 9){
          fin = this.fechafin.getFullYear() + '-0'+ (this.fechafin.getMonth()+1) + '-' + dia       
        }else{
          fin = this.fechafin.getFullYear() + '-'+ (this.fechafin.getMonth()+1) + '-' + dia       
        }
      } else {
       fin  = '';
      }
      
      // tslint:disable-next-line:max-line-length
      
      this.cadena = this.vTipoReS + this.tipoReS + this.vTipoReP + this.tipoReP + this.vIdServ + this.idServ + this.vFechaIni + inicio + this.vFechaFin + fin;
     this.getReporteSol();
     }
     
  
    validateDate(){
      if(this.dateFin<this.dateInic){
        this.fecha = true
      }else{
        this.fecha = false
      }
      console.log(this.fecha)
    }
    getRespSolic(){
      this.tipoRespSolic.getTipoRespSolicitud().subscribe(
        (data) => {
          this.respSolic = data['data']
        }, (error) => {
          console.log(error)
        }
      )
    }

    getRespPresup(){
      this.TipoRespPresup.getTipoRespPresupuesto().subscribe(
        (data) => {
          this.respPresup = data['data']
        }, (error) => {
          console.log(error)
        }
      )
    }

    getServicios(){
      this.servicios.getServicios().subscribe(
        (data) => {
          this.filtroServicio = data['data']
       
        }, (error) => {
          console.log(error)
        }
      )
    }
    getReporteSol(){
      this.repSol.getReporteC(this.cadena).subscribe(
        (data) => {
          this.report = data ['data']
          this.dataSource = new MatTableDataSource(this.report);
        }, (error) => {
          console.log(error)
        }
      )
    }

  }
  
  export interface Element {
    cliente: string;
    fecha: string;
    servicio: string;
    empleado: string;
    tipoRS: string;
    respS: string;
    tipoRP: string;
    respP: string;
  }
  
  /*const ELEMENT_DATA: Element[] = [
    {cliente: 'Pepito López', fecha: '05/03/2018', servicio: 'Secado, planchado', empleado: "lorem", tipoRS: "Negativa", respS: "lorem", tipoRP: "Negativa", respP: "lorem"},
    {cliente: 'Pepito López', fecha: '05/03/2018', servicio: 'Secado, planchado, tinte', empleado: "lorem", tipoRS: "Positiva", respS: "lorem", tipoRP: "Negativa", respP: "lorem"},
    {cliente: 'Pepito López', fecha: '05/03/2018', servicio: 'Secado, planchado, Queratina', empleado: "lorem", tipoRS: "Positiva", respS: "lorem", tipoRP: "Negativa", respP: "lorem"},
  ];
  
*/