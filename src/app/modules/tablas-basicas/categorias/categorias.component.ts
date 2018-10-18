import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CategoriaService } from '../../../provider/categoria/categoria.service';
import { CategoriaDependienteService } from '../../../provider/categoria/categoria-dependiente.service';
import { CategoriasServicioService } from '../../../provider/categorias-servicio/categorias-servicio.service';
import { MensajeExitoComponent } from '../../../mensajes/mensaje-exito/mensaje-exito.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
  providers: [CategoriaService, CategoriaDependienteService]
})
export class CategoriasComponent implements OnInit {

  optionToLoadList: any;
  showList: Boolean = false;
  showListDependant: Boolean = false;
  optionDependantToLoadList: any;
  constructor(public dialog: MatDialog, public categoriaService: CategoriaService, public categoriaDependienteService: CategoriaDependienteService, public categoriaServicioService: CategoriasServicioService) { }
  categoriaServicio: any;
  razonIncidencia: any;
  ngOnInit() {
    this.getCategoriaServicio();
    this.getRazonIncidencia();
  }

  getCategoria(categoriaABuscar) {
    this.categoriaService.getCategoria(categoriaABuscar).subscribe(
      (data) => {
        this.optionToLoadList = data['data'];
      }, (error) => {
        console.log(error);
      }
    )
  }

  getCategoriaServicio() {
    this.categoriaServicioService.getCategorias().subscribe(
      (data) => {
        this.categoriaServicio = data['data'];
      }, (error) => {
        console.log(error);
      }
    )
  }

  getRazonIncidencia() {
    this.categoriaService.getCategoria("razon_incidencia").subscribe(
      (data) => {
        this.razonIncidencia = data['data'];
      }, (error) => {
        console.log(error);
      }
    )
  }

  getCategoriaDependiente(categoriaABuscar) {
    this.categoriaDependienteService.getCategoriaDependiente(categoriaABuscar).subscribe(
      (data) => {
        this.optionDependantToLoadList = data['data'];
      }, (error) => {
        console.log(error);
      }
    )
  }
  tablaAPostear: any;
  chargeList(tipo) {
    if (tipo == this.tipos[0]) {
      this.tablaAPostear = "tipo_reclamo";
      this.getCategoria("tipo_reclamo");
    } else if (tipo == this.tipos[1]) {
      this.tablaAPostear = "tipo_respuesta_reclamo";
      this.getCategoria("tipo_respuesta_reclamo");
    } else if (tipo == this.tipos[2]) {
      this.tablaAPostear = "tipo_comentario";
      this.getCategoria("tipo_comentario");
    } else if (tipo == this.tipos[3]) {
      this.tablaAPostear = "tipo_respuesta_comentario";
      this.getCategoria("tipo_respuesta_comentario");
    } else if (tipo == this.tipos[4]) {
      this.tablaAPostear = "razon_incidencia";
      this.getCategoria("razon_incidencia");
    } else if (tipo == this.tipos[5]) {
      this.tablaAPostear = "criterio";
      this.getCategoria("criterio");
    } else if (tipo == this.tipos[6]) {
      this.tablaAPostear = "tipo_respuesta_solicitud";
      this.getCategoria("tipo_respuesta_solicitud");
    } else if (tipo == this.tipos[7]) {
      this.tablaAPostear = "categoria_servicio";
      this.getCategoria("categoria_servicio");
    } else if (tipo == this.tipos[8]) {
      this.tablaAPostear = "tipo_respuesta_presupuesto";
      this.getCategoria("tipo_respuesta_presupuesto");
    }
    this.showList = true;
  }
  tipoSelected: any;
  tablaAPostearDependiente: any;


