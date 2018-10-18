import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})

export class PruebaComponent implements OnInit {
    filtroSelec = 'semana';
    filtro = [
      {value: 'semana', viewValue: 'Esta semana'},
      {value: 'mes', viewValue: 'Último mes'},
    ];
  misDatosSem = {
    type: 'line',
    data: {
        labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        datasets: [{
            label: '# Citas recibidas',
            data: [12, 19, 3, 8, 0, 15, 9],
            backgroundColor: [
                'rgba(255, 192, 252, 0)',
            ],
            borderColor: [
                'rgba(254,58,239,1)'
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
  misDatosMes = {
    type: 'line',
    data: {
        labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
        datasets: [{
            label: '# Citas recibidas',
            data: [12, 19, 3, 8],
            backgroundColor: [
                'rgba(255, 192, 252, 0)',
            ],
            borderColor: [
                'rgba(254,58,239,1)'
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

  constructor() { }

  ngOnInit() {
  }

}
