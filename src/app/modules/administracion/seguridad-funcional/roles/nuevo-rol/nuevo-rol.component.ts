import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";//Required for showing the modal
import { FuncionesService } from '../../../../../provider/funciones/funciones.service';
import { RolFuncionService } from '../../../../../provider/rol-funcion/rol-funcion.service';

@Component({
  selector: 'app-nuevo-rol',
  templateUrl: './nuevo-rol.component.html',
  styleUrls: ['./nuevo-rol.component.scss']
})
export class NuevoRolComponent implements OnInit {
  /*Attributes of the modal
  animal: string;
  name: string;*/

  //funcionActual:number;

  id:number;
  nombre:string;
  accion:string="crear";//ACCION POR DEFECTO A REALIZAR CUANDO SE ABRE EL MODAL DE ROL

  funciones: Array<{id:number,nombre:string,id_funcion:number,fecha_creacion:Date,estatus:string,activa:boolean}>=[];
  
  constructor(
    public dialogRef: MatDialogRef<NuevoRolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public servicio_funcion: FuncionesService,
      public servicio_rol_funcion: RolFuncionService) {
      if(data.nombre){this.id=data.id;this.nombre=data.nombre;this.accion=data.accion;}
    }

  ngOnInit(){
    this.funciones=[];
    this.obtenerFunciones();
    //this.funcionActual=0;
  }

  obtenerFunciones(){
    if(this.id>0)//ENTRA EN EL then SI SI SE VA A EDITAR UN ROL
    {
      this.servicio_funcion.getFunciones().subscribe(//SE OBTIENEN LAS FUNCIONES DEL MENU 
        data=>{
          //
          this.servicio_rol_funcion.getRolFuncion().subscribe(data2=>{//SE OBTIENEN LOS ROLES-FUNCIONES
            //
            let funcsDeEsteRol=data2['data'].filter((el, i, arr)=>(el.id_rol == this.id));//SE FILTRA EN RELACION AL ROL A EDITAR
            //
            let encontro=false;//VARIABLE DE CONTROL, PARA AÑADIR UNA FUNCION A LA LISTA COMO DESMARCADA SI ES false
            data['data'].forEach(fun => {
              encontro=false;
              for (let i = 0; i < funcsDeEsteRol.length; i++) {
                if(fun.id==funcsDeEsteRol[i].id_funcion && funcsDeEsteRol[i].estatus!="I"){//LLENA LA LISTA DE FUNCIONES DE ESTE ROL, SI EL ESTATUS ES DISTINTO DE "I"
                  this.funciones.push({id:fun.id,nombre:fun.nombre,id_funcion:fun.id_funcion,
                    fecha_creacion:fun.fecha_creacion,estatus:fun.estatus,activa:true});
                    encontro=true;//COMO LO AÑADIO COMO MARCADA, ENTONCES NO SE REALIZA EL IF DE encontro=false
                    break;
                }
              }
              if(!encontro){//CUANDO NO ENCUENTRA FUNCION DEL ROL, LA AGREGA COMO DESMARCADA
                this.funciones.push({id:fun.id,nombre:fun.nombre,id_funcion:fun.id_funcion,
                  fecha_creacion:fun.fecha_creacion,estatus:fun.estatus,activa:false});
              }
            });
          },error=>{console.log(error)});
          //
        },error=>{console.log(error)}
      );
    }
    else //OCURRE CUANDO SE VA A CREAR UN NUEVO ROL
    {this.servicio_funcion.getFunciones().subscribe(
      data0=>{
        data0['data'].forEach(fun => {//LLENA LA LISTA DE FUNCIONES DEL MENU COMPLETA, TODAS LAS OPCIONES MARCADAS POR DEFECTO
          this.funciones.push({id:fun.id,nombre:fun.nombre,id_funcion:fun.id_funcion,
            fecha_creacion:fun.fecha_creacion,estatus:fun.estatus,activa:true});
        });
      },error=>{console.log(error)}
    );}
  }
  activarOdesactivar(funcion){//METODO QUE ACTIVA O DESACTIVA UNA OPCION DEL MENU
    if(funcion.activa){//SI ESTA ACTIVA, LA DESACTIVA
      funcion.activa=false;
      if(funcion.id_funcion==null)//SI ES UNA FUNCION PADRE, Y SE VA A DESACTIVAR, ENTONCES, SE DESACTIVAN SU FUNCIONES HIJAS TAMBIEN
      {this.funciones.filter((el, i, arr)=>(el.id_funcion == funcion.id)).forEach(fun=>{
        fun.activa=false;
      });}
    }
    else{//SI ESTA DESACTIVA, LA ACTIVA
      funcion.activa=true;
      if(funcion.id_funcion==null)//ACTIVA TODAS LA FUNCIONES HIJAS POR DEFECTO
      {this.funciones.filter((el, i, arr)=>(el.id_funcion == funcion.id)).forEach(fun=>{
        fun.activa=true;
      });}}
  }
  habilitarOdeshabilitar(funcion):boolean{//METODO QUE INHABILITA LAS FUNCIONES HIJAS, SI LA FUNCION PADRE NO ESTA MARCADA
    if(funcion.id_funcion){
    let indice=this.funciones.map(function(e) { return e.id; }).indexOf(funcion.id_funcion);
    if(funcion.id_funcion==this.funciones[indice].id && !this.funciones[indice].activa){
      funcion.activa=false;
      return true;
    }
    else{return false;}}
    else{return false;}
  }

  onNoClick(): void {//method returning void when closing the modal
    this.dialogRef.close();
  }

  closeDialog() {//method returning the animal property to the parent component
    //this.dialogRef.close(this.animal);
    if(this.nombre!=null && this.nombre!=""){//SI SE TIPEO UN NOMBRE PARA EL ROL, ENTONCES SE MANDAN LOS DATOS A ACTUALIZAR O CREAR
      this.dialogRef.close({id:this.id,nombre:this.nombre,accion:this.accion,menu:this.funciones});
    }else{//NO SE MANDAN NINGUNOS DATOS, PUESTO QUE NO SE TIPEO UN NOMBRE
      this.dialogRef.close(null);
    }
  }

}
