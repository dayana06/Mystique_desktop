import { VistaEmpleadosCategoriaService } from './../../../provider/vista-empleados-categoria/vista-empleados-categoria.service';
import { TipoRespSolicitudService } from './../../../provider/tipo-resp-solicitud/tipo-resp-solicitud.service';
import { EspecialidadService } from './../../../provider/especialidad/especialidad.service';
import { RespuestaSolicitudService } from './../../../provider/respuesta-solicitud/respuesta-solicitud.service';

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VistaSolicitudService } from './../../../provider/vista-solicitud/vista-solicitud.service';
import { ServicioSolicitadoService } from './../../../provider/servicio-solicitado/servicio-solicitado.service';
import { SolicitudService } from '../../../provider/solicitud/solicitud.service';
import { ClientesService } from '../../../provider/clientes/clientes.service';
import { EmpleadosService } from '../../../provider/empleados/empleados.service';

import { MensajeExitoComponent } from '../../../mensajes/mensaje-exito/mensaje-exito.component';
import { ActivatedRoute, Router} from '@angular/router';
import { PresupuestoService } from '../../../provider/presupuesto/presupuesto.service';
import { ServiciosService } from '../../../provider/servicios/servicios.service';
import { PromocionesService } from '../../../provider/promocion/promociones.service';
import { TiposServiciosService } from '../../../provider/tipos-servicios/tipos-servicios.service';
import { Socket } from 'ng-socket-io';
interface Detalle{
  clientName: string;
  servicios: string;
  empleado: string;
  type: string;
  icon: boolean;
  iconName?: string;
  codigo: string;
  fecha?: string;
  
}

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {
  solicitud: Array<{
    id: number,
    id_cliente: number,
    id_promocion: number,
    nombre: string,
    apellido: string,
    cantidad_servicios: number,
    empleado: Array<{}>,
    servicios_solicitados: Array <{
      id: number,
      id_servicio: number,
      solicitud: number,
      nombre_servicio: string,
      tipo_servicio: string,
    }>,
    empleadoP_nombre: string,
    empleadoM_nombre: string,
    empleadoP_apellido: string,
    empleadoM_apellido: string,
    estado: string,
    empleadoBusqueda:Array<{
      id: number,
      nombre: string,
      apellido: string, 
      cedula: string,
      telefono: string,
      direccion: string,
      fecha_nacimiento: string,
      estatus: string,
      id_ciudad: number,
      id_usuario: number,
      imagen: string,
      sexo: string,
    }>
  }>;
  busqueda:any;
  pendientes: boolean
  solicitudAux: Array<{
    id: number,
    id_cliente: number,
    id_promocion: number,
    nombre: string,
    apellido: string,
    cantidad_servicios: number,
    empleado: Array<{}>,
    servicios_solicitados: Array <{
      id: number,
      id_servicio: number,
      solicitud: number,
      nombre_servicio: string,
      tipo_servicio: string,
    }>,
    empleadoP_nombre: string,
    empleadoM_nombre: string,
    empleadoP_apellido: string,
    empleadoM_apellido: string,
    estado: string,
    empleadoBusqueda:Array<{
      id: number,
      nombre: string,
      apellido: string, 
      cedula: string,
      telefono: string,
      direccion: string,
      fecha_nacimiento: string,
      estatus: string,
      id_ciudad: number,
      id_usuario: number,
      imagen: string,
      sexo: string,
    }>
  }>;
  constructor(
    public dialog: MatDialog,
    public solic: VistaSolicitudService,
    public empleado: EmpleadosService,
    
  ) { 
    this.solicitud = []
     this.pendientes = false
     this.solicitudAux = [{
      id: 0,
      id_cliente: 0,
      id_promocion: 0,
      nombre: '',
      apellido: '',
      empleado: [],
      cantidad_servicios: 0,
      servicios_solicitados: [],
      empleadoP_nombre: '',
      empleadoM_nombre: '',
      empleadoP_apellido: '',
      empleadoM_apellido: '',
      estado: '',
      empleadoBusqueda:[]
    }]
    
  }

  ngOnInit() {
    this.getSolicitud();
  }

  getSolicitud(){
    this.solic.getSolicitud().subscribe(
      (data)=>{
        this.solicitudAux = data ['data'];       
        console.log(this.solicitud.length)
        console.log(this.solicitudAux)
        for(let i = 0; i<this.solicitudAux.length; i++){
          
          if(this.solicitudAux[i].estado === 'P'){
            this.solicitud.push(this.solicitudAux[i])
          }
          
        }
        if(this.solicitud.length > 0){
          this.pendientes = true
        }

        for(let i = 0; i<this.solicitud.length; i++){
          if(this.solicitud[i].empleado.length > 0){
            this.solicitud[i].empleadoBusqueda=[];
            for(let j=0; j<this.solicitud[i].empleado.length; j++){
              this.empleado.getEmpleadoEspecifico(this.solicitud[i].empleado[j]).subscribe(
                (res) => {
                  this.busqueda=res['data'];
                  this.solicitud[i].empleadoBusqueda.push(this.busqueda);
                },(error) =>{
                  console.log(error)
                }
                )
            }
          }
        }
        console.log(this.solicitud)
      },(error) =>{
        console.log(error);
      }
    )    
  }
  
  openDialogResponder(solicitud){
    const dialogRef = this.dialog.open(ResponderSolicitudComponent, {
      height: '600px',
      width: '500px',
      data: {solic: solicitud}
    });
  
    dialogRef.afterClosed().subscribe(result => {
  
    });}
    
}

