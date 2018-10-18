import { OrdenServicioService } from './../../../provider/orden-servicio/orden-servicio.service';
import { GestionDetalleServicioService } from './../../../provider/gestion-detalle-servicio/gestion-detalle-servicio.service';
import { VistaOrdenCitaService } from './../../../provider/vista-orden-cita/vista-orden-cita.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent } from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ServiciosService } from '../../../provider/servicios/servicios.service';
import { TiposServiciosService } from '../../../provider/tipos-servicios/tipos-servicios.service';
import { MensajeExitoComponent } from '../../../mensajes/mensaje-exito/mensaje-exito.component';
import { RazonIncidenciaService } from '../../../provider/razon-incidencia/razon-incidencia.service';
import { TipoIncidenciaService } from '../../../provider/tipo-incidecia/tipo-incidencia.service';
@Component({
  selector: 'app-registrar-detalle',
  templateUrl: './registrar-detalle.component.html',
  styleUrls: ['./registrar-detalle.component.scss']
})
export class RegistrarDetalleComponent implements OnInit {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  servicioPSeleccionados = [];
  datosGuardar: {
    id_orden_servicio: number;
    id_servicio_solicitado: number; 
    realizacion: boolean;
    id_tipo_incidencia: number;
    descripcion: string; 
    insumos: Array<{
      id_insumo: number;
      cantidad: number;
    }>
  }
  
  servicioMSeleccionados = ['Maquillaje de día'];
  
  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  insumos = [
    { name: 'Champú' },
    { name: 'Tinte' },
    { name: 'Gel' },
  ];

  serviciosM: Array <{}>;
  serviciosP: Array <{
    id: number;
      id_servicio_solicitado: number;
      id_solicitud: number;
      nombre_servicio: string;
      tipo_servicio: string
      insumos_asociados:  Array<{
        insumo_asociado: number
        id_insumo: number;
        id_servicio: number;
        id: number;
        nombre: string;
        tipo_insumo: string
        id_tipo_insumo: number
        cantidad: number
        unidad: number
        id_unidad: number
        utilizado: number
      }>
      select: boolean
  }>;
  ordenId: number; 
  orden: {
    id: number;
    id_solicitud: number;
    estado: string;
    status: string;
    solicitud: number;
    id_cliente: number;
    estado_s: string;
    cliente: number;
    nombre: string;
    apellido: string;
    citas: Array<{
      id: number;
      id_orden_servicio: number;
      fecha_creacion: string;
      estatus: string;
      estado: string;
      id_agenda: number;
      hora_inicio: string
    }>
    empleados_asignados: Array<{
      id: number;
      id_empleado: number;
      id_orden_servicio: number;
      nombre: string;
      apellido: string
      cedula: string
      telefono: string
      direccion: string
      fecha_nacimiento: string;
      sexo: string;
    }>
    servicios_solicitados: Array<{
      id: number;
      id_servicio_solicitado: number;
      id_solicitud: number;
      nombre_servicio: string;
      tipo_servicio: string
      insumos_asociados:  Array<{
        insumo_asociado: number
        id_insumo: number;
        id_servicio: number;
        id: number;
        nombre: string;
        tipo_insumo: string
        id_tipo_insumo: number
        cantidad: number
        unidad: number
        id_unidad: number
        utilizado: number
      }>
      select: boolean
    }>
  };
  nombreCliente: string;
  servicios: any;
  tipo: any;
  servP: boolean;
  servM: boolean;
  insumosUsados: any;
  estado: {
    estado: string
  }

  servAux: Array<{
    id: number;
      id_servicio_solicitado: number;
      id_solicitud: number;
      nombre_servicio: string;
      tipo_servicio: string
      insumos_asociados:  Array<{
        insumo_asociado: number
        id_insumo: number;
        id_servicio: number;
        id: number;
        nombre: string;
        tipo_insumo: string
        id_tipo_insumo: number
        cantidad: number
        unidad: number
        id_unidad: number
        utilizado: number
      }>
  }>
  incidenciaServ: Array<{
    id: number;
      id_servicio_solicitado: number;
      id_solicitud: number;
      nombre_servicio: string;
      tipo_servicio: string
      insumos_asociados:  Array<{
        insumo_asociado: number
        id_insumo: number;
        id_servicio: number;
        id: number;
        nombre: string;
        tipo_insumo: string
        id_tipo_insumo: number
        cantidad: number
        unidad: number
        id_unidad: number
        utilizado: number
      }>
  }>

