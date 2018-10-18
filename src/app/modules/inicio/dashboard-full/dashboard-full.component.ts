import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VistaOrdenCitaService } from '../../../provider/vista-orden-cita/vista-orden-cita.service';
import { Router, ActivatedRoute } from '@angular/router';
interface Servicio{
  nombre: string;
  hora: string;
}
@Component({
  selector: 'app-dashboard-full',
  templateUrl: './dashboard-full.component.html',
  styleUrls: ['./dashboard-full.component.scss']
})
export class DashboardFullComponent implements OnInit {
  filtro = [
    {value: 'hoy', viewValue: 'Hoy'},
    {value: 'ayer', viewValue: 'Ayer'},
    {value: 'semana', viewValue: 'Últimos 7 días'},
    {value: 'mes', viewValue: 'Últimos 30 días'},
    
  ];
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
  

}
