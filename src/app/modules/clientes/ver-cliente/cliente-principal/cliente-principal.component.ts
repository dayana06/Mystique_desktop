import { Component, OnInit } from '@angular/core';
//Interfaces
/* DEL CLIENTE */

interface IClienteUsuario{
  cliente: ICliente;
  usuario: IUsuario;
}
interface ICliente {
  id_cliente?: number;
  nombre: string;
  apellido: string;
  cedula?: string;
  telefono: string;
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

@Component({
  selector: 'app-cliente-principal',
  templateUrl: './cliente-principal.component.html',
  styleUrls: ['./cliente-principal.component.scss']
})
export class ClientePrincipalComponent implements OnInit {
  //date = new FormControl(moment());
  cliente: IClienteUsuario={
    cliente:{nombre:"Daenerys", apellido:"Targaryen",
    telefono:"02008554544", fecha_nacimiento: "1987-04-11",sexo:"f"},
    usuario:{correo:"la.mil.titulos@gmail.com"}
  }
  constructor() { }

  ngOnInit() {
  }

}