@Component({
  selector: 'app-responder-solicitud',
  templateUrl: './responder-solicitud.component.html',
  styleUrls: ['./responder-solicitud.component.scss']
})
export class ResponderSolicitudComponent {
  tipoRespSelec: number;
  solicitud: any;
  cliente: string;
  servicios: any;
  empleadoP: number;
  empleadoM: number;
  empleadosPeluAux: boolean
  empleadosMaquiAux: boolean
  empleadosBD: any;
  especialidadEmpleado: any;
  enviarResp: {
    id_solicitud: number;
    id_tipo_respuesta_solicitud: number;
    descripcion: string;
  };
  actualizarSolic: {
    estado: string;
    empleado: Array<{}>
  }
  tipoRespuestas: any;
  empleadosPeluq: Array<{
    apellido:"",
    cedula:"",
    direccion:"",
    fecha_nacimiento:"",  
    id:0,
    id_categoria_servicio:0,
    id_empleado:0,
    nombre:"",
    sexo:"",
    telefono:""}>;

  empleadosMaquil: Array<{
    apellido:"",
    cedula:"",
    direccion:"",
    fecha_nacimiento:"",  
    id:0,
    id_categoria_servicio:0,
    id_empleado:0,
    nombre:"",
    sexo:"",
    telefono:""
  }>;
  empleadosCategoria: any;
  catPelu: boolean;
  catMaqui: boolean;
  espec: any;
  presupuesto: {
    id_solicitud: number;
    monto_total: number;
  }
  promciones: any;
  busqServ: any;
  servP:boolean;
  servM: boolean;
  tipo: any;
  sexo: boolean
  constructor(public dialogRef: MatDialogRef<ResponderSolicitudComponent>,
    private route: ActivatedRoute,
    public dialog: MatDialog, 
    private router: Router,
    public respuesta: RespuestaSolicitudService,
    public empleados: EmpleadosService,
    public tipoResp: TipoRespSolicitudService,
    public especialidad: EspecialidadService,
    public empleadosCat: VistaEmpleadosCategoriaService,
    public actSolic: SolicitudService,
    public servPresup: PresupuestoService,
    public service: ServiciosService,
    public promo: PromocionesService,
    public tipoServ: TiposServiciosService,
    public socket: Socket,
    @Inject(MAT_DIALOG_DATA) public data: any){
  
      this.tipoRespSelec = 1;
    this.solicitud = data.solic;   
    
    this.cliente = this.solicitud.nombre + ' ' + this.solicitud.apellido;
    this.servicios = [];
    for(let i=0; i<this.solicitud.servicios_solicitados.length; i++){
      this.servicios.push(this.solicitud.servicios_solicitados)
    }
    this.empleadoM = null
    this.empleadoP = null
    this.enviarResp = {
      id_solicitud: this.solicitud.id,
      id_tipo_respuesta_solicitud: null,
      descripcion: ''
    }    
    this.actualizarSolic = {
      estado: this.solicitud.estado,
      empleado:[]    
     } 
    if(this.solicitud.empleado != null){
      this.actualizarSolic.empleado = this.solicitud.empleado
    }
    
    console.log(this.solicitud)
    this.empleadosPeluq = []
    this.empleadosMaquil = []
    this.empleadosPeluAux = false
    this.empleadosMaquiAux = false
    this.catMaqui = true
    this.catPelu = true
    this.presupuesto = {
      id_solicitud: this.solicitud.id,
      monto_total: 0
    }
    this.servM = false
    this.servP = false
    if(this.solicitud.sexo === 'cualquiera'){
      this.sexo = false
    }else{
      this.sexo = true
    }
    
  }
  