  chargeListDependant(tipo) {
    this.tipoSelected = tipo;
    if (tipo == this.tiposDependientes[0]) {
      this.tablaAPostearDependiente = "tipo_incidencia";
      this.getCategoriaDependiente("tipo_incidencia");
    } else if (tipo == this.tiposDependientes[1]) {
      this.tablaAPostearDependiente = "tipo_servicio";
      this.getCategoriaDependiente("tipo_servicio");
    }
    this.showListDependant = true;
  }
  tipos = ['Tipo de reclamos', 'Tipo de respuestas a reclamos', 'Tipo de comentarios', 'Tipo de repuestas a comentarios', 'Razon de incidencia', 'Tipos de criterios para evaluar orden de servicio', 'Tipos de repuestas a la solicitudes de servicios', 'Categorias de los servicios a brindar', 'Tipo de respuesta a presupuesto']
  tiposDependientes = ['Tipo de incidencia', 'Tipo de servicio'];
  openDialogCategoria(): void {
    const dialogRef = this.dialog.open(CrearCategoriaComponent, {
      data: { modal_tabla: this.tablaAPostear }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCategoria(this.tablaAPostear);
    });
  }

  selectDependant: any;
  openDialogCategoriaDependiente(tipoX): void {
    if (this.tipoSelected == 'Tipo de incidencia') {
      this.selectDependant = this.razonIncidencia;
    } else {
      this.selectDependant = this.categoriaServicio;
    }
    const dialogRef = this.dialog.open(CrearCategoriaDependienteComponent, {
      data: { modal_tip_reclamo: this.selectDependant, modal_tabla: this.tablaAPostearDependiente }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCategoriaDependiente(this.tablaAPostearDependiente);
    });
  }
}


@Component({
  selector: 'app-crear-tipo-categoria',
  templateUrl: './crear-tipo-categoria.component.html',
  styleUrls: ['./crear-tipo-categoria.component.scss'],
  providers: [CategoriaService]
})

export class CrearCategoriaComponent implements OnInit {

  tabla: String;
  name: String;
  constructor(public dialogRef: MatDialogRef<CrearCategoriaComponent>, public categoriaService: CategoriaService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.tabla = data.modal_tabla;

  }

  ngOnInit() {
  }

  notOK(): void {
    this.dialogRef.close();
  }

  yesOK() {
    let categoriaAPostear = { nombre: this.name };
    this.categoriaService.postCategoria(this.tabla, categoriaAPostear).subscribe(data => { alert("Categoria creada exitosamente") }, Error => { alert("Lo sentimos, intente de nuevo más tarde.") });
    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-crear-tipo-categoria-dependiente',
  templateUrl: './crear-tipo-categoria-dependiente.component.html',
  styleUrls: ['./crear-tipo-categoria-dependiente.component.scss'],
  providers: [CategoriaDependienteService]
})
export class CrearCategoriaDependienteComponent implements OnInit {
  nombre: String;
  tipo_reclamo: string;
  idDependiente: String;
  tabla: String;

  constructor(public dialogRef: MatDialogRef<CrearCategoriaDependienteComponent>, public categoriaDependienteService: CategoriaDependienteService,
    private route: ActivatedRoute,
    public dialog: MatDialog, 
    private router: Router,
    
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.tipo_reclamo = data.modal_tip_reclamo;
    this.tabla = data.modal_tabla;
  }

  ngOnInit() {
  }

  notOK(): void {
    this.dialogRef.close();
  }

  yesOK() {
    let categoriaAPostear;
    if (this.tabla == "tipo_incidencia") {
      categoriaAPostear = { nombre: this.nombre, id_razon_incidencia: this.idDependiente };
    } else {
      categoriaAPostear = { nombre: this.nombre, id_categoria_servicio: this.idDependiente }
    }
    this.categoriaDependienteService.postCategoriaDependiente(this.tabla, categoriaAPostear).subscribe(
      data => {
        this.mostrarMensajeExito()
        }, Error => {
           alert("Lo sentimos, intente de nuevo más tarde.") 
          });
    this.dialogRef.close();
  }

  mostrarMensajeExito(): void {//opens the modal
    let dialogRef = this.dialog.open(MensajeExitoComponent, {
      width: '300px',//sets the width
      height: '140px', 
      data: { msj: 'Categoría creada exitosamente' }//send this class's attributes to the modal
    });
  
    dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
      console.log('Modal closed!');
    //  this.router.navigate(['solicitudes']);
      //this.router.onSameUrlNavigation
      
    });  
  }
}
