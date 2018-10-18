import { Component, OnInit, ElementRef } from '@angular/core';
import { TituloSeccionService } from '../../../../provider/titulo-seccion/titulo-seccion.service';
import { ImagenService } from '../../../../provider/imagen/imagen.service';
import { CategoriasServicioService } from '../../../../provider/categorias-servicio/categorias-servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
  providers: [TituloSeccionService, ImagenService, CategoriasServicioService]
})
export class ServiciosComponent implements OnInit {
  listadoTituloSeccion = [] as any;
  tituloC: string
  descripcion: string;
  idTituloServicio: Number;
  listadoImagen = [] as any;
  listadoImagenServicio = [] as any;
  listadoCategoria = [] as any;
  files: any[];
  categoriasAMostrar: any;
  titulo: Ititle = {} as any;
  imagen: Iimagen = {} as any;

  constructor(public tituloSeccionService: TituloSeccionService, public imagenService: ImagenService, public categoriaServicioService: CategoriasServicioService, private el: ElementRef) {
  }

  getTituloSeccion() {
    this.tituloSeccionService.getTituloSeccion().subscribe(
      (data) => {
        this.listadoTituloSeccion = data['data'];
        for (let item of this.listadoTituloSeccion) {
          if (item.tipo_seccion == 'services') {
            this.tituloC = item.titulo;
            this.descripcion = item.descripcion;
            this.idTituloServicio = item.id;
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
          if (item.tipo_imagen == 'service') {
            this.listadoImagenServicio.push({ id_sistema: 1, id: item.id, titulo: item.titulo, descripcion: item.descripcion, imagen: item.imagen });
          }
        }
      }, (error) => {
        console.log(error);
      }
    )
  }

  getCategoriaServicio() {
    this.categoriaServicioService.getCategorias().subscribe(
      (data) => {
        this.listadoCategoria = data['data'];
      }, (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.getTituloSeccion();
    this.getCategoriaServicio();
    this.getImagen();
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

  putServiceTitle() {
    this.titulo.titulo = this.tituloC;
    this.titulo.descripcion = this.descripcion;
    this.tituloSeccionService.putTituloSeccion(this.idTituloServicio, this.titulo).subscribe(data => { alert('Exito'); }, Error => { alert('Error'); });
  }

  putServiceCard(id) {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector("#imagenCard" + id);
    let inputElImage: HTMLInputElement = this.el.nativeElement.querySelector("#fileInput" + id);
    let fileCount: number = inputElImage.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      formData.append('archivo', inputElImage.files.item(0));
    }
    formData.append('descripcion', inputEl.value)
    this.imagenService.putImagen(id, formData).subscribe(data => { alert('Exito'); }, Error => { console.log(Error); });
  }
}


export interface Iimagen {
  id_sistema: number;
  id: number;
  titulo: String;
  button: String;
  descripcion: String;
  tipo_imagen: String;
  imagen: String;
  estatus: String;
  fecha_creacion: Date;
}

export interface Ititle {
  titulo: String;
  descripcion: String;
}