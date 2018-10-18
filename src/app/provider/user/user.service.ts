import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_URL="http://localhost:3000/api/"

@Injectable()
export class UserService {
  user: {
    id: number;
    id_rol: number;
    correo: string;
    conrasenia: string;
    ultimo_acceso: string;
    fecha_crecion: string;
    estatus: string;
    authenticated: boolean;
  }
  url: String = 'usuario/';
  constructor(public http: HttpClient) {
    this.user ={
      id: 0,
      id_rol: 0,
      correo: '',
      conrasenia: '',
      ultimo_acceso: '',
      fecha_crecion: '',
      estatus: '',
      authenticated: false
    }
   }


  checkAuth(){
    let jwt = localStorage.getItem('auth_token');
    if(jwt){
      this.user.authenticated = true
      return true;
    }
    else{
      this.user.authenticated = false
      return false;
    }
  }
  setAuth(){
    this.user.authenticated = true;
  }
  setUser(id){
    this.getUser(id).subscribe(
      (data)=>
      {
        this.user=data['data'];
        console.log(this.user)
      },(error)=>{
        console.log(error);
      }
  )
      
  }
  getUser(id){
    console.log(API_URL+this.url+id)
    return this.http.get(API_URL+this.url+id)
  }

  retornaUser(){
    return this.user;
  }

  logout(){
   localStorage.removeItem('auth_token');
   localStorage.removeItem('id_user');/*Yanior:: "Edité esto porque vi que tenias tipeado 'id' en lugar de 'id_user'" 
        localStorage.removeItem('id');*/
  }

}
