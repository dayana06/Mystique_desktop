import { Component, OnInit } from '@angular/core';
import { ServicioSolicitadoService } from '../../../../provider/servicio-solicitado/servicio-solicitado.service';
import * as moment from 'moment';
import { EmpleadosService } from '../../../../provider/empleados/empleados.service';

@Component({
  selector: 'app-servicios-atendidos',
  templateUrl: './servicios-atendidos.component.html',
  styleUrls: ['./servicios-atendidos.component.scss'],
  providers: [ServicioSolicitadoService, EmpleadosService]
})
export class ServiciosAtendidosComponent implements OnInit {
  listadoServicioSolicitado = [] as any;
  listadoEmpleados = [] as any;
  EmpleadoABuscar = [];

  filtroSelec = 'mas';
  filtro = [
    {value: 'mas', viewValue: 'Servicios más solicitados'},
    {value: 'menos', viewValue: 'Servicios menos solicitados'},
  ];

  filtroMesSelec = 'semana';
  filtroMes = [
    { value: 'semana', viewValue: 'Esta semana' },
    { value: 'mes', viewValue: 'Último mes' },
    { value: 'trimes', viewValue: 'Último trimestre' },
    { value: 'seismes', viewValue: 'Último semestre' },
    { value: 'anno', viewValue: 'Último año' },
  ];

  datosMas = {
    type: 'horizontalBar',
    data: {
        labels: ["Secado", "Planchado", "Tinte", "Maquillaje de dia", "Lavado de cabello", "Corte de cabello"],
        datasets: [{
            label: 'Servicios más solicitados',
            data: [35, 30, 30, 18, 10, 5],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(254,58,239,1)',
                'rgba(254,58,239,1)',
                'rgba(254,58,239,1)',
                'rgba(254,58,239,1)',
                'rgba(254,58,239,1)',
                'rgba(254,58,239,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      elements: {
        line: {
            tension: 0, // disables bezier curves
        }
    }
    }
  };
  datosMenos = {
    type: 'horizontalBar',
    data: {
        labels: ["Secado", "Planchado", "Tinte", "Maquillaje de dia", "Lavado de cabello", "Corte de cabello"],
        datasets: [{
            label: 'Servicios menos solicitados',
            data: [9, 8, 6, 4, 3, 1],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(254,58,239,1)',
                'rgba(254,58,239,1)',
                'rgba(254,58,239,1)',
                'rgba(254,58,239,1)',
                'rgba(254,58,239,1)',
                'rgba(254,58,239,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
      elements: {
        line: {
            tension: 0, // disables bezier curves
        }
    }
    }
  };

  constructor(public servicioSolicitadoService: ServicioSolicitadoService, public empleadoService: EmpleadosService) {

   }

   getServicioSolicitado() {
    this.servicioSolicitadoService.getServicioSolicitado().subscribe(
      (data) => {
        this.listadoServicioSolicitado = data['data'];
      }, (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.getServicioSolicitado();
  }
 
 
}
