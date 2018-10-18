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

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {

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
    empleados_asignados: any[]
    servicios_solicitados: any[]
    citas: any[]
    fecha: string
  }>
  atender: boolean
  ordenAux: any
  constructor(
    public dialog: MatDialog, 
    public vistaOrden: VistaOrdenCitaService,
    private router: Router, private route: ActivatedRoute
    ) {
      this.orden = []
     }

  ngOnInit() {
    this.getOrden();
  }

    getOrden(){
      
    let id = Number(localStorage.getItem('id'))
    console.log(id)
    this.vistaOrden.getOrdenCita().subscribe(
      (data) => {
        this.ordenAux = data['data']
        console.log(this.ordenAux)
        for(let i=0; i<this.ordenAux.length; i++){          
          if(this.ordenAux[i].estado === "E"){
           for(let j=0; j<this.ordenAux[i].empleados_asignados.length; j++){
              if(this.ordenAux[i].empleados_asignados[j].id_empleado === id){
                this.orden.push(this.ordenAux[i])
              }
            }        
          }
        }
        for(let i=0; i<this.orden.length; i++){
          console.log(i)
          for(let j=0; j<this.ordenAux.length; j++){
            console.log(j)
            if(this.ordenAux[j].id === this.orden[i].id){
                let fec = new Date(this.ordenAux[j].citas[0].horario_empleado.dia);
                let fech = fec.getDate()+'/'+(fec.getMonth()+1)+'/'+fec.getFullYear()
                console.log(fec)
                this.orden[i].fecha = fech
                
                console.log('si')  
            }else{
              console.log('no')
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
    this.router.navigate(['registrarDetalle/'+cli.id], { relativeTo: this.route });
 }

  openDialog(agenda){
    const dialogRef = this.dialog.open(CancelarCitaComponent, {
      height: '600px',
      width: '500px',
      data: {cita: agenda}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
 }
 /*openDialogIncidencia(){
  const dialogRef = this.dialog.open(IncidenciaCitaComponent, {
    height: '600px',
    width: '500px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('mostrado incidencia');
  });
}*/
}


@Component({
  selector: 'app-cancelar-cita',
  templateUrl: './cancelar-cita.component.html',
  styleUrls: ['./cancelar-cita.component.scss']
})
export class CancelarCitaComponent  {
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
    public dialogRef: MatDialogRef<CancelarCitaComponent>,
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

@Component({
  selector: 'app-incidencia-cita',
  templateUrl: './incidencia-cita.component.html',
  styleUrls: ['./incidencia-cita.component.scss']
})
export class IncidenciaCitaComponent  {}
