import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import {ValoresParametrosService} from '../../../../provider/valores-parametros/valores-parametros.service';
import {ParametrosService} from '../../../../provider/parametros/parametros.service';
import {TiposParametrosService} from '../../../../provider/tipos-parametros/tipos-parametros.service';
import { CategoriasServicioService } from '../../../../provider/categorias-servicio/categorias-servicio.service';
import { ServiciosService } from '../../../../provider/servicios/servicios.service';
import { GestionPromocionService } from '../../../../provider/gestion-promocion/gestion-promocion.service';
import { variable } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute, Router } from '@angular/router';
import { MensajeExitoComponent } from '../../../../mensajes/mensaje-exito/mensaje-exito.component';
@Component({
  selector: 'app-config-promocion',
  templateUrl: './config-promocion.component.html',
  styleUrls: ['./config-promocion.component.scss']
})
export class ConfigPromocionComponent implements OnInit {
 // promocion:
    id_servicio: Blob;
    nombre: Blob;
    descripcion: Blob;
    porcentaje_descuento: any;
    precio_promocion: number;
    imagen: String;
    fecha_inicio: Date;
    fecha_fin: Date;
    estatus: String;
    fecha_creacion: Date;
    valor_parametro: any[];
   //Variables para Obtener Fechas del DataPicker Inicial
   dia: number;
   mes: number;
   an:  number;
   mesn: number;
   a: String[];

   //Final
   dia_f: number;
   mes_f: number;
   an_f:  number;
   mesn_f: number;
// Carga de Parametros
  [x: string]: any;
  consejo: Array<{id: number, nombre: string, id_tipo_parametro: number, fecha_creacion: Date }> = [];
  datoBasico: Array<{id: number, nombre: string, id_tipo_parametro: number, fecha_creacion: Date }> = [];
  listaParametro: Array<{ }> ;
  listaValor: Array<{}> = [];
  tipoparametro: any;
  listaTipoParametro: any;
  listaParametros: any ;
  listavalorparametro: any;
  //arreglo de Servicio y Categoria
  pro: any;
  servicio: any;
    servicios: Array<{id: number,
    nombre: string,
    descripcion: string, porcentaje_descuento: number, precio: number ,    
    imagen: string, fecha_inicio: Date, fecha_fin:  Date }>;
//Para El Monto
precio: number;
monto: any;

  //Variables y arreglos para el Post
  input: HTMLInputElement;
  form = new FormData();
  cantidad: number;
   i: number;
    constructor(public dialog: MatDialog, public parametroServ: ParametrosService, public tipo_para_serv: TiposParametrosService,
    public valor_para_ser: ValoresParametrosService, public categoria_servicio: CategoriasServicioService, 
    public servici: ServiciosService , public gestion: GestionPromocionService, private el: ElementRef,
    private route: ActivatedRoute,
    private router: Router, ) {
      this.valor_parametro = [];
      this.precio = 0
      this.monto = 0;


    }

  ngOnInit() {
    this.getTipoParametros();
    this.getValorParametros();
    this.getParametros();
    this.getServicios();
    this.getCategorias();
    
    this.promocion = {
      id_servicio: 0 ,
      nombre: '',
      descripcion: '',
      porcentaje_descuento: 0,
      precio_promocion: 0,
      imagen:  '',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
      estatus: '',
      fecha_creacion: new Date(),
     // valor_parametro: [{id_promocion: 0, id_valor_parametro: 0}],
     valor_parametro: []
    };
   
      }

  cargarParametro(id) {
    let j = 0;
   this.listaParametro = [];
    for (let i = 0; i < this.listaParametros.length; i++) {
      if (this.listaParametros[i].id_tipo_parametro === id) {
        this.listaParametro[j] = this.listaParametros[i];
        console.log(id);
        j++;
       // console.log(this.listaParametro);
      }}
    return this.listaParametro;
  }
  cargarValorParametro(id) {
    let j = 0;
    this.listaValor = [];
    for (let i = 0; i < this.listavalorparametro.length; i++) {
        if (this.listavalorparametro[i].id_parametro === id) {
          this.listaValor[j] = this.listavalorparametro[i];
          console.log(id);
          j++;
        }
    }
  }

  guardarAtributo(data) {

    let k = 0;
    let encontrado = 0;
    for (let index = 0; index < this.consejo.length; index++) {
      if (data === this.consejo[index]) {
     encontrado = 1;
        this.mostrarMensajeValidacionCara();
     break;
      }
      k++;
    }
    
    if (encontrado === 0) {
      this.consejo.push(data);
      console.log(this.consejo);
    }

  }
  guardarDatoBasico(data) {
    let k = 0;
    let encontrado = 0;
    for (let index = 0; index < this.datoBasico.length; index++) {
      if (data === this.datoBasico[index]) {
     encontrado = 1;
        this.mostrarMensajeValidacion();
     break;
      }
      k++;
    }
    
    if (encontrado === 0) {
      this.datoBasico.push(data);
      console.log(this.datoBasico);
    }

  }
  Guardar() {
  }

// Metodos para Cargar datos (Todos)

getParametros() {
  this.parametroServ.getParametros().subscribe((resp) => {
    this.listaParametros = resp['data'];
   // console.log(this.listaParametros);
  }, (error) => {
      console.log(error);
    });


}

getTipoParametros() {
  this.tipo_para_serv.getTipoParametros().subscribe((resp) => {
    this.listaTipoParametro = resp['data'];
   // console.log(this.listaTipoParametro );
  }, (error) => {
      console.log(error);
    });
}


getValorParametros() {
  this.valor_para_ser.getValoresParametros().subscribe((resp) => {
    this.listavalorparametro = resp['data'];
    console.log(this.listavalorparametro);
  }, (error) => {
      console.log(error);
    });
}


getCategorias() {
  this.categoria_servicio.getCategorias().subscribe((resp) => {
    this.pro = resp['data'];
    console.log(this.pro);
  }, (error) => {
      console.log(error);
    });
  }

