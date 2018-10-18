import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-frecuentes',
  templateUrl: './clientes-frecuentes.component.html',
  styleUrls: ['./clientes-frecuentes.component.scss']
})
export class ClientesFrecuentesComponent implements OnInit {
  filtroSelec = 'semana';
  tipoGraphSelec = 'doughnut';
  filtro = [
    {value: 'semana', viewValue: 'Esta semana'},
    {value: 'mes', viewValue: 'Último mes'},
  ];
  tipoGraph = [
    {value: 'doughnut', viewValue: 'Dona'},
    {value: 'pie', viewValue: 'Torta'},
  ];
  misDatosD = {
    type: 'doughnut',
    data: {
        labels: ["Mujeres", "Hombre"],
        datasets: [{
            data: [70, 30],
            backgroundColor: [
              'rgba(255, 21, 205, 0.5)',
              'rgba(255, 180, 239, 0.5)',
              
            ],
            borderColor: [
                'rgba(254,58,239,1)',
                'rgba(255, 180, 239, 1)',
              
            ],
            borderWidth: 1
        }]
    },
  }
  misDatosSem = {
    type: 'pie',
    data: {
        labels: ["Mujeres", "Hombre"],
        datasets: [{
            data: [70, 30],
            backgroundColor: [
              'rgba(255, 21, 205, 0.5)',
              'rgba(255, 180, 239, 0.5)',
              
            ],
            borderColor: [
                'rgba(254,58,239,1)',
                'rgba(255, 180, 239, 1)',
              
            ],
            borderWidth: 1
        }]
    },
  }
  misDatosMes = {
    type: 'pie',
    data: {
        labels: ["Mujeres", "Hombre"],
        datasets: [{
            data: [80, 20],
            backgroundColor: [
              'rgba(255, 21, 205, 0.5)',
              'rgba(255, 180, 239, 0.5)',
              
            ],
            borderColor: [
                'rgba(254,58,239,1)',
                'rgba(255, 180, 239, 1)',
              
            ],
            borderWidth: 1
        }]
    },
  }


  
  constructor() { }

  ngOnInit() {
  }

}
