import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../../provider/clientes/clientes.service';
import * as moment from 'moment';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.scss']
})
export class SuscripcionComponent implements OnInit {
  listadoClientes = [] as any;
  listadoClientesPotencialesSemana = [] as any;
  listadoClientesRealesSemana = [] as any;

  listadoClientesPotencialesMes = [] as any;
  listadoClientesRealesMes = [] as any;

  listadoClientesPotencialesTrimes = [] as any;
  listadoClientesRealesTrimes = [] as any;

  listadoClientesPotencialesSeismes = [] as any;
  listadoClientesRealesSeismes = [] as any;

  listadoClientesPotencialesAnno = [] as any;
  listadoClientesRealesAnno = [] as any;

  filtroSelec = 'semana';
  filtro = [
    { value: 'semana', viewValue: 'Esta semana' },
    { value: 'mes', viewValue: 'Último mes' },
    { value: 'trimes', viewValue: 'Último trimestre' },
    { value: 'seismes', viewValue: 'Último semestre' },
    { value: 'anno', viewValue: 'Último año' },
  ];
  misDatosSem: {};
  misDatosMes: {};
  misDatosTrimes: {};
  misDatosSeismes: {};
  misDatosAnno: {};
  constructor(public clienteService: ClientesService) {

  }

  getClientesSemana() {
    this.clienteService.getClientes().subscribe(
      (data) => {
        var dateFrom = moment().subtract(7, 'd');
        this.listadoClientes = data['data'];
        for (let item of this.listadoClientes) {
          if (new Date(item.fecha_creacion) >= dateFrom.toDate()) {
            if (item.tipo_cliente == 'P') {
              this.listadoClientesPotencialesSemana.push(item);
            } else if (item.tipo_cliente == 'C') {
              this.listadoClientesRealesSemana.push(item);
            }
          }
        }
        this.misDatosSem = {
          type: 'pie',
          data: {
            labels: ["Clientes Potenciales", "Clientes"],
            datasets: [{
              data: [this.listadoClientesPotencialesSemana.length, this.listadoClientesRealesSemana.length],
              backgroundColor: [
                'rgba(245, 5, 194, 0.5)',
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
      }, (error) => {
        console.log(error);
      }
    )
  }

  getClientesMes() {
    this.clienteService.getClientes().subscribe(
      (data) => {
        var dateFrom = moment().subtract(1, 'M');
        this.listadoClientes = data['data'];
        for (let item of this.listadoClientes) {
          if (new Date(item.fecha_creacion) >= dateFrom.toDate()) {
            if (item.tipo_cliente == 'P') {
              this.listadoClientesPotencialesMes.push(item);
            } else if (item.tipo_cliente == 'C') {
              this.listadoClientesRealesMes.push(item);
            }
          }
        }
        this.misDatosMes = {
          type: 'pie',
          data: {
            labels: ["Clientes Potenciales", "Clientes"],
            datasets: [{
              data: [this.listadoClientesPotencialesMes.length, this.listadoClientesRealesMes.length],
              backgroundColor: [
                'rgba(245, 5, 194, 0.5)',
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
      }, (error) => {
        console.log(error);
      }
    )
  }

  getClientesTrimestre() {
    this.clienteService.getClientes().subscribe(
      (data) => {
        var dateFrom = moment().subtract(3, 'M');
        this.listadoClientes = data['data'];
        for (let item of this.listadoClientes) {
          if (new Date(item.fecha_creacion) >= dateFrom.toDate()) {
            if (item.tipo_cliente == 'P') {
              this.listadoClientesPotencialesTrimes.push(item);
            } else if (item.tipo_cliente == 'C') {
              this.listadoClientesRealesTrimes.push(item);
            }
          }
        }
        this.misDatosTrimes = {
          type: 'pie',
          data: {
            labels: ["Clientes Potenciales", "Clientes"],
            datasets: [{
              data: [this.listadoClientesPotencialesTrimes.length, this.listadoClientesRealesTrimes.length],
              backgroundColor: [
                'rgba(245, 5, 194, 0.5)',
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
      }, (error) => {
        console.log(error);
      }
    )
  }

  getClientesSemestre() {
    this.clienteService.getClientes().subscribe(
      (data) => {
        var dateFrom = moment().subtract(6, 'M');
        this.listadoClientes = data['data'];
        for (let item of this.listadoClientes) {
          if (new Date(item.fecha_creacion) >= dateFrom.toDate()) {
            if (item.tipo_cliente == 'P') {
              this.listadoClientesPotencialesSeismes.push(item);
            } else if (item.tipo_cliente == 'C') {
              this.listadoClientesRealesSeismes.push(item);
            }
          }
        }
        this.misDatosSeismes = {
          type: 'pie',
          data: {
            labels: ["Clientes Potenciales", "Clientes"],
            datasets: [{
              data: [this.listadoClientesPotencialesSeismes.length, this.listadoClientesRealesSeismes.length],
              backgroundColor: [
                'rgba(245, 5, 194, 0.5)',
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
      }, (error) => {
        console.log(error);
      }
    )
  }

  getClientesAnno() {
    this.clienteService.getClientes().subscribe(
      (data) => {
        var dateFrom = moment().subtract(12, 'M');
        this.listadoClientes = data['data'];
        for (let item of this.listadoClientes) {
          if (new Date(item.fecha_creacion) >= dateFrom.toDate()) {
            if (item.tipo_cliente == 'P') {
              this.listadoClientesPotencialesAnno.push(item);
            } else if (item.tipo_cliente == 'C') {
              this.listadoClientesRealesAnno.push(item);
            }
          }
        }
        this.misDatosAnno = {
          type: 'pie',
          data: {
            labels: ["Clientes Potenciales", "Clientes"],
            datasets: [{
              data: [this.listadoClientesPotencialesAnno.length, this.listadoClientesRealesAnno.length],
              backgroundColor: [
                'rgba(245, 5, 194, 0.5)',
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
      }, (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.getClientesSemana();
    this.getClientesMes();
    this.getClientesTrimestre();
    this.getClientesSemestre();
    this.getClientesAnno();
  }

}
