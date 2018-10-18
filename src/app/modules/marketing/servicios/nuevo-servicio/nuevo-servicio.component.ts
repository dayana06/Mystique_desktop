
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import {ValoresParametrosService} from '../../../../provider/valores-parametros/valores-parametros.service';
import {ParametrosService} from '../../../../provider/parametros/parametros.service';
import {TiposParametrosService} from '../../../../provider/tipos-parametros/tipos-parametros.service';
import { CategoriasServicioService } from '../../../../provider/categorias-servicio/categorias-servicio.service';
import { ServiciosService } from '../../../../provider/servicios/servicios.service';
import { variable } from '@angular/compiler/src/output/output_ast';
import { GestionServicioService } from '../../../../provider/gestion-servicio/gestion-servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensajeExitoComponent } from '../../../../mensajes/mensaje-exito/mensaje-exito.component';

@Component({
  selector: 'app-nuevo-servicio',
  templateUrl: './nuevo-servicio.component.html',
  styleUrls: ['./nuevo-servicio.component.scss']
})
export class NuevoServicioComponent implements OnInit {
  ser: {
  
    id_tipo_servicio: any;
    nombre:any;
    descripcion: any;
    duracion:any;
    precio: any;
    imagen: any;
    estatus: String;
    fecha_creacion: Date;
    visible: boolean
    insumo_asociado: any[];
    valor_parametro: any[];
    };
  inputEl: any;
  fileCount: number;
  formData = new FormData();
  insumoSel: any[]

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
  prueba: number;
  insumo: any;
  constructor(public dialog: MatDialog, public parametroServ: ParametrosService, public tipo_para_serv: TiposParametrosService,
    public valor_para_ser: ValoresParametrosService, public categoria_servicio: CategoriasServicioService, 
    public servici: ServiciosService , public gestion: GestionServicioService, private route: ActivatedRoute,
    private router: Router, ) {
      

    }

  ngOnInit() {
    this.getTipoParametros();
    this.getValorParametros();
    this.getParametros();
    this.getServicios();
    this.getCategorias();
    this.getInsumos();
    
   
    this.ser = {
      id_tipo_servicio: null,
      nombre: '',
      descripcion: '',
      duracion:0,
      precio: 0,
      imagen:  '',
      estatus: '',
      fecha_creacion: new Date(),
      visible: true,
      insumo_asociado: [],
     // valor_parametro: [{id_promocion: 0, id_valor_parametro: 0}],
     valor_parametro: []
    };
this.insumoSel = []
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
    this.consejo.push(data);
    console.log(this.consejo);
  }
  guardarDatoBasico(data) {
    this.datoBasico.push(data);
    console.log(this.datoBasico);
  }
  Guardar() {
  }

//Metodos para Cargar datos (Todos)

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
      this.servicio = resp['data'];
      console.log(this.servicio);
    }, (error) => {
        console.log(error);
      });
    }
    getInsumos()  {
      this.servici.getInsumos().subscribe((resp) => {
        this.insumo = resp['data'];
        console.log(this.insumo);
      }, (error) => {
          console.log(error);
        });
      }
      mostrar(){
        console.log(this.insumoSel);
      
      }

    addServicioyValores() {
        //agregar imagen
        this.mostrar()
        this.inputEl = document.getElementById('fileInput');
        this.fileCount = this.inputEl.files.length;

        if (this.fileCount > 0) {
          this.formData.append('archivo', this.inputEl.files.item(0));
        }

        //arreglo valors
        let k = 0;
      // carga el arreglo del objeto con los valores seleccionados de la vista
      for (let index = 0; index < this.datoBasico.length; index++) {
        this.ser.valor_parametro[k] = this.datoBasico[index].id;
        
       k++;
      }
      
        this.ser.insumo_asociado = this.insumoSel
        console.log(this.ser)
      
     
      //Agregar Campos
     this.formData.append('id_tipo_servicio', this.ser.id_tipo_servicio);
      this.formData.append('nombre', this.ser.nombre);
      this.formData.append('descripcion', this.ser.descripcion);
      this.formData.append('duracion', this.ser.duracion);
      this.formData.append('precio', this.ser.precio);
      for(let i=0;i<this.ser.valor_parametro.length;i++){
        this.formData.append('valor_parametro[]',this.ser.valor_parametro[i]);
      }
      for(let i=0;i<this.ser.insumo_asociado.length;i++){
        this.formData.append('insumo_asociado[]',this.ser.insumo_asociado[i]);
      }
     // this.formData.append('valor_parametro', this.ser.valor_parametro);
      
      console.log('----------------------')
      console.log(this.ser.valor_parametro)
      console.log('----------------------')
      
      console.log(this.ser);
      console.log(this.formData);
      //Ejecutar postw
      this.gestion.addServicio(this.formData).subscribe((resp) => {
        this.msj = resp['data'].message;
        
        this.mostrarMensajeExito()
      }, (error) => {
          console.log(error);
        });
     }

     onFileChange(event) {
      this.files = event.target.files;
    }

    mostrarMensajeExito(): void {//opens the modal
      let dialogRef = this.dialog.open(MensajeExitoComponent, {
        width: '300px',//sets the width
        height: '140px', 
        data: { msj: 'Servicio registrado exitosamente' }//send this class's attributes to the modal
      });
    
      dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
        console.log('Modal closed!');
        this.router.navigate(['servicios']);
        //this.router.onSameUrlNavigation
        
      });  
    } 

}
