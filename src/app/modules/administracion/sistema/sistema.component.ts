import { Component, OnInit } from '@angular/core';
import { MatSlideToggle } from '@angular/material';
import { TituloSeccionService } from '../../../provider/titulo-seccion/titulo-seccion.service';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.scss']
})
export class SistemaComponent implements OnInit {

  opciones:Array<{id:number;id_sistema:number;boton:string;titulo:string;tipo_seccion:string;
            descripcion:string;estatus:string;fecha_creacion:Date;visible:boolean}>=[];

  constructor(public servicio_titulo_seccion: TituloSeccionService) { }

  ngOnInit() {
    this.opciones=[];
    this.cargarOpciones();
  }

  cargarOpciones(){
    this.servicio_titulo_seccion.getTituloSeccion().subscribe(data=>{
      let arr=data['data'].filter((el, i, arr)=>(el.tipo_seccion == "sistema"));
      this.opciones=arr.sort((a,b) => (a.id - b.id));
      /*if (this.opciones.length==0) {
          this.cargarOpcionesPorPrimeraVez();
      }*/
    },error=>{console.log(error);});
  }

  activar_desactivar(opcion){
    if(opcion.visible){
      opcion.visible=false;
      this.servicio_titulo_seccion.putTituloSeccion(opcion.id,{visible:opcion.visible}).subscribe(data=>{
        console.log("item actualizado!");
        this.ngOnInit();
      },error=>{console.log(error);});
    }else{
      opcion.visible=true;
      this.servicio_titulo_seccion.putTituloSeccion(opcion.id,{visible:opcion.visible}).subscribe(data=>{
        console.log("item actualizado!");
        this.ngOnInit();
      },error=>{console.log(error);});
    }
  }

  /*cargarOpcionesPorPrimeraVez(){
    let arrOpciones:Array<any>=[];
        arrOpciones.push({id_sistema:1,titulo:"Mostar twitter",tipo_seccion:"sistema",
          visible:true});
        arrOpciones.push({id_sistema:1,titulo:"Mostar notificaciones",tipo_seccion:"sistema",
          visible:true});
        arrOpciones.push({id_sistema:1,titulo:"Enviar correos electrónicos",tipo_seccion:"sistema",
          visible:true});
    for (let i = 0; i < arrOpciones.length; i++) {
      if(i==(arrOpciones.length-1)){
        this.servicio_titulo_seccion.postTituloSeccion(arrOpciones[i]).subscribe(data=>{
          console.log("Creado!");
          this.ngOnInit();
        },error=>{console.log(error);});
      }else{
        this.servicio_titulo_seccion.postTituloSeccion(arrOpciones[i]).subscribe(data=>{
          console.log("Creado!");
        },error=>{console.log(error);});
      }
    }    
  }*/

}
