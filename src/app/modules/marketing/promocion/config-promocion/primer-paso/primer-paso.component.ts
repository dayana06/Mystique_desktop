import { Component, OnInit } from '@angular/core';
import {CategoriasServicioService} from '../../../../../provider/categorias-servicio/categorias-servicio.service';
import { PromocionesService } from '../../../../../provider/promocion/promociones.service';
import { ServiciosService } from '../../../../../provider/servicios/servicios.service';

@Component({
  selector: 'app-primer-paso',
  templateUrl: './primer-paso.component.html',
  styleUrls: ['./primer-paso.component.scss']
})
export class PrimerPasoComponent implements OnInit {
  msj: string;
  valor = 'peluq';
  servPSelec = 'corte';
  servMSelec = 'maqDia';
  filtro = [
    {value: 'peluq', viewValue: 'Peluquería'},
    {value: 'maq', viewValue: 'Maquillaje'},
  ];
//Promocion
promocion: {
id_servicio: number;
nombre: String;
descripcion: String;
porcentaje_descuento: number;
precio_promocion: String;
imagen: string;
fecha_inicio: Date;
fecha_fin: Date;
estatus: String;
//fecha_creacion: Date;
};
  servP = [
    {value: 'corte', viewValue: 'Corte de cabello'},
    {value: 'secado', viewValue: 'Secado'},
    {value: 'planchado', viewValue: 'Planchado'},
    {value: 'tinte', viewValue: 'Mechas'},
  ];

  servM = [
    {value: 'maqDia', viewValue: 'Maquillaje de Día'},
    {value: 'maqNoche', viewValue: 'Maquillaje de Noche'},
    {value: 'contorno', viewValue: 'Maquillaje de contorno'}, ];

  pro: any;
  servicio: any;

  constructor(public categoria_servicio: CategoriasServicioService , public promo: PromocionesService,
    public servici: ServiciosService ) {
    this.getPromociones();
    this.promocion = {
      id_servicio: 0,
      nombre: '',
      descripcion: '',
      porcentaje_descuento: 0,
      precio_promocion: '',
      imagen:  '',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      estatus: '',
      //fecha_creacion: new Date()
      };

   }

  ngOnInit() {
     this.getServicios();
     this.getPromociones();

  }

  getPromociones() {
    this.categoria_servicio.getCategorias().subscribe((resp) => {
      this.pro = resp['data'];
      console.log(this.pro);
    }, (error) => {
        console.log(error);
      });
    }
     
       
     addPromocion() {
      console.log(this.promocion);
      this.promocion.estatus = 'A';
      this.promo.addPromociones(this.promocion).subscribe((resp) => {
        this.msj = resp['data'].message;
        console.log(this.msj);
        alert(this.msj);
      }, (error) => {
          console.log(error);
        });

     }

     getServicios() {
      this.servici.getServicios().subscribe((resp) => {
        this.servicio = resp['data'];
        console.log(this.servicio);
      }, (error) => {
          console.log(error);
        });
      }
       
   
}
