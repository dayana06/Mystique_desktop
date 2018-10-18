import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios-atendidos',
  templateUrl: './servicios-atendidos.component.html',
  styleUrls: ['./servicios-atendidos.component.scss']
})
export class ServiciosAtendidosComponent implements OnInit {
  misDatos = {
    type: 'horizontalBar',
    data: {
        labels: ["Secado", "Planchado", "Tinte", "Maquillaje de dia", "Lavado de cabello", "Corte de cabello"],
        datasets: [{
            label: 'Servicios más atendidos',
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
  constructor() { }

  ngOnInit() {
  }

}
