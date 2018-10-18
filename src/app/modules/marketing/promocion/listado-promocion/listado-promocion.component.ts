import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import {PromocionesService } from  '../../../../provider/promocion/promociones.service';

interface Detalle {
  NombrePromo: string;
  servicio: string;
  descripcion: string;
  type: string;
  icon: boolean;
  iconName?: string;
  codigo: string;
  fechaInicio: string;
  fechaFin: String;
}

@Component({
  selector: 'app-listado-promocion',
  templateUrl: './listado-promocion.component.html',
  styleUrls: ['./listado-promocion.component.scss']
})
export class ListadoPromocionComponent implements OnInit {
  promociones: Array<{
     id: string,
     id_servicio: string,
     nombre: string,
     descripcion: string,
     porcentaje_descuento: number,
     precio_promocion: number,
     imagen: string,
     fecha_inicio: string,
     fecha_fin: string,
     fecha_creacion: string
     }>;
     pro: any;
 


  constructor(public promo_servicio: PromocionesService ) {
    this.getPromociones();
    console.log(this.promociones);
    }

  ngOnInit() {
    this.getPromociones();
  }


getPromociones() {
this.promo_servicio.getPromociones().subscribe((resp) => {
  this.pro = resp['data'];
  
  console.log(this.pro);
}, (error) => {
    console.log(error);
  });


}



}


