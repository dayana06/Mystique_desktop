import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ParametroService } from '../../../provider/parametro/parametro.service';
import { TipoParametroService } from '../../../provider/tipo-parametro/tipo-parametro.service';
import { ValorParametroService } from '../../../provider/valor-parametro/valor-parametro.service';
import { CategoriasServicioService } from '../../../provider/categorias-servicio/categorias-servicio.service';
import { CategoriaParametroService } from '../../../provider/categoria-parametro/categoria-parametro.service';
import { MensajeExitoComponent } from '../../../mensajes/mensaje-exito/mensaje-exito.component';
import { ActivatedRoute, Router } from '@angular/router';

interface TipoParametro {
  nombreTP: string;
  Parametros: Tpa[];
}

interface Val {
  valor: string;
  descrip: string;
}
interface Tpa {
  nombre: string;

}
@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss']

})
export class ParametrosComponent implements OnInit {
  panelOpenState = true;
  caracteristicaLoad: String[] = [];
  valoresToLoad: any;
  showCaracteristica: Boolean = false;
  parametrosSelect: String[] = [];
  showValores: Boolean = false;
  listadoTipoParametros: any[] = [];
  listadoParametro: any[] = [];
  parametrosAListar = [] as any;
  listadoValorParametro: any[] = [];
  valorParametroAlistar = [] as any;
  categoriaServicio = [] as any;
  categoriaParametro = [] as any;
  constructor(public dialog: MatDialog, public categoriaParametroService: CategoriaParametroService, public categoriaServicioService: CategoriasServicioService, public valorParametroService: ValorParametroService, public tipoParametroService: TipoParametroService, public ParametroService: ParametroService) {

  }

  myFunctiondeAyuda(la_url: string){
    return window.open(la_url, '_blank');
    }
  configurarValoresParametro() {
    let nombreSelect: String;
    for (let item of this.listadoTipoParametros) {
      nombreSelect = '';
      for (let ite of this.listadoParametro) {
        if (item.id == ite.id_tipo_parametro) {
          nombreSelect = item.nombre + ': ' + ite.nombre;
          this.parametrosSelect.push(nombreSelect);
        }
      }
    }
  }
  getTipoParametro() {
    this.tipoParametroService.getTipoParametros().subscribe(
      (data) => {
        this.listadoTipoParametros = data['data'];
      }, (error) => {
        console.log(error);
      }
    )
  }
  getParametro() {
    this.ParametroService.getParametros().subscribe(
      (data) => {
        this.listadoParametro = data['data'];
      }, (error) => {
        console.log(error);
      }
    )
  }

