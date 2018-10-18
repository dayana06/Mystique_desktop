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
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.scss']
})
export class ReclamosComponent implements OnInit {


  datos: Datos_reclamo[]= [
     {
     	nombre: 'Maria Anzola',
	orden: '001',
	fecha: '10 abril 2018',
	tipoR: 'producto',
	descripcion:'El producto que se utilizo cuando me aplicaron tratamiento de keratina, me causó alergia, pido pronta atencion y me regresen mi dinero.',
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
	descripcion:' Me hicieron mal el corte, me di cuenta al irme de la peluqueria',
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
