import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL='http://localhost:3000/api/'

@Injectable()
export class RolFuncionService/* implements OnInit*/{

  url_rol_funcion='rol_funcion';
  //rolesF:any;
  mensaje:string="Rol actualizado exitosamente!";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) {
    //this.ngOnInit(); 
  }

  /*ngOnInit(){
    this.rolesF=[];
    this.getRolFuncion().subscribe(
      data=>{
        this.rolesF=data['data'];
      },error=>{
        console.log(error)
      }
    );
  }*/


  getRolFuncion(){
    return this.http.get(API_URL+this.url_rol_funcion);
  }
  putRolFuncion(id,rolF){
    return this.http.put(API_URL+this.url_rol_funcion+"/"+id,rolF);
  }
  postRolFuncion(rolF){
    return this.http.post(API_URL+this.url_rol_funcion,rolF);
  }


  postRolFuncionVarios(idR,menu):string{//METODO QUE ENVIA TODAS LOS ROL-FUNCION DEL ROL QUE SE ACABA DE CREAR
    menu.forEach(element => {
      if(element.activa){
        this.postRolFuncion({id_rol:idR,id_funcion:element.id}).subscribe(data=>{
          console.log("rol_funcion creado")
        },error=>{console.log(error)});
      }
    });
    return "Rol creado con éxito!";
  }

  putRolFuncionVarios(idR,menu):string{//METODO QUE ACTUALIZA EL ROL SELECCIONADO PARA EDITAR
    //
    let rolesF=[];//CREA ARRAY DE ROLES-FUNCION
    this.getRolFuncion().subscribe(//SE TRAE LOS ROL-FUNCION
      data=>{
        rolesF=data['data'];//SE LLENA EL ARRAY DE ROLES-FUNCION
        let rolF_actuales=rolesF.filter((el, i, arr)=>(el.id_rol == idR));//ARRAY QUE ALMACENA LAS FUNCIONES ACTUALES (SIN EDITAR) DEL ROL A EDITAR
        let rolF_nuevos=menu.filter((el, i, arr)=>(el.activa == true));//ARRAY QUE ALMACENA LAS FUNCIONES SELECCIONADAS A EDITAR DEL ROL ACTUAL
        console.log(rolF_actuales,rolF_nuevos);
        let counter=rolF_actuales.length;//VARIABLE QUE PERMITE CONTROLAR QUE NO SE EJECUTE EL guardar DE LOS ROLES-FUNCION AUN
        rolF_actuales.forEach(el=>{//RECORRE LOS ROLES ACTUALES SIN EDICION
          let indice=rolF_nuevos.map(function(e) { return e.id; }).indexOf(el.id_funcion);//SETEA EL INDICE DE LA FUNCION ACTUAL DEL FOREACH, CON RESPECTO AL ROL ACTUAL
          if(indice>=0){//SI EL INDICE ES UN NUMERO ENTERO POSITIVO MAYOR QUE CERO, ENTONCES IMPLICA QUE EXITE ESA FUNCION PARA ESTE ROL
            if(el.estatus=="I"){//SI EL ESTATUS ES "I", ENTONCES SE BORRA ESTA FUNCION DEL ARRAY DE ROLES-FUNCION NUEVOS, Y SE LE CAMBIA EL ESTATUS EN LA TABLA A "A"
              let borrado=rolF_nuevos.splice(indice,1);
              this.actualizar(el.id,"A");
            }else{
              let borrado=rolF_nuevos.splice(indice,1);//SI EL ESTATUS ES "A", ENTONCES SE BORRA ESTA FUNCION DEL ARRAY DE ROLES-FUNCION NUEVOS
            }
          }else{//SI EL INDICE NO ES UN NUMERO ENTERO POSITIVO MAYOR QUE CERO, ENTONCES IMPLICA QUE NO EXITE ESA FUNCION ACTUAL EN EL ARRAY DE ROL-FUNCION NUEVOS
            if(el.estatus=="A"){//SI EL ESTATUS ES "A", SE PROCEDE A INACTIVAR EN LA TABLA DE LA BD
              this.eliminar(el.id,"I");
            }
          }
          counter--;
        });
        if(counter==0){//CUNADO LA VARIABLE DE CONTRO ES CERO, LO QUE QUEDA POR HACER ES GUSRADAR EN LA TABLA DE LA BD, LOS ROL-FUNCION NUEVOS, SI ES QUE LOS HAY CLARO ESTA
          console.log(rolF_nuevos)
          rolF_nuevos.forEach(rolfn => {
            this.guardar({id_rol:idR,id_funcion:rolfn.id});
          });
        }
  
      },error=>{
        console.log(error)
      }
    );
    //
   return this.mensaje;
  }

  actualizar(id,status){//METODO QUE LLAMA EL ACTUALIZAR DE ROL-FUNCION
    this.putRolFuncion(id,{estatus:status}).subscribe(data=>{console.log("Actualizado");},error=>{console.log(error);});
  }
  eliminar(id,status){//METODO QUE SETEA COMO "I" ALGUN ROL-FUNCION
    this.putRolFuncion(id,{estatus:status}).subscribe(data=>{console.log("Eliminado");},error=>{console.log(error);});
  }
  guardar(rolF){//METODO QUE LLAMA EL CREAR DE ROL-FUNCION
    this.postRolFuncion(rolF).subscribe(data=>{
      this.mensaje= "Rol actualizado con exito";
    },error=>{console.log(error);});
  }

 

}




 /*this.getRolFuncion().subscribe(data=>{
      let rolF_actuales=data['data'].filter((el, i, arr)=>(el.id_rol == idR));
      let rolF_nuevos=menu.filter((el, i, arr)=>(el.activa == true));
      //
      let found=false;
      rolF_actuales.forEach(rolFA => {
        found=false;
        for (let i = 0; i < rolF_nuevos.length; i++) {
          if(rolFA.id_funcion==rolF_nuevos[i].id){
            if(rolFA.estatus=="I"){
              found=true;break;
            }else{
              let indx=rolF_nuevos.indexOf(rolF_nuevos[i]);
              rolF_nuevos[indx].activa=false;
              found=true;break;
            }
          }
        }
        if(!found){
          this.putRolFuncion(rolFA.id,{estatus:"I"}).subscribe(dataf=>{
            console.log("rol_funcion eliminada!")
          },error=>{console.log(error)});
        }
      });
      //
      let rolF_nuevos_actualizados=rolF_nuevos.filter((el, i, arr)=>(el.activa == true));
      console.log("holis",rolF_nuevos_actualizados);
      //let rolF_NAU:Array<any>=[];
      rolF_nuevos_actualizados.forEach(rolFACT => {
        rolF_actuales.forEach(element => {
          if(element.id_funcion==rolFACT.id && element.estatus=="I"){
            this.putRolFuncion(element.id,{estatus:"A"}).subscribe(datay=>{
              console.log("rol_funcion actu!");
              let index=rolF_nuevos_actualizados.indexOf(rolFACT);
              let borrado=rolF_nuevos_actualizados.splice(index,1);
              console.log(borrado);
            },error=>{console.log(error)});
          }
        });
      });
      console.log("holus",rolF_nuevos_actualizados);
      rolF_nuevos_actualizados.forEach(element2 => {
        this.postRolFuncion({id_rol:idR,id_funcion:element2.id}).subscribe(datax=>{
          console.log("rol_funcion creada!")
        },error=>{console.log(error)});
      });
      
    },error=>{console.log(error)});
    */