  ngOnInit() {  
    this.getPresupuesto();
    this.getEmpleadosCat();  
    this.getTipoResp();
    this.getEmpleados();
    
  }

  getEmpleados(){
    //Para saber la categoría de los servicios escogidos
    for(let i=0; i<this.solicitud.servicios_solicitados.length; i++) {
        this.service.getServicioEspec(this.solicitud.servicios_solicitados[i].id_servicio).subscribe(
        (data) => {
          this.busqServ = data['data']
          this.tipoServ.getTipoServicioEsp(this.busqServ.id_tipo_servicio).subscribe(
            (res)=>{
                this.tipo = res['data']
                if(this.tipo.id_categoria_servicio === 1){
                  this.servP = true
                }else if(this.tipo.id_categoria_servicio === 2){
                  this.servM = true                  
                }
            }, (error) =>{
              console.log(error)
            }
          )
          
        }, (error) =>{
          console.log(error)
        }
        )
    }
    if(this.solicitud.empleado.length > 0){  
      if(this.solicitud.empleado.length === 2){
        this.catMaqui = false
        this.catPelu = false
      }else if(this.solicitud.empleado.length === 1){
        this.especialidad.getEspecialidad().subscribe(
          (data)=>{
            this.espec = data['data']
            for(let i = 0; i<this.espec.length; i++){
              if(this.espec[i].id_empleado === this.solicitud.empleado[0]){
                if(this.espec[i].id_categoria_servicio === 1){
                  this.catPelu = false
                }else if(this.espec[i].id_categoria_servicio === 2){
                  this.catMaqui = false
                }
              }
            }
          }, (error)=>{
            console.log(error)  
          }
        )
      }
    }    
  }
  getEmpleadosCat(){
    
    this.empleadosCat.getEmpleadosCat().subscribe(
      (data)=>{
        this.empleadosCategoria = data['data']       
        console.log(this.empleadosCategoria)
        for (let i = 0; i < this.empleadosCategoria.length; i++){
          console.log(i)
          console.log(this.sexo)
          if(!this.sexo){
            if(this.empleadosCategoria[i].id === 1){
              this.empleadosPeluq=this.empleadosCategoria[i].empleados
              
            }else if(this.empleadosCategoria[i].id === 2){
              this.empleadosMaquil=this.empleadosCategoria[i].empleados
              
            }
          }else if(this.sexo ){
            if(this.empleadosCategoria[i].id === 1 ){
              
              for(let j=0; j<this.empleadosCategoria[i].empleados.length; j++){
              
                if(this.empleadosCategoria[i].empleados[j].sexo === this.solicitud.sexo){
                  this.empleadosPeluq.push(this.empleadosCategoria[i].empleados[j])
              
                }
              }              
            }else if(this.empleadosCategoria[i].id === 2){
              for(let j=0; j<this.empleadosCategoria[i].empleados.length; j++){
                if(this.empleadosCategoria[i].empleados[j].sexo === this.solicitud.sexo){
                  this.empleadosMaquil.push(this.empleadosCategoria[i].empleados[j])
              
                }
              }
              
            }
          }
          
        }
      }
    )
  }

