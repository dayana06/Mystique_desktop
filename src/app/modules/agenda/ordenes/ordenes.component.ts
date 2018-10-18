import { Component, OnInit } from '@angular/core';
interface Detalle{
  clientName: string;
  servicios: string;
  empleado: string;
  type: string;
  icon: boolean;
  iconName?: string;
  codigo: string;
  fecha?: string;
  
}

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss']
})
export class OrdenesComponent implements OnInit {
  empleadosSeleccionados = [];
  empleados = ['Qohollo', 'Irri Handmaiden', 'Thoros', 'Maester'];
  detalles: Detalle []= [
    {
      clientName: "Dany Targaryen",
      servicios: "Marcados, Recogidos",
      empleado: "Petra Pérez",
      type: 'solicitud',
      icon: true,
      iconName: 'av_timer',
      codigo: '#94900-2457'     
    },
    {
      clientName: "Varys the spyder",
      servicios: "Baño de color, peinado con tenacillas",
      empleado: "Irri Handmaiden",
      type: 'solicitud',
      icon: true,
      iconName: 'av_timer',
      codigo: '    #16445-6560',
    },
    {
      clientName: "Varys the spyder",
      servicios: "Baño de color, peinado con tenacillas",
      empleado: "Irri Handmaiden",
      type: 'solicitud',
      icon: true,
      iconName: 'av_timer',
      codigo: '    #16445-6560',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
