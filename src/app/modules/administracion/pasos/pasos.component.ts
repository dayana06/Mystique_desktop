
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { variable } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionConsejoService } from '../../../provider/gestion-consejo/gestion-consejo.service';
import { ConsejosService } from '../../../provider/consejos/consejos.service';
import { MensajeExitoComponent } from '../../../mensajes/mensaje-exito/mensaje-exito.component';
import { ParametrosService } from '../../../provider/parametros/parametros.service';
import { ValoresParametrosService } from '../../../provider/valores-parametros/valores-parametros.service';
import { TiposParametrosService } from '../../../provider/tipos-parametros/tipos-parametros.service';

@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.scss']
})
export class PasosComponent implements OnInit {
  con: {
  
    id: any;
    titulo:any;
    descripcion: any;
    autor: any;
    imagen: any;
    estatus: String;
    fecha_creacion: Date;
    visible: boolean,
    valor_parametro: any[];
    };
  inputEl: any;
  fileCount: number;
  formData = new FormData();


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
  constructor(public dialog: MatDialog, public parametroServ: ParametrosService, public tipo_para_serv: TiposParametrosService,
    public valor_para_ser: ValoresParametrosService, public consej: ConsejosService, public gestion: GestionConsejoService, private route: ActivatedRoute,
    private router: Router, ) {
  

    }

  ngOnInit() {
    this.getTipoParametros();
    this.getValorParametros();
    this.getParametros();
    this.getConsejo();

  
   
    this.con = {
      id: null,
      titulo: '',
      descripcion: '',
       autor: '',
      imagen:  '',
      estatus: '',
      visible: true,
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

  getConsejo() {
    this.consej.getConsejo().subscribe((resp) => {
      this.servicio = resp['data'];
      console.log(this.servicio);
    }, (error) => {
        console.log(error);
      });
    }

    addConsejoyValores() {
        //agregar imagen
        this.inputEl = document.getElementById('fileInput');
        this.fileCount = this.inputEl.files.length;

        if (this.fileCount > 0) {
          this.formData.append('archivo', this.inputEl.files.item(0));
        }

        //arreglo valors
        let k = 0;
      // carga el arreglo del objeto con los valores seleccionados de la vista
      for (let index = 0; index < this.datoBasico.length; index++) {
        this.con.valor_parametro[k] = this.datoBasico[index].id;
        
       k++;
      }
    
      //Agregar Campos
     
      this.formData.append('titulo', this.con.titulo);
      this.formData.append('descripcion', this.con.descripcion);
      this.formData.append('autor', this.con.autor);
      
    for(let i=0;i<this.con.valor_parametro.length;i++){
      this.formData.append('valor_parametro[]',this.con.valor_parametro[i]);
      }
      //this.formData.append('valor_parametro', this.con.valor_parametro);
      
      console.log('----------------------');
      console.log(this.con.valor_parametro);
      console.log('----------------------');
      
      console.log(this.con);
      console.log(this.formData);
      //Ejecutar postw
      this.gestion.addConsejo(this.formData).subscribe((resp) => {
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
        data: { msj: 'Consejo creado exitosamente' }//send this class's attributes to the modal
      });
    
      dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
        console.log('Modal closed!');
        this.router.navigate(['consejos']);
        //this.router.onSameUrlNavigation
        
      });  
    } 
}
