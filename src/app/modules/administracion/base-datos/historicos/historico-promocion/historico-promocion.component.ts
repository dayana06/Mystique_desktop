import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { PromocionesService } from '../../../../../provider/promocion/promociones.service';

@Component({
  selector: 'app-historico-promocion',
  templateUrl: './historico-promocion.component.html',
  styleUrls: ['./historico-promocion.component.scss']
})
export class HistoricoPromocionComponent implements OnInit {
  displayedColumns = ['nombre','descripcion', 'descuento'];
  dataSource:any;/* = new MatTableDataSource(ELEMENT_DATA);*/
  promocionesinactivas:Array<{nombre:string,descripcion:string,porcentaje_descuento:string}>=[];
 
  constructor(public servicio_promocion: PromocionesService) { }

  ngOnInit() {
    this.dataSource=null;
    this.promocionesinactivas=[];
    this.cargarPromocionesI();
  }

  cargarPromocionesI(){
    this.servicio_promocion.getPromociones().subscribe(data=>{
      let promos=data['data'].filter((el, i, arr)=>(el.estatus == "I"));
      promos.forEach(pro => {
        this.promocionesinactivas.push({nombre:pro.nombre,descripcion:pro.descripcion,
                                        porcentaje_descuento:pro.porcentaje_descuento+"%"});
      });
      this.dataSource= new MatTableDataSource(this.promocionesinactivas);
    },error=>{console.log(error);});
  }

}
export interface Element {
  nombre: string;
  descripcion: string;
  descuento: string;
  
}

