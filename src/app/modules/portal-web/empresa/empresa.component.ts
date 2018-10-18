import { Component, OnInit } from '@angular/core';
import { TituloSeccionService } from '../../../provider/titulo-seccion/titulo-seccion.service';
import { ContactoNegocioService } from '../../../provider/contacto-negocio/contacto-negocio.service';
import { DescripcionNegocioService } from '../../../provider/descripcion-negocio/descripcion-negocio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MensajeExitoComponent } from '../../../mensajes/mensaje-exito/mensaje-exito.component';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
  providers: [TituloSeccionService, ContactoNegocioService, DescripcionNegocioService]
})
export class EmpresaComponent implements OnInit {
  listadoTituloSeccion = [] as any;
  tituloC: string
  descripcion: string;
  idTituloEmpresa: Number;
  titulo: Ititle = {} as any;

  listadoContactoNegocio = [] as any;
  telefonoVisible: Boolean;
  direccionVisible: Boolean = false;
  correoVisible: Boolean = false;

  listadoDescripcionNegocio = [] as any;
  misionVisible: Boolean = false;
  visionVisible: Boolean = false;

  items = [] as any;

  toggleTelefono: Boolean;
  idTelefono;
  toggleDireccion: Boolean;
  idDireccion;
  toggleCorreo: Boolean;
  idCorreo;
  toggleMision: Boolean;
  idMision;
  toggleVision: Boolean;
  idVision;

  constructor(public tituloSeccionService: TituloSeccionService, 
    private route: ActivatedRoute,
    public dialog: MatDialog, 
    private router: Router,
    public contactoNegocioService: ContactoNegocioService, public descripcionNegocioService: DescripcionNegocioService) {
  }

  getTituloSeccion() {
    this.tituloSeccionService.getTituloSeccion().subscribe(
      (data) => {
        this.listadoTituloSeccion = data['data'];
        for (let item of this.listadoTituloSeccion) {
          if (item.tipo_seccion == 'contact') {
            this.tituloC = item.titulo;
            this.descripcion = item.descripcion;
            this.idTituloEmpresa = item.id;
          }
        }
      }, (error) => {
        console.log(error);
      }
    )
  }

  getContactoNegocio() {
    this.contactoNegocioService.getNegocio().subscribe(
      (data) => {
        this.listadoContactoNegocio = data['data'];
        for (let item of this.listadoContactoNegocio) {
          if (item.tipo_contacto == 'telefono') {
            this.toggleTelefono = item.visible;
            this.idTelefono = item.id;
          } else if (item.tipo_contacto == 'direccion') {
            this.toggleDireccion = item.visible;
            this.idDireccion = item.id;
          } else if (item.tipo_contacto == 'correo') {
            this.toggleCorreo = item.visible;
            this.idCorreo = item.id;
          }

        }
      }, (error) => {
        console.log(error);
      }
    )
  }

  getDescripcionNegocio() {
    this.descripcionNegocioService.getNegocio().subscribe(
      (data) => {
        this.listadoDescripcionNegocio = data['data'];
        for (let item of this.listadoDescripcionNegocio) {
          if (item.tipo_descripcion == 'vision') {
            this.toggleMision = item.visible;
            this.idVision = item.id;
          } else if (item.tipo_descripcion == 'mision') {
            this.toggleVision = item.visible;
            this.idMision = item.id;
          }
        }
      }, (error) => {
        console.log(error);
      }
    )
  }

  initToggle() {
    this.items = [

      { nombre: "Direccion", status: this.direccionVisible },
      { nombre: "Telefono", status: this.telefonoVisible },
      { nombre: "Correo", status: this.correoVisible },
      { nombre: "Mision", status: this.misionVisible },
      { nombre: "Vision", status: this.visionVisible }
    ];
  }

  ngOnInit() {
    this.getTituloSeccion();
    this.getContactoNegocio();
    this.getDescripcionNegocio();
  }

  putContactTitle() {
    this.titulo.titulo = this.tituloC;
    this.titulo.descripcion = this.descripcion;
    this.tituloSeccionService.putTituloSeccion(this.idTituloEmpresa, this.titulo).subscribe(data => {  }, Error => { alert('Error agregando titulo'); });

    this.contactoNegocioService.updateNegocio(this.idTelefono, {visible: this.toggleTelefono}).subscribe(data => { }, Error => { alert('Error cambiando telefono'); });
    this.contactoNegocioService.updateNegocio(this.idDireccion, {visible: this.toggleDireccion}).subscribe(data => {  }, Error => { alert('Error cambiando direccion'); });
    this.contactoNegocioService.updateNegocio(this.idCorreo, {visible: this.toggleCorreo}).subscribe(data => {  }, Error => { alert('Error cambiando correo'); });

    this.descripcionNegocioService.updateNegocio(this.idMision, {visible: this.toggleMision}).subscribe(data => {  }, Error => { alert('Error cambiando mision'); });
    this.descripcionNegocioService.updateNegocio(this.idVision, {visible: this.toggleVision}).subscribe(
      data => {  this.mostrarMensajeExito() }, Error => { alert('Error cambiando vision'); });
  }
  
mostrarMensajeExito(): void {//opens the modal
  let dialogRef = this.dialog.open(MensajeExitoComponent, {
    width: '300px',//sets the width
    height: '140px', 
    data: { msj: 'Empresa modificada correctamente' }//send this class's attributes to the modal
  });

  dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
    console.log('Modal closed!');
    this.router.navigate(['solicitudes']);
    //this.router.onSameUrlNavigation
    
  });  
}
}

export interface Ititle {
  titulo: String;
  descripcion: String;
}