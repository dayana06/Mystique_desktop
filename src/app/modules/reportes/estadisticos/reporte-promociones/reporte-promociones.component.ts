import { Component, OnInit } from '@angular/core';
import { PromocionesService } from '../../../../provider/promocion/promociones.service';

@Component({
  selector: 'app-reporte-promociones',
  templateUrl: './reporte-promociones.component.html',
  styleUrls: ['./reporte-promociones.component.scss'],
  providers: [PromocionesService]
})
export class ReportePromocionesComponent implements OnInit {
  listadoPromociones = [] as any;

  listadoReportePromocion = [] as any;
  filtroSelec = 1;
  misDatosPromo: {};

  dataNumeroSolicitados = [] as any;
  dataNumeroSolicitadosPromocion = [] as any;
  labelsServicios = [] as any;

  reloadChartPromo: Boolean = false;
  constructor(public promocionService: PromocionesService) { }

  ngOnInit() {
    this.getPromociones();
    this.getReportePromocion();
  }

  getPromociones() {
    this.promocionService.getPromociones().subscribe(
      (data) => {
        this.listadoPromociones = data['data'];
      }, (error) => {
        console.log(error);
      }
    )
  }

  getReportePromocion() {
    this.reloadChartPromo = false;
    this.listadoReportePromocion = [];
    this.dataNumeroSolicitados = [];
    this.dataNumeroSolicitadosPromocion = [];
    this.labelsServicios = [];
    this.promocionService.getReportePromocion().subscribe(
      (data) => {
        this.listadoReportePromocion = data['data'];
        this.listadoReportePromocion.sort(function (a, b) {
          var keyA = a.id,
            keyB = b.id;
          // Compare the 2 dates
          if (keyA < keyB) return 1;
          if (keyA > keyB) return -1;
          return 0;
        });
        for (let i = 0; i < 6; i++) {
          this.dataNumeroSolicitados.push(this.listadoReportePromocion[i].solicitado);
          this.dataNumeroSolicitadosPromocion.push(this.listadoReportePromocion[i].promocion);
          this.labelsServicios.push(this.listadoReportePromocion[i].nombre);
        }
        this.misDatosPromo = {
          type: 'bar',
          data: {
            labels: this.labelsServicios,
            datasets: [{
              label: 'Número servicios solicitados',
              data: this.dataNumeroSolicitados,
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
              label: 'Número de servicios solicitados por promocion',
              data: this.dataNumeroSolicitadosPromocion,
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
            ]
          },
          options: {

          }
        };
        this.reloadChartPromo = true;
      }, (error) => {
        console.log(error);
      }
    )
  }
}