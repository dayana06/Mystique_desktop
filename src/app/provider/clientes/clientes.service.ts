import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL='http://localhost:3000/api/'

@Injectable()
export class ClientesService {

  url_listado_clientes='cliente';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http:HttpClient) { }

getClientes(){
  return this.http.get(API_URL+this.url_listado_clientes);
}
getCliente(id){
  return this.http.get(API_URL+this.url_listado_clientes+'/'+id);
}
putCliente(id,cliente){
  return this.http.put(API_URL+this.url_listado_clientes+'/'+id, cliente);
}

}
