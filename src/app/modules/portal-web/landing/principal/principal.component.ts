import { Component, OnInit, ElementRef } from '@angular/core';
import { TituloSeccionService } from '../../../../provider/titulo-seccion/titulo-seccion.service';
import { ItituloSeccion } from '../landing.component';
import { ImagenService } from '../../../../provider/imagen/imagen.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  providers: [TituloSeccionService, ImagenService]
})
export class PrincipalComponent implements OnInit {
  tituloSeccion = {} as ItituloSeccion;
  tituloSeccionId: Number;
  listadoTituloSeccion = [] as any;
  listadoImagen = [] as any;
  tituloC: string
  descripcion: string;
  files: any[];
  hero: Ihero = {} as any;
  idTituloHero: Number;
  idImagenHero: Number;
  constructor(public tituloSeccionService: TituloSeccionService, public imagenService: ImagenService, private el: ElementRef) { }

  ngOnInit() {
    this.getTituloSeccion();
    this.getImagen();
  }

  getTituloSeccion() {
    this.tituloSeccionService.getTituloSeccion().subscribe(
      (data) => {
        this.listadoTituloSeccion = data['data'];
        for (let item of this.listadoTituloSeccion) {
          if (item.tipo_seccion == 'hero') {
            this.tituloC = item.titulo;
            this.descripcion = item.descripcion;
            this.idTituloHero = item.id;
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
        for (let item of this.listadoImagen) {
          if (item.tipo_imagen == 'hero') {
            this.idImagenHero = item.id;
          }
        }
      }, (error) => {
        console.log(error);
      }
    )
  }

  putHero() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#fileInput');
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      formData.append('archivo', inputEl.files.item(0));
    }
    this.hero.titulo = this.tituloC;
    this.hero.descripcion = this.descripcion;
    this.tituloSeccionService.putTituloSeccion(this.idTituloHero, this.hero).subscribe(data => { alert('Exito'); }, Error => { alert('Error'); });

    this.imagenService.putImagen(this.idImagenHero, formData).subscribe(data => { alert('Exito'); }, Error => { console.log(Error); });
  }

  onFileChange(event) {
    this.files = event.target.files;
  }

  cambiarImagen(event, id) { // se llama cada vez que ocurre el evento change del file input
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); //lee el archivo como datos del url
      reader.onload = (event: any) => { //se llama una vez que se lea del url
        document.getElementById(id).setAttribute('src', event.target.result);
      }
    }
  }
}
export interface Ihero {
  titulo: String;
  descripcion: String;
}
