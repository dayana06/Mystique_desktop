import { Component, OnInit } from '@angular/core';
import { AuditoriaService } from '../../../../provider/auditoria/auditoria.service';
import { MatTableDataSource } from '@angular/material';
import { getLocaleDateFormat } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localees from '@angular/common/locales/es-VE';

registerLocaleData(localees);

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.scss']
})
export class AuditoriaComponent implements OnInit {

  displayedColumns = ['tabla', 'usuario', 'operacion', 'valor_anterior', 'valor_actual','fecha'];
  dataSource : any;
  auditoria_datos:Array<{nombre_tabla:string,usuario:string,operacion:string,valor_viejo:string,valor_nuevo:string,fecha_creacion:Date,estatus:string}>=[]

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(public servicio_auditoria:AuditoriaService) { }

  ngOnInit() {
    this.dataSource=null;
    this.auditoria_datos=[];
    this.cargarDatosAuditoria();
  }
  
  cargarDatosAuditoria(){
    this.servicio_auditoria.getAuditoria().subscribe(data=>{
      this.auditoria_datos=data['data'];
      this.dataSource= new MatTableDataSource(this.auditoria_datos);
    },error=>{console.log(error);});
  }


}