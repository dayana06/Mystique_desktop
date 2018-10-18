import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL='http://localhost:3000/api/'

@Injectable()
export class InsumosService {

  url_insumos='insumo';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) { }

  getInsumos(){
    return this.http.get(API_URL+this.url_insumos);
  }
  getInsumo(id){
    return this.http.get(API_URL+this.url_insumos+"/"+id);
  }
  putInsumo(id,insumo){
    return this.http.put(API_URL+this.url_insumos+"/"+id, insumo);
  }
  postInsumo(insumo){
    return this.http.post(API_URL+this.url_insumos, insumo);
  }


  importarInsumos(jsoninsumos):string{
    for (let i = 0; i < jsoninsumos.length; i++) {
      let objetoInsumo:{nombre:string;id_tipo_insumo:number;id_unidad:number;
                        cantidad:number;almacen:number};
        objetoInsumo={
          nombre:jsoninsumos[i].nombre,
          id_tipo_insumo:jsoninsumos[i].id_tipo_insumo,
          id_unidad:jsoninsumos[i].id_unidad,
          cantidad:jsoninsumos[i].cantidad,
          almacen:jsoninsumos[i].almacen
        }
        this.agregarInsumo(objetoInsumo);
      if (i==(jsoninsumos.length-1)) {
        return "Insumos importados exitosamente!";
      }
    }
  }
  agregarInsumo(insumo){
    this.postInsumo(insumo).subscribe(data=>{
      console.log("exito!");
    },error=>{
      console.log(error);
    });
  }


}
