import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-estructurados',
  templateUrl: './estructurados.component.html',
  styleUrls: ['./estructurados.component.scss']
})
export class EstructuradosComponent implements OnInit {
  filtroSelec = 'servicio';
  
  filtro = [
    {value: 'servicio', viewValue: 'Servicios'},
    {value: 'solicitud', viewValue: 'Solicitudes'},
    {value: 'reclamos', viewValue: 'Reclamos'},
    {value: 'clientes', viewValue: 'Clientes'},
    {value: 'incidenciasO', viewValue: 'Incidencias Orden'},
    {value: 'incidenciasS', viewValue: 'Incidencias Servicios'},
    {value: 'comentarios', viewValue: 'Comentarios'},
  ];
  

  constructor() { }

  ngOnInit() {
  }

}

