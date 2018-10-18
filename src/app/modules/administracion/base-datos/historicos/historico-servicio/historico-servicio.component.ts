import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { ServiciosService } from '../../../../../provider/servicios/servicios.service';
@Component({
  selector: 'app-historico-servicio',
  templateUrl: './historico-servicio.component.html',
  styleUrls: ['./historico-servicio.component.scss']
})
export class HistoricoServicioComponent implements OnInit {
  displayedColumns = ['servicio', 'descripcion', 'duracion','precio'];
  dataSource:any;/* = new MatTableDataSource(ELEMENT_DATA);*/
  serviciosinactivos:Array<{nombre:string,descripcion:string,duracion:number,precio:number}>=[];
  
  constructor(public servicio_servicio: ServiciosService) { }

  ngOnInit() {
    this.dataSource=null;
    this.serviciosinactivos=[];
    this.cargarServiciosI();
  }

  cargarServiciosI(){
    this.servicio_servicio.getServicios().subscribe(data=>{
      this.serviciosinactivos=data['data'].filter((el, i, arr)=>(el.estatus == "I"));
      this.dataSource= new MatTableDataSource(this.serviciosinactivos);
    },error=>{console.log(error);});
  }

}
export interface Element {
  servicio: string;
  tipo: string;
  cantidad: number;
  precio:number;
}