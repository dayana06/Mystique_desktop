import { CategoriasServicioService } from './../../../../provider/categorias-servicio/categorias-servicio.service';
import { CategoriaService } from './../../../../provider/categoria/categoria.service';
import { error } from 'util';
import { TiposServiciosService } from './../../../../provider/tipos-servicios/tipos-servicios.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ReporteServicioService } from '../../../../provider/reporte-servicio/reporte-servicio.service';
import * as jsPDF from 'jspdf';
import * as $ from 'jquery';
import * as html2canvas from 'html2canvas';


@Component({
  selector: 'app-reporte-servicio',
  templateUrl: './reporte-servicio.component.html',
  styleUrls: ['./reporte-servicio.component.scss']
})
export class ReporteServicioComponent implements OnInit {
  filtroServCatSelec = 0;
  filtroServTipoPSelec = 'todos';
  filtroServTipoMSelec = 'todos';
  filtroServTipoTodosSelec = 'todos';
  filtroServCat: any;
  filtroServTipoP: Array<{
    id: number
    id_categoria_servicio: number
    nombre: string
    descripcion: string
    estatus: string
    fecha_creacion: string
  }>;
  filtroServTipoM: Array<{}>;
  filtroTipo: any;
  tipoServicios: any;
  reporteServ: Array<{
    id: number
    nombre: string
    imagen: string
    precio: number
    descripcion: string
    id_tipo_servicio: number
    fecha_cracion: Date
    estatus: string
    tipo_servicio: string 
    id_categoria_servicio: number
    categoria_servicio: string
    frecuencia_realizacion: number
    frecuencia_reclamo: number
    frecuencia_incidencia: number
  }> ;
  reporteServR: any
  /*reporteServR: Array<{
    id: number
    nombre: string
    frecuencia_realizacion: number
    frecuencia_reclamo: number
    frecuencia_incidencia: number
  }> ;*/
  valoruno: string;
  valoros: string;
  valortres: string;
  valorcuatro: string;
  caena: string;
  caena2: string;
  fechaini: Date;
  fechafin: Date;
  valortipo: string;
  valortipodos: string;
  id_ser: string;
  tipoSelect: string;
  dateInic: Date;
  dateFin: Date;
  fecha: boolean;


  filtroServTipoTodos = [
    {value: 'dia', viewValue: 'Maquillaje de día'},
    {value: 'noche', viewValue: 'Maquillaje de noche'},
    {value: 'corte', viewValue: 'Corte de Cabello'},
    {value: 'secado', viewValue: 'Secado de Cabello'},
    {value: 'tinte', viewValue: 'Tinte'},
    {value: 'todos', viewValue: 'Todos'},
  ];

  displayedColumns = ['servicio', 'tipo', 'categoria', 'cantidad', 'rec', 'inc'];
  dataSource: any;

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
 
getPDF(){
  html2canvas(document.querySelector("#content")).then(canvas => {
    
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img, 'JPEG', 10, 10);
      doc.save('Reporte-Servicios.pdf');
    
  });
}

  constructor(
    public categoria: CategoriasServicioService,
    public tipoServ: TiposServiciosService,
    public reporteS :ReporteServicioService
  ) {
    this.reporteServ = []
    //this.reporteServR = []
    //this.getReporteSer('', '')
    this.valoruno = 'tipo_servicio=';
    this.valoros = '&categoria_servicio=';
    this.valortres = '&fecha_inicio=';
    this.valorcuatro = '&fecha_fin=';
    this.id_ser = '';

    this.caena = '';
    this.caena2 = '';
    this.fechaini = new Date ()
    this.fechafin = new Date ()
    this.valortipo = '';
    this.valortipodos = '';
    this.filtroServTipoP = []
   }

  ngOnInit() {
    this.getCategorias()
    this.getTipoServ()
    this.getReporteSer('', '')
    this.getFiltroTipo()
  }

  getTipoServ(){
    this.tipoServ.getTipoServicio().subscribe(
      (data) => {
        this.tipoServicios = data['data']
        this.filtroServTipoP = [] 
       for(let i=0; i<this.tipoServicios.length; i++){
          if(this.tipoServicios[i].id_categoria_servicio === this.tipoSelect){
            this.filtroServTipoP.push(this.tipoServicios[i])
            console.log(this.filtroServTipoP)
          }
        }      
      }, (error) => {
        console.log(error)
      } ) 
  }

  getFiltroTipo(){
    if(this.filtroServCatSelec === 1){
      this.filtroTipo = this.filtroServTipoP
      console.log(this.filtroTipo)
    }else{
      this.filtroTipo = this.filtroServTipoM
      console.log(this.filtroTipo)
    }
  }

  crearUrl2(){
    this.getTipoServ()
    this.crearUrl()
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

 console.log(inicio, fin, this.valoros , this.fechaini.toISOString());
 // tslint:disable-next-line:max-line-length
 this.caena = this.valoruno + this.valortipo + this.valoros + this.valortipodos + this.valortres + inicio + this.valorcuatro + fin;
 //this.caena2 = + inicio + fin;
this.getReporteSer(inicio, fin)
}

validateDate(){
  if(this.dateFin<this.dateInic){
    this.fecha = true
  }else{
    this.fecha = false
  }
  console.log(this.fecha)
}



  getCategorias(){
    this.categoria.getCategorias().subscribe(
    (data) => {
      this.filtroServCat = data ['data']
      console.log(this.filtroServCat)
    }, (error) => {
      console.log(error)
    }

    )
  }

  getReporte2(i, id, inic, final){
    console.log(i)
    this.caena2 = id  + '?fecha_inicio='+ inic +this.valorcuatro + final;
    console.log(this.caena2)
    this.reporteS.getReporteSerR(this.caena2).subscribe(
      (resp) => {
      this.reporteServR = resp['data'];
      console.log(this.reporteServR);
      this.reporteServ[i].frecuencia_reclamo = this.reporteServR.frecuencia_reclamo
      this.reporteServ[i].frecuencia_incidencia = this.reporteServR.frecuencia_incidencia
      this.reporteServ[i].frecuencia_realizacion = this.reporteServR.frecuencia_realizacion
      console.log(this.reporteServ[i])
      }, (error) => {
      console.log(error);
      });
  }

getReporteSer(inic, final) {

  this.reporteS.getReporteSer(this.caena).subscribe((resp) => {
    this.reporteServ = resp['data'];
    console.log('reporte sin')
    console.log(this.reporteServ);
    for(let i=0; i<this.reporteServ.length; i++){
      console.log('reporte con')
      this.getReporte2(i, this.reporteServ[i].id, inic,final)
    }
    this.dataSource = new MatTableDataSource(this.reporteServ);
    
    }, (error) => {
    console.log(error);
    });
  }}
  export interface Element {
  servicio: string;
  tipo: string;
  categoria: string;
  cantidad: number;
  rec: number;
  inc: number;
}

/*const ELEMENT_DATA: Element[] = [
  {servicio: 'Corte Bob', tipo: "Corte", categoria: "Peluquería", cantidad: 20, rec: 3, inc: 1, calif: 5 },
  {servicio: 'Maquillaje de día con técnica Strobing', tipo: "Maquillaje de día", categoria: "Maquillaje", cantidad: 15, rec: 3, inc: 1, calif: 5},
  {servicio: 'Alisado con Queratina', tipo: "alisado", categoria: "Peluquería", cantidad: 10, rec: 3, inc: 1, calif: 5},
];*/
