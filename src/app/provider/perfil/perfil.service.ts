import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL='http://localhost:3000/api/'


@Injectable()
export class PerfilService {
  
  url_perfil='perfil';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  perfil_tabla:any;
  perfil_cli_tabla:Array<any>=[];//GUARDA EL PERFIL FILTRADO POR EL CLIENTE ACTUAL
  constructor(public http:HttpClient) {
    this.getPerfil().subscribe(
      (data)=>{
        this.perfil_tabla=data['data'];
      },(error)=>{
        console.log(error);
      }
    );
  }

  getPerfil(){
    return this.http.get(API_URL+this.url_perfil);
  }
  postPerfil(perfil){
    return this.http.post(API_URL+this.url_perfil, perfil);
  }
  
  putPerfil(id,perfil){
    return this.http.put(API_URL+this.url_perfil+'/'+id, perfil);
  }

//METODO QUE CONTROLA LA CONFIGURACION DE LOS PARAMETROS DEL CLIENTE
gestionarPerfil(arrValAct,arrValSel,cliid):string{
  this.perfil_tabla.forEach(pt => {//LLENA LA LISTA FILTRADA DEL PERFIL DEL CLIENTE ACTUAL
    if(pt.id_cliente==cliid){
      this.perfil_cli_tabla.push(pt);
    }
  });

  //Si tienen la misma longitud solo puede que ocurran updates o nada en absoluto.
  if (arrValAct.length==arrValSel.length) {//////////////////////////
    let ava=arrValAct;let pos=0;
    arrValSel.forEach(avs => {
      if (avs.id!=ava[pos].id) {
        this.actualizacionPerfil(ava[pos].id_perfil,avs,cliid);
      } pos++;   
    });
    return "Cliente actualizado con éxito!";
  }//////////////////////////////////////////////////////////////////
  //Si la longitud de los valores seleccionados es mayor ocurriran updates y creates.
  else {
    let avac=arrValAct;
    for (let j = 0; j < avac.length; j++) {
      if (arrValSel[j].id!=avac[j].id) {
        this.actualizacionPerfil(avac[j].id_perfil,arrValSel[j],cliid);
      }
    }
    let consiguio=false;
    for (let k = avac.length; k < arrValSel.length; k++) {
      for (let q = 0; q < this.perfil_cli_tabla.length; q++) {
        consiguio=false;
        if (arrValSel[k].id==this.perfil_cli_tabla[q].id_valor_parametro) {
          this.actualizacionPerfil(this.perfil_cli_tabla[q].id,arrValSel[k],cliid);
          consiguio=true;
          break;
        }
      }
      if(consiguio==false){
        this.creacionPerfil(arrValSel[k],cliid);
      }
    }
    return "Cliente actualizado con éxito!";
  }
}

actualizacionPerfil(id,avs,cliid){//REALIZA LOS UPDATES
    let perfilSetEstatusA={id_valor_parametro:avs.id,
                            id_cliente:cliid,estatus:"A"};
    this.putPerfil(id,perfilSetEstatusA).subscribe(
      (data)=>{
        console.log(data['data'].message);
      },(error)=>{
        console.log(error);
      }
    );
}
creacionPerfil(arrValSel,cliid){//REALIZA LOS CREATES
  let perfilACrear={id_valor_parametro:arrValSel.id,id_cliente:cliid};
  this.postPerfil(perfilACrear).subscribe(
    (data)=>{
      console.log(data['data'].message);
    },(error)=>{
      console.log(error);
    }
  );
}

}
