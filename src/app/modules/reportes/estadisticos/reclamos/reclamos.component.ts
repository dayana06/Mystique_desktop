import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.scss']
})
export class ReclamosComponent implements OnInit {
filtroSelec = 'semana';
filtro = [
    {value: 'semana', viewValue: 'Esta semana'},
    {value: 'mes', viewValue: 'Último mes'},
 ];
  misDatosSem = {
    type: 'bar',
    data: {
        labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        datasets: [{
            label: 'Número total de reclamos',
            data: [12, 19, 3, 5, 2, 3, 9],
            backgroundColor: [
                'rgba(253, 0, 135, 0.5)',
                'rgba(253, 0, 135, 0.5)',
                'rgba(253, 0, 135, 0.5)',
                'rgba(253, 0, 135, 0.5)',
                'rgba(253, 0, 135, 0.5)',
                'rgba(253, 0, 135, 0.5)',
                'rgba(253, 0, 135, 0.5)',
            ],
            borderColor: [
                'rgba(253, 0, 135, 1)',
                'rgba(253, 0, 135, 1)',
                'rgba(253, 0, 135, 1)',
                'rgba(253, 0, 135, 1)',
                'rgba(253, 0, 135, 1)',
                'rgba(253, 0, 135, 1)',
                'rgba(253, 0, 135, 1)'
            ],
            borderWidth: 1
        },
        {
            label: 'Número de reclamos aprobados',
            data: [3, 2, 0, 1, 0, 0, 4],
            backgroundColor: [
              'rgba(0, 101, 255, 0.5)',
              'rgba(0, 101, 255, 0.5)',
              'rgba(0, 101, 255, 0.5)',
              'rgba(0, 101, 255, 0.5)',
              'rgba(0, 101, 255, 0.5)',
              'rgba(0, 101, 255, 0.5)',
              'rgba(0, 101, 255, 0.5)',
          ],
          borderColor: [
              'rgba(0, 101, 255, 1)',
              'rgba(0, 101, 255, 1)',
              'rgba(0, 101, 255, 1)',
              'rgba(0, 101, 255, 1)',
              'rgba(0, 101, 255, 1)',
              'rgba(0, 101, 255, 1)',
              'rgba(0, 101, 255, 1)'
          ],
            borderWidth: 1
        },
        {
          label: 'Número de reclamos rechazados',
          data: [9, 17, 3, 4, 2, 3, 5],
          backgroundColor: [
            'rgba(48, 63, 159, 0.5)',
            'rgba(48, 63, 159, 0.5)',
            'rgba(48, 63, 159, 0.5)',
            'rgba(48, 63, 159, 0.5)',
            'rgba(48, 63, 159, 0.5)',
            'rgba(48, 63, 159, 0.5)',
            'rgba(48, 63, 159, 0.5)',
        ],
        borderColor: [
            'rgba(48, 63, 159, 1)',
            'rgba(48, 63, 159, 1)',
            'rgba(48, 63, 159, 1)',
            'rgba(48, 63, 159, 1)',
            'rgba(48, 63, 159, 1)',
            'rgba(48, 63, 159, 1)',
            'rgba(48, 63, 159, 1)'
        ],
          borderWidth: 1
      },
    ]
    },
    options: {
        
    }
  };
  misDatosMes = {
    type: 'bar',
    data: {
        labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
        datasets: [{
            label: 'Número total de reclamos',
            data: [30, 19, 15, 25],
            backgroundColor: [
                'rgba(253, 0, 135, 0.5)',
                'rgba(253, 0, 135, 0.5)',
                'rgba(253, 0, 135, 0.5)',
                'rgba(253, 0, 135, 0.5)',
            ],
            borderColor: [
                'rgba(253, 0, 135, 1)',
                'rgba(253, 0, 135, 1)',
                'rgba(253, 0, 135, 1)',
                'rgba(253, 0, 135, 1)'
            ],
            borderWidth: 1
        },
        {
            label: 'Número de reclamos aprobados',
            data: [10, 12, 5, 2],
            backgroundColor: [
              'rgba(0, 101, 255, 0.5)',
              'rgba(0, 101, 255, 0.5)',
              'rgba(0, 101, 255, 0.5)',
              'rgba(0, 101, 255, 0.5)',
          ],
          borderColor: [
              'rgba(0, 101, 255, 1)',
              'rgba(0, 101, 255, 1)',
              'rgba(0, 101, 255, 1)',
              'rgba(0, 101, 255, 1)',
          ],
            borderWidth: 1
        },
        {
          label: 'Número de reclamos rechazados',
          data: [20, 7, 10, 23],
          backgroundColor: [
            'rgba(48, 63, 159, 0.5)',
            'rgba(48, 63, 159, 0.5)',
            'rgba(48, 63, 159, 0.5)',
            'rgba(48, 63, 159, 0.5)',
        ],
        borderColor: [
            'rgba(48, 63, 159, 1)',
            'rgba(48, 63, 159, 1)',
            'rgba(48, 63, 159, 1)',
            'rgba(48, 63, 159, 1)',
        ],
          borderWidth: 1
      },
    ]
    },
    options: {
        
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
