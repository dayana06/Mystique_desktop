import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL='http://localhost:3000/api/'

@Injectable()
export class EmpleadosService {

  url_empleados='empleado/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) { }

  getEmpleados(){
    return this.http.get(API_URL+this.url_empleados);
  }
  getEmpleado(id){
    return this.http.get(API_URL+this.url_empleados+id);
  }
  putEmpleado(id,empleado){
    return this.http.put(API_URL+this.url_empleados + id, empleado);
  }
  getEmpleadoEspecifico(id){
    return this.http.get(API_URL+this.url_empleados+id);
  }
  /*postEmpleado(empleado){
    return this.http.post(API_URL+this.url_empleados, empleado);
  }


  importarEmpleados(jsonempls):string{
    for (let i = 0; i < jsonempls.length; i++) {
      let formdata= new FormData();
        formdata.append('nombre',jsonempls[i].nombre);
        formdata.append('apellido',jsonempls[i].apellido);
        formdata.append('cedula',jsonempls[i].cedula.toString());
        formdata.append('telefono',jsonempls[i].telefono);
        formdata.append('direccion',jsonempls[i].direccion);   
        formdata.append('fecha_nacimiento',(new Date(jsonempls[i].fecha_nacimiento)).toDateString());
        formdata.append('id_ciudad',jsonempls[i].id_ciudad.toString());
        formdata.append('sexo',jsonempls[i].sexo);
        this.agregarEmpl(formdata);
      if (i==(jsonempls.length-1)) {
        return "Empleados importados exitosamente!";
      }
    }
  }
  agregarEmpl(formEmpl){
    this.postEmpleado(formEmpl).subscribe(data=>{
      console.log("exito!");
    },error=>{
      console.log(error);
    });
  }*/

}