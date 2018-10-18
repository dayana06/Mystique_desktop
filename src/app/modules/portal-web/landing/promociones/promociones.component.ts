import { Component, OnInit, ElementRef } from '@angular/core';
import { TituloSeccionService } from '../../../../provider/titulo-seccion/titulo-seccion.service';
import { ImagenService } from '../../../../provider/imagen/imagen.service';
import { PromocionesService } from '../../../../provider/promocion/promociones.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss'],
  providers: [TituloSeccionService, ImagenService]
})
export class PromocionesComponent implements OnInit {
  listadoTituloSeccion = [] as any;
  tituloC: string
  descripcion: string;
  idTituloPromo: Number;
  listadoImagen = [] as any;
  listadoPromocion = [] as any;
  promosAMostrar = [] as any;
  titulo: Ititle = {} as any;
  constructor(public tituloSeccionService: TituloSeccionService, public imagenService: ImagenService, public promocionService: PromocionesService, private el: ElementRef) {
  }

  ngOnInit() {
    this.getTituloSeccion();
    this.getImagen();
    this.getPromocion();
  }

  getTituloSeccion() {
    this.tituloSeccionService.getTituloSeccion().subscribe(
      (data) => {
        this.listadoTituloSeccion = data['data'];
        for (let item of this.listadoTituloSeccion) {
          if (item.tipo_seccion == 'promo') {
            this.tituloC = item.titulo;
            this.descripcion = item.descripcion;
            this.idTituloPromo = item.id;
          }
        }
      }, (error) => {
        console.log(error);
      }
    )
  }

  getImagen() {
    this.imagenService.getImagen().subscribe(
      (data) => {
        this.listadoImagen = data['data'];
      }, (error) => {
        console.log(error);
      }
    )
  }

  getPromocion() {
    this.promocionService.getPromociones().subscribe(
      (data) => {
        this.listadoPromocion = data['data'];
        for (let item of this.listadoPromocion) {
          if(item.visible == true) {
            this.promosAMostrar.push(item.id);
          }
        }
      }, (error) => {
        console.log(error);
      }
    )
  }

  putPromos() {
   
    this.titulo.titulo = this.tituloC;
    this.titulo.descripcion = this.descripcion;
    this.tituloSeccionService.putTituloSeccion(this.idTituloPromo, this.titulo).subscribe(data => { }, Error => { alert('Error'); });
    for (let item of this.listadoPromocion) {
      let form = new FormData();
      form.append('visible','false');
      this.promocionService.putPromocion(item.id, form).subscribe(data => { }, Error => { console.log(Error); });
    }
    for (let item of this.promosAMostrar) {
      let id = parseInt(item);
      let form = new FormData();
      form.append('visible','true');
      this.promocionService.putPromocion(Number(id), form).subscribe(data => { }, Error => { console.log(Error); });
    }
    alert('Exito');
  }

}

export interface Ititle {
  titulo: String;
  descripcion: String;
}
