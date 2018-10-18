import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
@Component({
  selector: 'app-historico-reclamo',
  templateUrl: './historico-reclamo.component.html',
  styleUrls: ['./historico-reclamo.component.scss']
})
export class HistoricoReclamoComponent implements OnInit {
  displayedColumns = ['tipo', 'descripcion','servicio'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
  tipo: string;
  descripcion: string;
  servicio: string;
  
}

const ELEMENT_DATA: Element[] = [
  {tipo: "Productos de mala calidad", descripcion: "Irritacion  en el cuero cabelludo", servicio: "Peluqueria"},
  {tipo: "Productos vencidos", descripcion: "Lesión en la piel a causa de la aplicaciones de los productos", servicio:"Maquillaje"},
  
];

