import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { TipoComentarioService } from '../../../../provider/tipo-comentario/tipo-comentario.service';
import { TipoRepuestaComentarioService } from '../../../../provider/tipo-repuesta-comentario/tipo-repuesta-comentario.service';
import { ReporteComentarioService } from '../../../../provider/reporte-comentario/reporte-comentario.service';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import * as jsPDF from 'jspdf';
import * as $ from 'jquery';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-reporte-comentarios',
  templateUrl: './reporte-comentarios.component.html',
  styleUrls: ['./reporte-comentarios.component.scss']
})
export class ReporteComentariosComponent implements OnInit {
  datosMostrar: {
    id_repuesta_comentario: number,
    tipo_comentario: string,
    nombre: string,
    descripcion: string;
    fecha_creacion: Date;
    respuesta_comentario: {
      id: number
      id_tipo_respuesta_comentario: number
      id_comentario: number
      descripcion: string
      tipo_respuesta_comentario: string
    };
  };
  fechaini: Date;
  fechafin: Date;
  valortipo: string;
  valortipodos: string;
  tipocomentario: string;
  caena: string;
  valoruno: string;
  valoros: string;
  valortres: string;
  valorcuatro: string;
  valorcinco: string;
  tipo: any;
  tipoR: any;
  reporteCom: any ;

filtroTipoComSelec = 'todos';
filtroTipoRespSelec = 'todos';
filtroTipoCom = [
  {value: 'opinion', viewValue: 'Opiniones'},
  {value: 'queja', viewValue: 'Quejas'},
  {value: 'sugerencia', viewValue: 'Sugerencias'},
  {value: 'dudas', viewValue: 'Dudas'},
  {value: 'todos', viewValue: 'Todos'},
];
filtroTipoResp = [
  {value: 'positiva', viewValue: 'Positiva'},
  {value: 'negativa', viewValue: 'Negativa'},
  {value: 'sin', viewValue: 'Sin responder'},
  {value: 'todos', viewValue: 'Todos'},
];

displayedColumns = ['cliente', 'fecha', 'tipo', 'descripcion', 'tipoR', 'resp'];
dataSource: any;

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}
// tslint:disable-next-line:member-ordering
@ViewChild(MatSort) sort: MatSort;

/**
 * Set the sort after the view init since this component will
 * be able to query its view for the initialized sort.
 */
// tslint:disable-next-line:use-life-cycle-interface
ngAfterViewInit() {
  this.dataSource.sort = this.sort;
}

  constructor(public dialog: MatDialog,
    public tiopoC: TipoComentarioService,
    public tipoRespC: TipoRepuestaComentarioService,
    public reporteC: ReporteComentarioService) {
    this.gettipocomentario();
    this.gettipoRepuestaC();
    this.caena = '';
    this.getReporteC();
    this.datosMostrar = {
      id_repuesta_comentario: 0,
      tipo_comentario: '',
      nombre: '',
      descripcion: '' ,
      fecha_creacion: new Date(),
      respuesta_comentario: {
        id: 0,
        id_tipo_respuesta_comentario: 0,
        id_comentario: 0,
        descripcion: '',
        tipo_respuesta_comentario: '',
      },
    };
    this.caena = '';
    this.fechaini = new Date ()
    this.fechafin = new Date ()
      this.valortipo = '';
    this.valortipodos = '';
    this.tipocomentario = '';
    this.valoruno = 'tipo_comentario=';
    this.valoros = '&respuesta_comentario=';
    this.valortres = '&tipo_respuesta_comentario=';
    this.valorcuatro = '&fecha_inicio=';
    this.valorcinco = '&fecha_fin=';
  }

  private newMethod() {
    return this;
  }

  ngOnInit() {
    this.gettipocomentario();
    this.gettipoRepuestaC();
    this.getReporteC();
    // le mandamos los datos a la tabla

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
 this.caena = this.valoruno + this.valortipo + this.valoros + this.valortipodos + this.valortres + this.valorcuatro + inicio + this.valorcinco + fin;
this.getReporteC();
}
gettipocomentario() {
  this.tiopoC.getTipoComentario().subscribe((resp) => {
    this.tipo = resp['data'];
    console.log(this.tipo);
  }, (error) => {
    console.log(error);
  });
}

gettipoRepuestaC() {
  this.tipoRespC.getTipoRepuestaC().subscribe((resp) => {
    this.tipoR = resp['data'];
    console.log(this.tipoR);

  }, (error) => {
    console.log(error);
  }
 );
}

getPDF(){
  html2canvas(document.querySelector("#content")).then(canvas => {
    
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img, 'JPEG', 10, 10);
      doc.save('Reporte-Atención-Cliente.pdf');
    
  });
}
getReporteC() {

  this.reporteC.getReporteC(this.caena).subscribe((resp) => {
    this.reporteCom = resp['data'];
    console.log(this.reporteCom);
    this.dataSource = new MatTableDataSource(this.reporteCom);
    }, (error) => {
    console.log(error);
    });
  }
// tslint:disable-next-line:eofline
}