  getServicios() {
    this.servici.getServicios().subscribe((resp) => {
      this.servicios = resp['data'];
      console.log(this.servicios);
    }, (error) => {
        console.log(error);
      });
    }
    myFunctiondeAyuda(la_url: string){
      return window.open(la_url, '_blank');
      }

    
    addPromocionyValores() {
     this.input = this.el.nativeElement.querySelector('#fileInput');
     this.cantidad = this.input.files.length;
     this.monto = (this.precio * (100-this.porcentaje_descuento)) / 100;
      
     if ( this.cantidad > 0) {
     this.form.append('archivo', this.input.files.item(0));
     this.form.append('id_servicio', this.id_servicio);
     this.form.append('descripcion', this.descripcion);
     this.form.append('nombre', this.nombre);
     this.form.append('porcentaje_descuento', this.porcentaje_descuento);
     this.form.append('precio_promocion', this.monto);
     this.mes = this.fecha_inicio.getMonth();
     if (this.mes <= 8) {
       this.mesn = this.mes + 1;
       this.dia = this.fecha_inicio.getDate();
       this.an = this.fecha_inicio.getFullYear();
       this.form.append('fecha_inicio', this.an + '/' + this.mesn + '/' + '0' + this.dia );

     } else {
       this.mes = this.mes + 1;
       this.dia = this.fecha_inicio.getDate();
       this.an = this.fecha_inicio.getFullYear();
      // const c = this.an + '/' + this.dia + '/' + this.mes;
       this.form.append('fecha_inicio', this.an + '/' + this.mes + '/' + this.dia);
     }

     this.mes_f = this.fecha_fin.getMonth();
     if (this.mes_f <= 8) {
      this.mesn_f = this.mes_f + 1;
      this.dia_f = this.fecha_fin.getDate();
      this.an_f = this.fecha_fin.getFullYear();
      this.form.append('fecha_fin', this.an_f + '/' + this.mesn_f + '/' + '0' + this.dia_f );

    } else {
      this.mes_f = this.mes_f + 1;
      this.dia_f = this.fecha_fin.getDate();
      this.an_f = this.fecha_fin.getFullYear();
     
      this.form.append('fecha_fin', this.an_f + '/' + this.mes_f + '/' + this.dia_f);
    }


     }
    
      console.log(this.datoBasico);
      let k = 0;
      for (let index = 0; index < this.datoBasico.length; index++) {
        this.valor_parametro[k] = this.datoBasico[index].id;
       
         k++;
      }
      
      for ( this.i = 0; this.i < this.valor_parametro.length; this.i++) {
      this.form.append('valor_parametro[]', this.valor_parametro[this.i]);
     }

      console.log(this.valor_parametro);
      console.log(this.form);
      this.gestion.addPromociones(this.form).subscribe((resp) => {
      this.msj = resp['data'].message;
      console.log(this.msj);
      this.mostrarMensajeExito();
        
      }, (error) => {
          console.log(error);
        });

        
         }


         mostrarMensajeExito(): void {
          const dialogRef = this.dialog.open(MensajeExitoComponent, {
            width: '300px',
            height: '140px', 
            data: { msj: 'Promoción creada exitosamente' }
          });
        
          dialogRef.afterClosed().subscribe(result => {
            console.log('Modal closed!');
            this.router.navigate(['promociones']); });  
        }

        mostrarMensajeValidacion(): void {
          const dialogRef = this.dialog.open(MensajeExitoComponent, {
            width: '300px',
            height: '140px', 
            data: { msj: 'No puede Repetir Valores de una Misma Promoción:' }
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log('Modal closed!');
             }); }

             mostrarMensajeValidacionCara(): void {
              const dialogRef = this.dialog.open(MensajeExitoComponent, {
                width: '300px',
                height: '140px', 
                data: { msj: 'No puede Seleccionar 2 veces la misma Característica o Dato Básico:' }
              });
            
              dialogRef.afterClosed().subscribe(result => {
                console.log('Modal closed!');
              }); }


     obtenerMonto(codigo: number) {
          console.log(this.servicios);
      let k = 0;
      let encontrado = 0;
      for (let index = 0; index < this.servicios.length; index++) {
        if (this.servicios[index].id === codigo) {
          this.precio = this.servicios[index].precio;
          encontrado = 1;
          break;
        }
         k++;
      }
     console.log(this.precio);

    }




      }

