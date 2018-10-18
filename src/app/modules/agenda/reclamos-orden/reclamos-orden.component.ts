import { error } from 'util';
import { VistaEmpleadosCategoriaService } from './../../../provider/vista-empleados-categoria/vista-empleados-categoria.service';
import { AgregarOrdenService } from './../../../provider/agregar-orden/agregar-orden.service';
import { ReclamoService } from './../../../provider/reclamo/reclamo.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TipoRepuestaReclamoService } from '../../../provider/tipo-repuesta-reclamo/tipo-repuesta-reclamo.service';
import { RepuestaReclamoService } from '../../../provider/repuesta-reclamo/repuesta-reclamo.service';
import { VistaReclamoService } from '../../../provider/vista-reclamo/vista-reclamo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensajeExitoComponent } from '../../../mensajes/mensaje-exito/mensaje-exito.component';
import { Socket } from 'ng-socket-io';

interface Datos_reclamo{
	nombre: string;
	orden: string;
	fecha: Date;
	tipoR: string;
	descripcion: string;
	fechaV:Date;
}


@Component({
  selector: 'app-reclamos-orden',
  templateUrl: './reclamos-orden.component.html',
  styleUrls: ['./reclamos-orden.component.scss']
})
export class ReclamosOrdenComponent implements OnInit {
  //siempre va
 rec: Array<{
  id: number
  descripcion: string
  registro_reclamo: number
  id_servicio_solicitado: number
  dia_atendido: Date
  tipo_servicio: string
  srvicio_reclamado: string
  garantia: number
  id_solicitud: number
  id_cliente: number
  nombre: string
  apellido: string
  id_categoria_servicio: number
  categoria_servicio: string
  estado: string
}>

 recAux: Array<{
   id: number
   descripcion: string
   registro_reclamo: number
   id_servicio_solicitado: number
   dia_atendido: Date
   tipo_servicio: string
   srvicio_reclamado: string
   garantia: number
   id_solicitud: number
   id_cliente: number
   nombre: string
   apellido: string
   id_categoria_servicio: number
   categoria_servicio: string
   estado: string
 }>

 mostrar: boolean
 
 hoy= new Date();
  
  //siempre va eso asi  cambia el nombre de la clase 

  constructor(public dialog: MatDialog,
     public reclamo:VistaReclamoService,
     public repuesta:TipoRepuestaReclamoService,
     private route: ActivatedRoute,
     private router: Router,
     public socket: Socket,
     ) 
   {
      //this.getVistaReclamo();
      this.rec = []      
       this.recAux  = []      
       this.mostrar = false
   }

  ngOnInit() {
  this.getVistaReclamo(); 
  
  
  }

  limpiar(){
    this.rec = []      
    this.recAux  = []      
    this.mostrar = false
  }

  getVistaReclamo(){
    this.limpiar()
   this.reclamo.getVistaReclamo().subscribe((resp)=>{
     this.recAux= resp['data'];
     console.log(this.recAux);
     for(let i=0; i<this.recAux.length; i++){
       if(this.recAux[i].estado === 'P'){
         this.mostrar = true
         this.rec.push(this.recAux[i])
       }
     }

   },(error)=>{
     console.log(error);
   }
  )
}

  openDialog(reclamo){
    console.log(reclamo);
    this.repuesta.setIdReclamo(reclamo);
    const dialogRef = this.dialog.open( DarRepuestaComponent, {
      height: '320px',
      width: '420px',
      data: {rec: reclamo}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
      this.getVistaReclamo();
    });
  }
}


