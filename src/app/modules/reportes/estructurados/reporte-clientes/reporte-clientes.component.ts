import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { TipoComentarioService } from '../../../../provider/tipo-comentario/tipo-comentario.service';
import { TipoRepuestaComentarioService } from '../../../../provider/tipo-repuesta-comentario/tipo-repuesta-comentario.service';
import { ReporteComentarioService } from '../../../../provider/reporte-comentario/reporte-comentario.service';
import { ReporteClienteService } from '../../../../provider/reporte-cliente/reporte-cliente.service';
import * as jsPDF from 'jspdf';
import * as $ from 'jquery';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-reporte-clientes',
  templateUrl: './reporte-clientes.component.html',
  styleUrls: ['./reporte-clientes.component.scss']
})
export class ReporteClientesComponent implements OnInit {
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

  valortipo: string;            //tipo cliente
  valortipodos: string;         //sexo
  valorttres: string;       //rgo  
  fechaini: Date;
  fechafin: Date;

  caena: string;
  
  //datos
  valoruno: string;
  valoros: string;
  valortres: string;
  valorcuatro: string;
  valorcinco: string;

  tipo: any;
  tipoR: any;
  reporteCom: any ;

  //pdf
  doc: jsPDF;
  columns: string[];
  data: Array<{
    nombre: string
    cedula: string
    telefono: string
    direccion: string
    ciudad: string
    tipo_cliente: string
  }>;

filtroTipoComSelec = 'todos';
filtroTipoRespSelec = 'todos';
filtroSexo = [
  {value: '13', viewValue: 'Hombre'},
  {value: '14', viewValue: 'Mujer'},
];
filtroRgoEdad = [
  {value: '16', viewValue: 'Adulto Joven'},
  {value: '17', viewValue: 'Adulto'},
  {value: '18', viewValue: 'Adulto mayor'},
];

filtroTipoC = [
  {value: 'P', viewValue: 'Cliente potencial'},
  {value: 'C', viewValue: 'Cliente consolidado'},
];

displayedColumns = ['cliente', 'ced', 'tlf', 'dir', 'ciudad', 'tipo', 'sexo', 'rgo'];
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
    public reporteC: ReporteClienteService,
    
  ) {
    this.data =[]
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
    this.valorttres = '';
    this.valoruno = 'tipo_cliente=';
    this.valoros = '&sexo=';
    this.valortres = '&rango_edad=';
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
getPDF(){
  html2canvas(document.querySelector("#content")).then(canvas => {
    
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img, 'JPEG', 10, 10);
      doc.save('Reporte-Clientes.pdf');
    
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
      
 console.log(inicio, fin, this.valoros , this.fechaini.toISOString());
 // tslint:disable-next-line:max-line-length
 this.caena = this.valoruno + this.valortipo + this.valoros + this.valortipodos + this.valortres + this.valorttres + this.valorcuatro + inicio + this.valorcinco + fin;
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

getReporteC() {

  this.reporteC.getReporteC(this.caena).subscribe((resp) => {
    this.reporteCom = resp['data'];
    
    this.dataSource = new MatTableDataSource(this.reporteCom);
    this.data = this.reporteCom
    console.log(this.data)
    }, (error) => {
    console.log(error);
    });
  }
// tslint:disable-next-line:eofline
}