  getValorParametro() {
    this.valorParametroService.getValorParametros().subscribe(
      (data) => {
        this.listadoValorParametro = data['data'];
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
  getCategoriaParametro() {
    this.categoriaParametroService.getCategoriasParametros().subscribe(
      (data) => {
        this.categoriaParametro = data['data'];
      }, (error) => {
        console.log(error);
      }
    )
  }
  parametroIdAPostear: Number;
  cargarListaCaracteristica(id) {
    this.parametroIdAPostear = id;
    this.parametrosAListar = [];
    this.showCaracteristica = true;
    for (let item of this.listadoParametro) {
      if (item.id_tipo_parametro == id) {
        this.parametrosAListar.push(item);
      }
    }
    for (let item of this.parametrosAListar) {
      this.valorParametroAlistar.push(item);
    }

  }



  cleanLists() {
    this.showCaracteristica = false;
    this.showValores = false;
  }
  valorAMostrar: any;
  cargarListaValores(nombre) {
    let parametro: String;
    parametro = nombre.substring(nombre.indexOf(':') + 2, nombre.length);
    let auxiliar: any[] = [];
    this.showValores = true;
    for (let item of this.listadoParametro) {
      if (item.nombre == parametro) {
        auxiliar.push(item.id);
      }
    }
    this.valorAMostrar = auxiliar;

  }

  ngOnInit() {
    this.getTipoParametro();
    this.getParametro();
    this.getValorParametro();
    this.getCategoriaServicio();
    this.getCategoriaParametro();
  }
  //Modal de Parametro:
  openDialogParametro() {
    const dialogRef = this.dialog.open(AgregarParametroComponent, {
      height: '350px',
      width: '450px',
      data: { modal_id_tipo_parametro: this.parametroIdAPostear }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getParametro();
    });
  }
  //Modal de Tipo Parametro
  openDialogTipoParametro() {
    const dialogRef = this.dialog.open(AgregarTipoParametroComponent, {
      height: '350px',
      width: '400px',
      data: { modal_categoryList: this.categoriaServicio }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCategoriaParametro();
      this.getTipoParametro();
    });
  }
  //Modal de Valor Parametro
  openDialogValorParametro() {
    const dialogRef = this.dialog.open(AgregarValorParametroComponent, {
      height: '380px',
      width: '350px',
      data: { modal_id_parametro: this.valorAMostrar }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getValorParametro();
    });
  }
}
//Componentes Para cada Agregar:
@Component({
  selector: 'app-crear-tipo-parametro',
  templateUrl: './crear-tipo-parametro.component.html',
  styleUrls: ['./crear-tipo-parametro.component.scss']
})
export class AgregarTipoParametroComponent implements OnInit {
  category = new FormControl();
  categoryList: any;
  nombre: String;
  categoriaServicio: Number[];
  constructor(public dialogRef: MatDialogRef<AgregarTipoParametroComponent>,
     public tipoParametroService: TipoParametroService,
     private route: ActivatedRoute,
    public dialog: MatDialog, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.categoryList = data.modal_categoryList;
  }

  ngOnInit() {
  }

  notOK(): void {
    this.dialogRef.close();
  }

  yesOK() {
    let TipoParametroAPostear = { nombre: this.nombre, categoria_servicio: this.categoriaServicio };
    this.tipoParametroService.postTipoParametros(TipoParametroAPostear).subscribe(data => {
       this.mostrarMensajeExito() }, Error => { console.log(Error) });
    this.dialogRef.close();
  }
  mostrarMensajeExito(): void {//opens the modal
    let dialogRef = this.dialog.open(MensajeExitoComponent, {
      width: '300px',//sets the width
      height: '140px', 
      data: { msj: 'Tipo parametro creado exitosamente' }//send this class's attributes to the modal
    });
  
    dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
      console.log('Modal closed!');
    //  this.router.navigate(['solicitudes']);
      //this.router.onSameUrlNavigation
      
    });  
  }
}
@Component({
  selector: 'app-crear-nuevo-parametro',
  templateUrl: './crear-nuevo-parametro.component.html',
  styleUrls: ['./crear-nuevo-parametro.component.scss']
})

export class AgregarParametroComponent implements OnInit {
  nombre: String;
  id_tipo_parametro: Number;
  constructor(public dialogRef: MatDialogRef<AgregarParametroComponent>,
    public parametroService: ParametroService,
    private route: ActivatedRoute,
    public dialog: MatDialog, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.id_tipo_parametro = data.modal_id_tipo_parametro;
  }

  ngOnInit() {
  }

  notOK(): void {
    this.dialogRef.close();
  }

  crearParametro() {
    let parametroAPostear =
      { nombre: this.nombre, id_tipo_parametro: this.id_tipo_parametro, estatus: 'A', subscripcion: false };

    this.parametroService.postParametros(parametroAPostear).subscribe(data => { 
     this.mostrarMensajeExito() 
    }, Error => { alert("Lo sentimos, intente de nuevo más tarde.") });
    this.dialogRef.close();
  }
  
  mostrarMensajeExito(): void {//opens the modal
    let dialogRef = this.dialog.open(MensajeExitoComponent, {
      width: '300px',//sets the width
      height: '140px', 
      data: { msj: 'Parámetro creado exitosamente' }//send this class's attributes to the modal
    });
  
    dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
      console.log('Modal closed!');
    //  this.router.navigate(['solicitudes']);
      //this.router.onSameUrlNavigation
      
    });  
  }
  yesOK() {

    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-crear-valor-parametro',
  templateUrl: './crear-valor-parametro.component.html',
  styleUrls: ['./crear-valor-parametro.component.scss']
})

export class AgregarValorParametroComponent implements OnInit {
  nombre: String;
  id_parametro: Number;
  descripcion: String;
  constructor(public dialogRef: MatDialogRef<AgregarValorParametroComponent>, public valorParametroService: ValorParametroService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.id_parametro = data.modal_id_parametro;
  }

  ngOnInit() {
  }
  notOK(): void {
    this.dialogRef.close();
  }

  crearValorParametro() {
    let valorParametroAPostear = { nombre: this.nombre, id_parametro: this.id_parametro[0], descripcion: this.descripcion };
    console.log(valorParametroAPostear);
    this.valorParametroService.postValorParametros(valorParametroAPostear).subscribe(data => { alert("Valor parametro creado exitosamente") }, Error => { alert("Lo sentimos, intente de nuevo más tarde.") });
    this.dialogRef.close();
  }

  yesOK() {

    this.dialogRef.close();
  }
}