@Component({
  selector: 'app-dar-repuesta',
  templateUrl: './dar-repuesta.component.html',
  styleUrls: ['./dar-repuesta.component.scss']
})
export class DarRepuestaComponent {
  resp:any[]; 
  respuestarec:any;
  msj:string;
//selec pregunta
filtroSelec = '';
filtro = [
  {value: 'positiva', viewValue: 'Procede'},
  {value: 'negativa', viewValue: 'No procede'},
  
];
datosMostrar: {
  id_reclamo: number,
  id_tipo_repuesta_reclamo: number,
  descripcion: String,
};

estadoReclamo: {
  estado: string
}
reclamo: any

datosEnviar: {
  id_orden_servicio: number
  estado: string
  empleados_asignados: Array<{}>
}
empleadoCat: any
empleadoSelec: number
mostrar: boolean
cliente: any;
constructor(public dialog: MatDialog,
  public repuesta:TipoRepuestaReclamoService,
   public repuestaR:RepuestaReclamoService,
   public reclamoServ: ReclamoService,
   private route: ActivatedRoute,
   public agregOrd: AgregarOrdenService,
   public empl: VistaEmpleadosCategoriaService,
  private router: Router,
  private socket: Socket,
  public dialogRef: MatDialogRef<DarRepuestaComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
   ) 
{
  console.log(data)
  this.reclamo = data.rec
  console.log(this.reclamo)
  this.getRepuestaReclamo();
  this.datosMostrar = {
    id_reclamo: this.reclamo.id,
    id_tipo_repuesta_reclamo: 0,
    descripcion:'' ,
    
  };

  this.empleadoSelec = null
  this.datosEnviar = {
    id_orden_servicio: this.reclamo.id_orden_servicio,
    estado: 'V',
    empleados_asignados: []
  }
  this.mostrar = false
  this.estadoReclamo = {
    estado: ''
  }
  this.cliente = this.reclamo.id_cliente;
} 

ngOnInit() {
  this.getEmpleados()
}

getEmpleados(){
  this.empl.getEmpleadosCatEsp(this.reclamo.id_categoria_servicio).subscribe(
    (data) => {
      this.empleadoCat = data['data']
      console.log(this.empleadoCat)
    },(error) => {
        console.log(error)
    },
  )
}

imprimir(){
  if(this.datosMostrar.id_tipo_repuesta_reclamo == 1){
    this.mostrar = true;
  }else{
    this.mostrar = false;
  }
}
  getRepuestaReclamo(){
    this.repuesta.getRepuestaReclamo().subscribe((resp)=>{
      this.resp= resp['data'];
      console.log(this.resp);
  
    },(error)=>{
      console.log(error);
    }
   )
  }
  
  
  //guardar
  postRepuestaRec() {
    //this.datosMostrar.id_reclamo=this.repuesta.returnIdReclamo();
    
    this.repuestaR.postRepuestaRec(this.datosMostrar).subscribe((resp)=>{
      this.msj= resp['data'].message;
      if(this.datosMostrar.id_tipo_repuesta_reclamo === 1){
        this.estadoReclamo.estado = 'A'
        this.datosEnviar.empleados_asignados.push(this.empleadoSelec)
      }else {
        this.estadoReclamo.estado = 'R'
      }
      console.log('resp')
      this.reclamoServ.updateReclamo(this.datosMostrar.id_reclamo, this.estadoReclamo).subscribe(
        (data) => {
          this.notificar();
          console.log ('actualizado')
          console.log(this.datosEnviar)
          this.agregOrd.postOrden(this.datosEnviar).subscribe(
            (res)=>{
              console.log ('guardado')
              this.mostrarMensajeExito()
            }, (error)=>{
              console.log (error)
            }
          )
          
        }
      )
      console.log(this.msj);
       //alert(this.msj)
       
    },(error)=>{
      console.log(error);
    }
   )
  } 

  notificar() {
    this.socket.emit('nueva_respuesta_reclamo', {
      mensaje: 'Su reclamo ha sido procesado',
      cliente: this.cliente});
    }
mostrarMensajeExito(): void {//opens the modal
  let dialogRef = this.dialog.open(MensajeExitoComponent, {
    width: '300px',//sets the width
    height: '140px', 
    data: { msj: 'Respuesta enviada exitosamente' }//send this class's attributes to the modal
  });

  dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
    console.log('Modal closed!');
    this.router.navigate(['reclamosOrdenes']);
    this.dialogRef.close()
    //this.router.onSameUrlNavigation
    
  });  
}
}
