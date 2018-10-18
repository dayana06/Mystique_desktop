import { IncidenciaOrdenService } from './../../../provider/incidencia-orden/incidencia-orden.service';
import { VistaOrdenCitaService } from './../../../provider/vista-orden-cita/vista-orden-cita.service';
import { RazonIncidenciaService } from './../../../provider/razon-incidencia/razon-incidencia.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TipoIncidenciaService } from '../../../provider/tipo-incidecia/tipo-incidencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenServicioService } from '../../../provider/orden-servicio/orden-servicio.service';
import { CitaService } from '../../../provider/cita/cita.service';
import { MensajeExitoComponent } from '../../../mensajes/mensaje-exito/mensaje-exito.component';
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
  selector: 'app-dashboard-empleado',
  templateUrl: './dashboard-empleado.component.html',
  styleUrls: ['./dashboard-empleado.component.scss']
})
export class DashboardEmpleadoComponent implements OnInit {
  orden: Array<{
    id: number
    id_solicitud: number
    estatus: string
    estado: string
    solicitud: number
    id_cliente: number
    estado_s: string
    cliente: number
    nombre: string
    apellido: string
    empleados_asignados: Array<{}>
    servicios_solicitados: Array<{}>
    citas: Array<{}>
  }>
  atender: boolean
  ordenAux: any
  fecha: Date
  fechaCit: Date
  constructor(
    public dialog: MatDialog, 
    public vistaOrden: VistaOrdenCitaService,
    private router: Router, private route: ActivatedRoute
    ) {
      this.orden = []
      this.fecha = new Date()
      this.fechaCit =  new Date()
     }

  ngOnInit() {
    this.getOrden();
  }

  getOrden(){
    let fec='' 
    let fecCit=''
    let id = Number(localStorage.getItem('id'))
    console.log(id)
    
    let inicio = '';
      let fin = '';
      let dia = ''
      let mes = ''
      if (this.fecha != null) {
          if(this.fecha.getDate() <10){
            dia = '0'+this.fecha.getDate()
          }else{
            dia = ''+this.fecha.getDate()
          }
          if(this.fecha.getMonth() < 9){
            mes = '0'+(this.fecha.getMonth()+1)
            console.log('menlr')
          }else if(this.fecha.getMonth() === 9){
            mes = '0'+this.fecha.getMonth()
            console.log('igual')
          }else{
            mes = ''+(this.fecha.getMonth()+1)
            console.log('mayor')
          }
          if(this.fecha.getMonth() < 9){
            fec = this.fecha.getFullYear() + '-0'+ (this.fecha.getMonth()+1) + '-' + dia       
          }else{
            fec = this.fecha.getFullYear() + '-'+ (this.fecha.getMonth()+1) + '-' + dia       
          }        
       console.log(fec)
      }
    this.vistaOrden.getOrdenCita().subscribe(
      (data) => {
        this.ordenAux = data['data']
        console.log(this.ordenAux)
        for(let i=0; i<this.ordenAux.length; i++){          
          if(this.ordenAux[i].estado === "E"){
           for(let j=0; j<this.ordenAux[i].empleados_asignados.length; j++){
             console.log(fec)
             console.log(this.ordenAux[i].citas[0].horario_empleado.dia)
             this.fechaCit = new Date(this.ordenAux[i].citas[0].horario_empleado.dia);
             console.log(this.fechaCit)
             if (this.ordenAux[i].citas[0].horario_empleado.dia != null) {
              if(this.fechaCit.getDate() <10){
                dia = '0'+this.fechaCit.getDate()
              }else{
                dia = ''+this.fechaCit.getDate()
              }
              if(this.fechaCit.getMonth() < 9){
                mes = '0'+(this.fechaCit.getMonth()+1)
                console.log('menlr')
              }else if(this.fechaCit.getMonth() === 9){
                mes = '0'+this.fechaCit.getMonth()
                console.log('igual')
              }else{
                mes = ''+(this.fechaCit.getMonth()+1)
                console.log('mayor')
              }
              if(this.fechaCit.getMonth() < 9){
                fecCit = this.fechaCit.getFullYear() + '-0'+ (this.fechaCit.getMonth()+1) + '-' + dia       
              }else{
                fecCit = this.fechaCit.getFullYear() + '-'+ (this.fechaCit.getMonth()+1) + '-' + dia       
              }        
           console.log(fec)
           console.log(fecCit)
          }
              if(this.ordenAux[i].empleados_asignados[j].id_empleado === id && fecCit === fec){
                this.orden.push(this.ordenAux[i])
              }
            }        
          }
        }
        console.log(this.orden)

        if(this.orden.length > 0){
          this.atender = true
        }else{
          this.atender = false
        }      
      }
    )
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //  this.dataSource.filter = filterValue;
  }

  irARegistro(cli) {
    this.router.navigate(['cita/registrarDetalle/'+cli.id]);
 }

  openDialog(agenda){
    const dialogRef = this.dialog.open(CancelarComponent, {
      height: '600px',
      width: '500px',
      data: {cita: agenda}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
 }

}


@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.scss']
})
export class CancelarComponent  {
  tipo: Array<{
    value: number,
    viewValue: string
  }>
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
  cita: any;
  razon: any;
  razonSelec: number;
  nombreCliente: string;
  datosEnviar: {
    id_orden_servicio: number
    id_tipo_incidencia: number
    descripcion: string
  }
  estado:{
    estado: string
  }

  constructor(public tipoInc: TipoIncidenciaService,
    public razonServ: RazonIncidenciaService,
    public dialogRef: MatDialogRef<CancelarComponent>,
    public dialog: MatDialog, 
    public incidenciaOrden: IncidenciaOrdenService, 
    public ordenServ: OrdenServicioService,
    public citaServ: CitaService,
    @Inject(MAT_DIALOG_DATA) public data: any){
    this.tipo = []
    this.cita = data.cita
    console.log(this.cita)
    this.incidencia = []
    this.incidenciaAux = []
    this.nombreCliente = this.cita.nombre + ' ' + this.cita.apellido
//    this.datosEnviar.id_orden_servicio = this.cita.citas[0].id_orden_servicio
    this.datosEnviar = {
      id_orden_servicio: this.cita.citas[0].id_orden_servicio,
      id_tipo_incidencia: null,
      descripcion: ''
    }
    this.estado = {
      estado: 'K'
    }
    
  } 
  
  ngOnInit() {
  //  this.getTipoIncidencia();
    this.getRazon()
  }
  enviar(){
    console.log(this.datosEnviar)
    this.incidenciaOrden.postIncidencia(this.datosEnviar).subscribe(
      (data) => {
        console.log('guardado')
        this.citaServ.putOrden(this.cita.citas[0].id, this.estado).subscribe(
          (data) => {
            console.log('actualizado cita')
          }, (error) => {
            console.log(error)
          }        
        )
        this.ordenServ.putOrden(this.cita.citas[0].id, this.estado).subscribe(
          (data) => {
            console.log('actualizado orden ')
          }, (error) => {
            console.log(error)
          }        
        )
        this.mostrarMensajeExito();
      }, (error) => {
        console.log(error)
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
  

mostrarMensajeExito(): void {//opens the modal
  let dialogRef = this.dialog.open(MensajeExitoComponent, {
    width: '300px',//sets the width
    height: '140px', 
    data: { msj: 'Cita cancelada exitosamente' }//send this class's attributes to the modal
  });

  dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
    console.log('Modal closed!');
    //this.router.navigate(['solicitudes']);
    //this.router.onSameUrlNavigation
    
  });  
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
}