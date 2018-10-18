import { Component, OnInit, ElementRef } from '@angular/core';
import { ImagenService } from '../../../../provider/imagen/imagen.service';
import { TituloSeccionService } from '../../../../provider/titulo-seccion/titulo-seccion.service';
import { ConsejosService } from '../../../../provider/consejos/consejos.service';

@Component({
  selector: 'app-resenias',
  templateUrl: './resenias.component.html',
  styleUrls: ['./resenias.component.scss'],
  providers: [TituloSeccionService, ImagenService, ConsejosService]
})
export class ReseniasComponent implements OnInit {
  listadoTituloSeccion = [] as any;
  tituloC: string
  descripcion: string;
  idTituloConsejo: Number;
  listadoConsejo = [] as any;
  consejoAMostrar = [] as any;
  titulo: Ititle = {} as any;
  constructor(public tituloSeccionService: TituloSeccionService, public imagenService: ImagenService, private el: ElementRef, public consejoService: ConsejosService) { }

  ngOnInit() {
    this.getTituloSeccion();
    this.getConsejo();
  }



  getTituloSeccion() {
    this.tituloSeccionService.getTituloSeccion().subscribe(
      (data) => {
        this.listadoTituloSeccion = data['data'];
        for (let item of this.listadoTituloSeccion) {
          if (item.tipo_seccion == 'tip') {
            this.tituloC = item.titulo;
            this.descripcion = item.descripcion;
            this.idTituloConsejo = item.id;
          }
        }
      }, (error) => {
        console.log(error);
      }
    )
  }

  getConsejo() {
    this.consejoService.getConsejo().subscribe(
      (data) => {
        this.listadoConsejo = data['data'];
        var date_sort_asc = function (a, b) {
          if (a.fecha_creacion > b.fecha_creacion) return -1;
          if (a.fecha_creacion < b.fecha_creacion) return 1;
          return 0;
        }
        this.listadoConsejo.sort(date_sort_asc);
        for (let item of this.listadoConsejo) {
          if(item.visible == true) {
            this.consejoAMostrar.push(item.id);
          }
        }

      }, (error) => {
        console.log(error);
      }
    )
  }

  putConsejos() {
    this.titulo.titulo = this.tituloC;
    this.titulo.descripcion = this.descripcion;
    this.tituloSeccionService.putTituloSeccion(this.idTituloConsejo, this.titulo).subscribe(data => { }, Error => { alert('Error'); });
    for (let item of this.listadoConsejo) {
      let form = new FormData();
      form.append('visible', 'false');
      this.consejoService.putConsejo(item.id, form).subscribe(data => { }, Error => { console.log(Error); });
    }
    for (let item of this.consejoAMostrar) {
      let id = parseInt(item);
      let form = new FormData();
      form.append('visible', 'true');
      this.consejoService.putConsejo(Number(id), form).subscribe(data => { }, Error => { console.log(Error); });
    }
    alert('Exito');
  }

}

export interface Ititle {
  titulo: String;
  descripcion: String;
}