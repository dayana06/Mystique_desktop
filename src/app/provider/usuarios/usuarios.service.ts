import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL='http://localhost:3000/api/'

@Injectable()
export class UsuariosService {

  url_listado_usuarios='usuario';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(public http: HttpClient) { }

  getUsuarios(){
    return this.http.get(API_URL+this.url_listado_usuarios);
  }
  getUsuario(id){
    return this.http.get(API_URL+this.url_listado_usuarios+'/'+id);
  }
  putUsuario(id,usuario){
    return this.http.put(API_URL+this.url_listado_usuarios+'/'+id, usuario);
  }
  postUsuario(usuario){
    return this.http.post(API_URL+this.url_listado_usuarios, usuario);
  }

}