  incidencia: Array <{
    id_servicio: number
    id_tipo_incidencia: number
    descripcion: string
    realizado: boolean
    nombre: string
  }>
  guardado: boolean
  fecha: string
  hora: string
  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    public ordenVista: VistaOrdenCitaService,
    public serviciosServ: ServiciosService,
    public tipoService: TiposServiciosService,
    public gestion: GestionDetalleServicioService,
    public ordenS: OrdenServicioService,
    
    ) { 
      this.fecha =''
      this.hora = ''
      this.serviciosM = []
      this.serviciosP = []
      this.incidenciaServ = []
      this.datosGuardar = {
        id_orden_servicio: null,
        id_servicio_solicitado: null, 
        realizacion: true,
        id_tipo_incidencia: null,
        descripcion: '',
        insumos: []
      }
      this.estado = {
        estado: ''
      }
      this.incidencia = []
      this.guardado = false
    }
    ngOnInit() {
      this.getOrdenInfo()
    }
    myFunctiondeAyuda(la_url: string){
      return window.open(la_url, '_blank');
      }

    incidencias(){
      let find = false;
      for(let i=0; i<this.orden.servicios_solicitados.length; i++){
        find = false;
        for(let j=0; j<this.servAux.length; j++){
          if(this.servAux[j] === this.orden.servicios_solicitados[i]){
            find = true;
            j = this.servAux.length
          }
        } 
        console.log(find)
        if(!find){
          this.incidenciaServ.push(this.orden.servicios_solicitados[i])
        }
        console.log(this.incidenciaServ)
      }
    }

    postOrden(){
      let insumoAux ={
        id_insumo: null,
        cantidad: null
      }
      let done = false
      
      console.log(this.orden)
      for(let i=0; i<this.orden.servicios_solicitados.length; i++){
        this.datosGuardar = {
          id_orden_servicio: null,
          id_servicio_solicitado: null, 
          realizacion: true,
          id_tipo_incidencia: null,
          descripcion: '',
          insumos: []
        }
        this.datosGuardar.id_orden_servicio = this.orden.citas[0].id_orden_servicio
        done = false
        //this.datosGuardar.id_servicio_solicitado = this.orden[i].servicios_solicitados.id_servicio_solicitado 
        for(let k=0; k<this.servAux.length; k++){
            if(this.servAux[k].id_servicio_solicitado === this.orden.servicios_solicitados[i].id_servicio_solicitado){
              this.datosGuardar.realizacion = true;
              this.datosGuardar.id_servicio_solicitado = this.servAux[k].id_servicio_solicitado
              done = true;              
                for(let j=0; j<this.orden.servicios_solicitados[i].insumos_asociados.length; j++){
                  insumoAux.id_insumo = this.orden.servicios_solicitados[i].insumos_asociados[j].id_insumo;
                  insumoAux.cantidad = this.orden.servicios_solicitados[i].insumos_asociados[j].utilizado;
                  this.datosGuardar.insumos.push(insumoAux)  
                }             
              k = this.servAux.length
            }
          }
        

        if(!done){
          for(let k=0; k<this.incidencia.length; k++){
            
              if(this.incidencia[k].id_servicio === this.orden.servicios_solicitados[i].id_servicio_solicitado){
                this.datosGuardar.realizacion = false;
                this.datosGuardar.id_tipo_incidencia = this.incidencia[k].id_tipo_incidencia
                this.datosGuardar.descripcion = this.incidencia[k].descripcion
                this.datosGuardar.id_servicio_solicitado = this.incidencia[k].id_servicio
                
            
                k = this.servAux.length
              }
            
          } 
          console.log(done)
          console.log(this.datosGuardar)
        }

        this.gestion.postDetalle(this.datosGuardar).subscribe(
          (data) => {        
            console.log(data)  
            this.estado.estado = "R"
            this.ordenS.putOrden(this.orden.citas[0].id_orden_servicio, this.estado).subscribe(
              (res) => {
                
              }, (error) => {
                console.log(error)
              }
            )
           
          }, (error) => {
            console.log(error)          
          }
        )               
        console.log(this.datosGuardar)
      }
      this.mostrarMensajeExito()
    }
    mostrarMensajeExito(): void {//opens the modal
      let dialogRef = this.dialog.open(MensajeExitoComponent, {
        width: '300px',//sets the width
        height: '140px', 
        data: { msj: 'Registro realizado exitosamente' }//send this class's attributes to the modal
      });    
      dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
        console.log('Modal closed!');
        this.router.navigate(['solicitudes']);
        //this.router.onSameUrlNavigation        
      });  
    }
    
    getServSelec(){
      console.log(this.serviciosP)
      console.log(this.servAux)
      this.incidencias();
    }
    getOrdenInfo(){
      ///
      this.route.paramMap.subscribe((params: ParamMap) => {
        let id = parseInt(params.get('id'));
        this.ordenId = id;
      });
      ///
      this.ordenVista.getOrdenCitaEspec(this.ordenId).subscribe(
        (data) => {
          this.orden = data['data']
          this.nombreCliente = this.orden.nombre + ' ' + this.orden.apellido  
          for(let i=0; i<this.orden.servicios_solicitados.length; i++){
            this.serviciosServ.getServicioEspec(this.orden.servicios_solicitados[i].id).subscribe(
              (data) => {
                  this.servicios = data ['data']
                  this.tipoService.getTipoServicioEsp(this.servicios.id_tipo_servicio).subscribe(
                    (res) =>{
                        this.tipo = res ['data']
                        /*if(this.tipo.id_categoria_servicio === 1){
                          this.serviciosP.push(this.orden.servicios_solicitados[i])
                          this.servP = true;
                        }else if(this.tipo.id_categoria_servicio === 2){
                          this.serviciosM.push(this.orden.servicios_solicitados[i])
                          this.servM = true;
                        }*/
                    }, (error) => {
                            console.log(error)
                        }
                  )
              }, (error) => {
                  console.log(error)
              }
            )
          }
        }, (error) =>{
          console.log(error)
        }

      )
    }

    getServicios(){
      for(let i=0; i<this.orden.servicios_solicitados.length; i++){
        this.serviciosServ.getServicioEspec(this.orden.servicios_solicitados[i].id).subscribe(
          (data) => {
              this.servicios = data ['data']
              this.tipoService.getTipoServicioEsp(this.servicios.id_tipo_servicio).subscribe(
                (res) =>{
                    this.tipo = res ['data']
                  /*  if(this.tipo.id_categoria_servicio === 1){
                      this.serviciosP.push(this.orden.servicios_solicitados[i])
                    }else if(this.tipo.id_categoria_servicio === 2){
                      this.serviciosM.push(this.orden.servicios_solicitados[i])
                    }*/
                }, (error) => {
                        console.log(error)
                    }
              )
          }, (error) => {
              console.log(error)
          }
        )
      }
    }
  openDialog(){
    this.incidencias();
    const dialogRef = this.dialog.open(IncidenciaServicioComponent, {
      height: '350px',
      width: '500px',
      data: {serv: this.incidenciaServ}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
      this.incidencia.push(this.ordenS.getIncidencia())
      console.log(this.incidencia)
      console.log('lo hice')
    });
 }
  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.insumos.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(servicios: any): void {
    /*let index = this.serviciosP.indexOf(servicios);

    if (index >= 0) {
      this.serviciosP.splice(index, 1);
    }*/
    let index = this.orden.servicios_solicitados.indexOf(servicios);

    if (index >= 0) {
      this.orden.servicios_solicitados.splice(index, 1);
    }
  }
  

}

