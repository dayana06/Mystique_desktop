import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-reporte-reclamos',
  templateUrl: './reporte-reclamos.component.html',
  styleUrls: ['./reporte-reclamos.component.scss']
})
export class ReporteReclamosComponent implements OnInit {
  filtroTipoRecSelec = 'todos';
  filtroTipoRespSelec = 'todos';
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
  
  displayedColumns = ['cliente', 'fecha', 'orden', 'tipo', 'descripcion', 'tipoR', 'resp'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
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
    constructor() { }
  
    ngOnInit() {
    }
  
  }
  
  export interface Element {
    cliente: string;
    fecha: string;
    orden: string;
    tipo: string;
    descripcion: string;
    tipoR: string;
    resp: string;
  }
  
  const ELEMENT_DATA: Element[] = [
    {cliente: 'Pepito López', fecha: '05/03/2018', orden: '#123-4', tipo: 'A', descripcion: "lorem", tipoR: "Negativa", resp: "lorem"},
    {cliente: 'Pepito López', fecha: '05/03/2018', orden: '#123-4', tipo: 'B', descripcion: "lorem", tipoR: "Positiva", resp: "lorem"},
    {cliente: 'Pepito López', fecha: '05/03/2018', orden: '#123-4', tipo: 'C', descripcion: "lorem", tipoR: "Positiva", resp: "lorem"},
  ];
  