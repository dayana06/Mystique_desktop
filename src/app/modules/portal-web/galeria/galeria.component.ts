import { Component, OnInit, ElementRef } from '@angular/core';
import { TituloSeccionService } from '../../../provider/titulo-seccion/titulo-seccion.service';
import { ImagenService } from '../../../provider/imagen/imagen.service';
import { MensajeExitoComponent } from '../../../mensajes/mensaje-exito/mensaje-exito.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  providers: [TituloSeccionService, ImagenService]
})
export class GaleriaComponent implements OnInit {
  listadoTituloSeccion = [] as any;
  tituloC: string
  descripcion: string;
  idTituloPortfolio: Number;

  listadoImagen: IImagen[] = [];
  listadoImagenPortfolio: IImagen[] = [];

  imagenToPost: IImagen = {} as IImagen;
  tituloNuevo: string;
  descripcionNuevo: string;
  files: any[];

  titulo: Ititle = {} as any;
  constructor(public tituloSeccionService: TituloSeccionService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
    public imagenService: ImagenService, private el: ElementRef) { }

    myFunctiondeAyuda(la_url: string){
      return window.open(la_url, '_blank');
      }

  getTituloSeccion() {
    this.tituloSeccionService.getTituloSeccion().subscribe(
      (data) => {
        this.listadoTituloSeccion = data['data'];
        for (let item of this.listadoTituloSeccion) {
          if (item.tipo_seccion == 'portfolio') {
            this.tituloC = item.titulo;
            this.descripcion = item.descripcion;
            this.idTituloPortfolio = item.id;
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
        this.listadoImagenPortfolio = [];
        for (let item of this.listadoImagen) {
          if (item.tipo_imagen == 'portfolio' && item.estatus == 'A') {
            this.listadoImagenPortfolio.push(item);
          }
        }
      }, (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.getTituloSeccion();
    this.getImagen();
  }

  agregarImagen(imag, titu, descr) { // se llama cada vez que ocurre el evento change del file input
    if (imag && imag[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(imag[0]); //lee el archivo como datos del url
      reader.onload = (event: any) => { //se llama una vez que se lea del url
        this.imagenToPost = { titulo: titu, imagen: event.target.result, descripcion: descr, tipo_imagen: 'portfolio' };
      }
    }
    let inputElImage: HTMLInputElement = this.el.nativeElement.querySelector("#fileInput2");
    let fileCount: number = inputElImage.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      formData.append('archivo', inputElImage.files.item(0));
    }
    formData.append('titulo', this.tituloNuevo);
    formData.append('descripcion', this.descripcionNuevo);
    formData.append('tipo_imagen', 'portfolio');
    this.imagenService.postImagen(formData).subscribe(data => { this.ngOnInit();
      alert('Exito'); }, Error => { console.log(Error); });
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

  putPortfolioTitle() {
    this.titulo.titulo = this.tituloC;
    this.titulo.descripcion = this.descripcion;
    this.tituloSeccionService.putTituloSeccion(this.idTituloPortfolio, this.titulo).subscribe(data => { alert('Titulo de la galeria actualizado exitosamente.'); }, Error => { alert('Error'); });
  }

  deleteImage(id) {
    let formData = new FormData();
    formData.append('estatus', 'E');
    this.imagenService.putImagen(id, formData).subscribe(data => { this.ngOnInit(); alert(' Imagen de la galeria eliminada correctamente.'); }, Error => { alert('Error'); });
  }

  putImage(id) {
    let inputDescripcionEl: HTMLInputElement = this.el.nativeElement.querySelector("#imagenCard" + id);
    let inputTituloEl: HTMLInputElement = this.el.nativeElement.querySelector("#tituloCard" + id);
    let inputElImage: HTMLInputElement = this.el.nativeElement.querySelector("#fileInput" + id);
    let fileCount: number = inputElImage.files.length;
    let formData = new FormData();
    if (fileCount > 0) {
      formData.append('archivo', inputElImage.files.item(0));
    }
    formData.append('descripcion', inputDescripcionEl.value);
    formData.append('titulo', inputTituloEl.value);
    this.imagenService.putImagen(id, formData).subscribe(data => { this.ngOnInit();
       alert('Imagen de la galeria actualizada.'); }, Error => { alert('Error'); console.log(Error); });
  }

mostrarMensajeExito(): void {//opens the modal
  let dialogRef = this.dialog.open(MensajeExitoComponent, {
    width: '300px',//sets the width
    height: '140px',
    data: { msj: 'Imagen de la galería actualizada.' }//send this class's attributes to the modal
  });

}}

interface IImagen {
  id?: number;
  id_sistema?: number;
  titulo: string;
  imagen: string;
  descripcion: string;
  estatus?: string;
  tipo_imagen: string;
}
interface ITitulo_Seccion {
  id?: number;
  id_sistema?: number;
  titulo: string;
  descripcion: string;
  boton?: string;
  estatus?: string;
}

export interface Ititle {
  titulo: String;
  descripcion: String;
}
