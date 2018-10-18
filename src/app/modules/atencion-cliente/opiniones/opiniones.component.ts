import { Component, OnInit } from '@angular/core';

interface Datos_reclamo{
	nombre: string;
	orden: string;
	fecha: string;
	tipoR: string;
	descripcion: string;
	servicios: servicio[];
	fechaV:string;

}
interface servicio{
  nombre: string;
  descripcion: string;
}
@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.scss']
})
export class OpinionesComponent implements OnInit {

  datos: Datos_reclamo[]= [
    {
      nombre: 'Maria Anzola',
      orden: '001',
      fecha: '10 abril 2018',
      tipoR: 'producto',
      descripcion:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni architecto necessitatibus exercitationem, quae nam nisi impedit perferendis asperiores recusandae commodi dignissimos, nemo tempora explicabo modi maxime amet, veritatis et autem!',
      servicios: [
      {	nombre:'Tratamiento Keratina',
        descripcion:'wuachu wuachu'
       }
                    
    ],
    fechaV: '20 abril 2018'
    },

    {
        nombre: 'Yanior Zambrano',
        orden: '002',
        fecha: '11 abril 2018',
        tipoR: 'servicio',
        descripcion:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni architecto necessitatibus exercitationem, quae nam nisi impedit perferendis asperiores recusandae commodi dignissimos, nemo tempora explicabo modi maxime amet, veritatis et autem!',
        servicios: [
          {	nombre:'Corte de Cabello',
            descripcion:'Debe fijarse de su corte antes de salir de la peluqueria'
          }                    
        ],
        fechaV: '20 abril 2018'
    }


 ];
 
  constructor() { }

  ngOnInit() {
  }

}
