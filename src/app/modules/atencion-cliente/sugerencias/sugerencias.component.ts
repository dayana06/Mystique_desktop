import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ComentarioService } from '../../../provider/comentario/comentario.service';
import { TipoComentarioService } from '../../../provider/tipo-comentario/tipo-comentario.service';
import { TipoRepuestaComentarioService } from '../../../provider/tipo-repuesta-comentario/tipo-repuesta-comentario.service';
import { RespuestaComentarioService } from '../../../provider/respuesta-comentario/respuesta-comentario.service';
import { VComentariosService } from '../../../provider/v-cometarios/v-comentarios.service';
import { MensajeExitoComponent } from '../../../mensajes/mensaje-exito/mensaje-exito.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Socket } from 'ng-socket-io';

interface Datos_reclamo{
	nombre: string;
	orden: string;
	fecha: string;
	tipoR: string;
	descripcion: string;
	servicios: servicio[];
	fechaV:string;

}
interface servicio{
  nombre: string;
  descripcion: string;
}
@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.scss']
})
export class SugerenciasComponent implements OnInit {
   //siempre va
 tCom: any;
 com: any;
   
coment: Array <{
  id: number
  id_cliente: number
  id_tipo_comentario: number
  nombre: string
  apellido: string
  correo: string
  tipo_comentario: string
  descripcion: string
  fecha_creacion: string
  estado: string
 }>
comAux: Array <{
  id: number
  id_cliente: number
  id_tipo_comentario: number
  nombre: string
  apellido: string
  correo: string
  tipo_comentario: string
  descripcion: string
  fecha_creacion: string
  estado: string
 }>
datosMostrar: {
  id_comentario: number,
  id_tipo_comentario: number,
  descripcion: String,
};
mostrar: boolean
  constructor(public dialog: MatDialog,
    public comentario:ComentarioService,
    public vcoment:VComentariosService,
    public tcomentario:TipoComentarioService) 
  {
    this.datosMostrar = {
      id_comentario: 1,
      id_tipo_comentario: null,
      descripcion:'' ,    
    };

    this.coment = []
     this.comAux = []
     this.mostrar = false
   }

  ngOnInit() {
    this.getComentario();
    this.getTipoComentario();
    this.getVistaComentarios()
    
  }
  limpiar(){
    this.coment = []
    this.comAux = []
    this.mostrar = false
 
  }
  getComentario(){
    this.comentario.getComentario().subscribe((resp)=>{
      this.com= resp['data'];
      console.log(this.com);
 
    },(error)=>{
      console.log(error);
    }
   )
 }
 getVistaComentarios(){
   this.limpiar()
  this.vcoment.getVistaComentarios().subscribe((resp)=>{
    this.comAux= resp['data'];

    console.log(this.comAux);
    console.log(this.comAux.length);
    for(let i = 0; i<this.comAux.length; i++){
      if(this.comAux[i].estado === 'P')
      this.coment.push(this.comAux[i])
      this.mostrar = true;
    }
    console.log(this.coment);
  },(error)=>{
    console.log(error);
  }
 )
}
 getTipoComentario(){
  this.tcomentario.getTipoComentario().subscribe((resp)=>{
    this.tCom= resp['data'];
    console.log(this.tCom);

  },(error)=>{
    console.log(error);
  }
 )
}

  openDialog(comentario){
    const dialogRef = this.dialog.open( DarRepuestaComentarioComponent, {
      height: '320px',
      width: '400px',
      data: {com: comentario}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
      this.getVistaComentarios();
    });
  }
}

@Component({
  selector: 'app-dar-repuesta-comentario',
  templateUrl: './dar-repuesta-comentario.component.html',
  styleUrls: ['./dar-repuesta-comentario.component.scss']
})
export class DarRepuestaComentarioComponent {
  resp:any[];
  msj:string;
//selec pregunta
filtroSelec = '';
filtro = [
  {value: 'positiva', viewValue: 'Procede'},
  {value: 'negativa', viewValue: 'No procede'},
  
];
datosMostrar: {
  id_comentario: number,
  id_tipo_respuesta_comentario: number,
  descripcion: String,
};
comentarioResp: any;
estado:{
  estado: string
}
cliente: any
constructor(
  public dialogRef: MatDialogRef<DarRepuestaComentarioComponent>,
  public dialog: MatDialog,
  public repuesta:TipoRepuestaComentarioService,
  public repuestaC: RespuestaComentarioService,
  private route: ActivatedRoute,
  private router: Router,
  public comentario: ComentarioService,
  public socket: Socket,
  @Inject(MAT_DIALOG_DATA) public data: any
) 
  {
    this.cliente = data.com.id_cliente,
    this.comentarioResp = data.com
    console.log(this.comentarioResp)
      this.getTipoRepuestaC();
      this.datosMostrar = {
        id_comentario: this.comentarioResp.id,
        id_tipo_respuesta_comentario: null,
        descripcion:'' ,
        
      };

      this.estado = {
        estado: 'P'
      }
      
  }
  

ngOnInit() {
  
  
}
getTipoRepuestaC(){
  this.repuesta.getTipoRepuestaC().subscribe((resp)=>{
    this.resp= resp['data'];
    console.log(this.resp);

  },(error)=>{
    console.log(error);
  }
 )
}
//guardar 
postRepuestaComentario() {
  //this.datosMostrar.id_comentario=this.repuesta.returnIdComenario();
  console.log(this.datosMostrar);
  this.repuestaC.postRepuestaComentario(this.datosMostrar).subscribe((resp)=>{
    this.msj= resp['data'].message;
    console.log(this.msj);
     //alert(this.msj)
     this.notificar();
     this.estado.estado = 'R'
     this.comentario.updateComentario(this.datosMostrar.id_comentario, this.estado).subscribe(
      (res)=>{
        console.log(res);
        this.mostrarMensajeExito()
        this.dialogRef.close();
      },(error)=>{
        console.log(error);
      }  
     )
     
  },(error)=>{
    console.log(error);
  }
 )
} 

notificar() {
  this.socket.emit('nueva_respuesta_comentario', {
    mensaje: 'Su comentario ha sido atendido',
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
    
    this.router.navigate(['atencionCliente']);
    this.dialogRef.close()
    //this.router.onSameUrlNavigation
    
  });  
}
}
