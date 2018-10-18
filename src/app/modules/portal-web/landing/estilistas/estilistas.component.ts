import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EmpleadosService } from '../../../../provider/empleados/empleados.service';
import { ImagenService } from '../../../../provider/imagen/imagen.service';
import { TituloSeccionService } from '../../../../provider/titulo-seccion/titulo-seccion.service';

@Component({
  selector: 'app-estilistas',
  templateUrl: './estilistas.component.html',
  styleUrls: ['./estilistas.component.scss'],
  providers: [TituloSeccionService, ImagenService, EmpleadosService]
})
export class EstilistasComponent implements OnInit {
  listadoTituloSeccion = [] as any;
  tituloC: string;
  descripcion: string;
  idTituloEstilista: Number;
  listadoEmpleado = [] as any;
  empleadoAMostrar = [] as any;
  titulo: Ititle = {} as any;
  constructor(public tituloSeccionService: TituloSeccionService, public imagenService: ImagenService, private el: ElementRef, public empleadoService: EmpleadosService) { }

  ngOnInit() {
    this.getTituloSeccion();
    this.getEmpleado();
  }

  getTituloSeccion() {
    this.tituloSeccionService.getTituloSeccion().subscribe(
      (data) => {
        this.listadoTituloSeccion = data['data'];
        for (let item of this.listadoTituloSeccion) {
          if (item.tipo_seccion == 'employee') {
            this.tituloC = item.titulo;
            this.descripcion = item.descripcion;
            this.idTituloEstilista = item.id;
          }
        }
      }, (error) => {
        console.log(error);
      }
    )
  }

  getEmpleado() {
    this.empleadoService.getEmpleados().subscribe(
      (data) => {
        this.listadoEmpleado = data['data'];
        for (let item of this.listadoEmpleado) {
          if (item.visible == true) {
            this.empleadoAMostrar.push(item.id);
          }
        }

      }, (error) => {
        console.log(error);
      }
    )
  }

  putEmpleado() {
    this.titulo.titulo = this.tituloC;
    this.titulo.descripcion = this.descripcion;
    this.tituloSeccionService.putTituloSeccion(this.idTituloEstilista, this.titulo).subscribe(data => { }, Error => { alert('Error'); });
    for (let item of this.listadoEmpleado) {
      let form = new FormData();
      form.append('visible', 'false');
      this.empleadoService.putEmpleado(item.id, form).subscribe(data => { }, Error => { console.log(Error); });
    }
    for (let item of this.empleadoAMostrar) {
      let id = parseInt(item);
      let form = new FormData();
      form.append('visible', 'true');
      this.empleadoService.putEmpleado(Number(id), form).subscribe(data => { }, Error => { console.log(Error); });
    }
    alert('Exito');
  }
}

export interface Ititle {
  titulo: String;
  descripcion: String;
}