  getTipoResp(){
    this.tipoResp.getTipoRespSolicitud().subscribe(
      (data)=>{
        this.tipoRespuestas = data['data']
      },(error)=>{
        console.log(error)
      }

    )
  }

  getPresupuesto(){
    console.log('id')
    console.log(this.solicitud.id_promocion)
    if(this.solicitud.id_promocion != null){
        this.promo.getPromocionEspec(this.solicitud.id_promocion).subscribe(
          (data) => {
            this.promciones = data ['data']
            console.log('prommo')
            console.log(this.promciones)
            this.presupuesto.monto_total = this.presupuesto.monto_total + this.promciones.precio_promocion
            console.log(this.presupuesto)
          }
        )
    }else{
      for(let i = 0; i<this.solicitud.servicios_solicitados.length; i++){
          this.service.getServicioEspec(this.solicitud.servicios_solicitados[i].id_servicio).subscribe(
            (data) => {
              this.busqServ = data['data']       
              this.presupuesto.monto_total = this.presupuesto.monto_total + this.busqServ.precio
              
            }, (error) => {
              
            }
            
          )
      }
    }
  }
    responder(){
      this.respuesta.registrarRespSolic(this.enviarResp).subscribe(
        (res)=>{
          
          if(this.enviarResp.id_tipo_respuesta_solicitud === 1){
            this.actualizarSolic.estado = 'E'

            
          }else{
            this.actualizarSolic.estado = 'D'
          }
            if(this.solicitud.empleado.length === 0){
              
              if(this.empleadoP != null){
                this.actualizarSolic.empleado.push(this.empleadoP)
              }                
                if(this.empleadoM != null){
                  this.actualizarSolic.empleado.push(this.empleadoM)
                }
                
                console.log(this.actualizarSolic)              
            }else {
                  this.actualizarSolic.empleado = this.solicitud.empleado
              
            }

          this.actSolic.updateSolicitud(this.solicitud.id, this.actualizarSolic).subscribe(
            (data) => {
              this.notificar();
              if(this.actualizarSolic.estado === 'E'){
                this.servPresup.postPresupuesto(this.presupuesto).subscribe(
                  (data)=>{
                    
                    console.log('OK')
                  },(error)=>{
                    console.log(error)
                  }
                )
              }
              
              this.dialogRef.close();
              this.mostrarMensajeExito();
            },(error) =>{
              console.log(error);
            } 
          )
        },(error)=>{
          console.log(error);
        }
      )
    }

    notificar() {
      this.socket.emit('nueva_respuesta_solicitud',{
        mensaje: 'Su solicitud ha sido porcesada',
        cliente: this.solicitud.id_cliente});
      }

mostrarMensajeExito(): void {//opens the modal
  let dialogRef = this.dialog.open(MensajeExitoComponent, {
    width: '300px',//sets the width
    height: '140px', 
    data: { msj: 'Respuesta enviada exitosamente' }//send this class's attributes to the modal
  });

  dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
    console.log('Modal closed!');
    this.router.navigate(['solicitudes']);
    //this.router.onSameUrlNavigation
    
  });  
}

  getServiciosSol(){
    for(let i=0; i<this.solicitud.vista_servicio_solicitado.length; i++){
      this.servicios = this.solicitud.vista_servicio_solicitado.tipo_servicio + this.solicitud.vista_servicio_solicitado.nombre
      if (i+1 < this.solicitud.vista_servicio_solicitado.length){
        this.servicios = this.servicios + ', '
      }
    }
  }
}