@Component({
  selector: 'app-incidencia-servicio',
  templateUrl: './incidencia-servicio.component.html',
  styleUrls: ['./incidencia-servicio.component.scss']
})
export class IncidenciaServicioComponent {
  filtro = [
    {value: 'corte', viewValue: 'Corte de cabello'},
    {value: 'tinte', viewValue: 'Aplicación de tinte'},
    
  ];
  razon: any;
  razonSelec: number;
  incidencia:  Array<{
    id: number
    id_razon_incidencia: number
    nombre: string
    fecha_creacion: string
    estatus: string
  }>;
  incidenciaAux: Array<{
    id: number
    id_razon_incidencia: number
    nombre: string
    fecha_creacion: string
    estatus: string
  }>;
  servAux: any;
  datosEnviar: {
    id_servicio: number;
    id_tipo_incidencia: number;
    descripcion: string;
    nombre: string
  }
  constructor(public dialogRef: MatDialogRef<IncidenciaServicioComponent>,
    public razonServ: RazonIncidenciaService,
    public dialog: MatDialog, 
    public tipoInc: TipoIncidenciaService,
    public orden: OrdenServicioService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.servAux = data.serv;
      this.datosEnviar = {
        id_servicio: null,
        id_tipo_incidencia: null,
        descripcion: '',
        nombre: ''
      }
     }
    onNoClick(): void {
      this.dialogRef.close();
    }
  ngOnInit() {
    this.getRazon()
  }
  mostrar(){
    console.log(this.datosEnviar)
    for(let i=0; i<this.servAux.length; i++){
      if(this.datosEnviar.id_servicio === this.servAux[i].id_servicio_solicitado){
        this.datosEnviar.nombre = this.servAux[i].tipo_servicio + this.servAux[i].nombre_servicio
        i = this.servAux.length
      }
    }
    this.orden.setIncidencia(this.datosEnviar)
    this.dialogRef.close();
  }
  getRazon(){
    this.razonServ.getRazonInc().subscribe(
      (data) => {
        this.razon = data['data']
      }, (error) => {
        console.log(error);
      }
    )
  }
  
  //se ejecuta al seleccionar la razón para poder conseguir los tipos de esa razón
  getTipoIncidencia(){
    this.tipoInc.getTipoIncidencia().subscribe(
    (data)=>{
      this.incidencia = data['data']
      this.incidenciaAux = []
      for(let i = 0; i <this.incidencia.length; i++){
        if(this.incidencia[i].id_razon_incidencia === this.razonSelec){
          this.incidenciaAux.push(this.incidencia[i])
        }
      }
    },(error) => {
      console.log(error);
    }
    )
  }

}
