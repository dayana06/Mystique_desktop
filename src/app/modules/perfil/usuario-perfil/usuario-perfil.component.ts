import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { getLocaleDateFormat } from '@angular/common';

interface user{
  imageUrl: string;
  id: string;
}


@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.scss']
})
export class UsuarioPerfilComponent implements OnInit {
  cliente: IClienteUsuario={
    cliente:{nombre:"Maynard J", apellido:"Keenan",
    telefono:"0251-7552599", fecha_nacimiento: "1987-04-11",sexo:"f", especialidad: "Estilista",},
    usuario:{correo:"maynard@tool.com"}
  }

  userInfo: user = {
    
    imageUrl: "/assets/img/perfil.jpg",
    id: "1",
  }
  constructor() { }

  ngOnInit() {
  }}
//Interfaces
/* DEL CLIENTE */
 interface ICliente {
  id_cliente?: number;
  nombre: string;
  apellido: string;
  cedula?: string;
  telefono: string;
  especialidad: string;
  direccion?: string;
  fecha_nacimiento: string;//DATE
  fecha_creacion?: string;//DATE
  estatus?: string;
  sexo: string;//IMPORTANTE
}
interface IUsuario{
  id_usuario?: number;
  id_rol?: number;
  correo: string;
  contrasenia?: string;
  estatus?:string;
  ultimo_acceso?: Date;
  fecha_creacion?: Date;
}

  interface IClienteUsuario{
    cliente: ICliente;
    usuario: IUsuario;
  }

