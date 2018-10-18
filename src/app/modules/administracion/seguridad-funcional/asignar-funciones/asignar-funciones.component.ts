import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../../provider/usuarios/usuarios.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmpleadosService } from '../../../../provider/empleados/empleados.service';
import { RolesService } from '../../../../provider/roles/roles.service';
import { isNull, isNullOrUndefined } from 'util';
import {MatDialog, MatDialogRef} from '@angular/material';//needed for the modal
import { MensajeExitoComponent } from '../../../../mensajes/mensaje-exito/mensaje-exito.component';

@Component({
  selector: 'app-asignar-funciones',
  templateUrl: './asignar-funciones.component.html',
  styleUrls: ['./asignar-funciones.component.scss']
})
export class AsignarFuncionesComponent implements OnInit {

  cambio=false;
  
  encontrado:boolean=false;//VARIABLE QUE PERMITE SABER SI UN EMPLEADO TIENE UN USUARIO ASIGNADO
  empleado:{id:number;nombre:string;apellido:string;cedula:string;telefono:string;direccion:string;
    fecha_nacimiento:Date;estatus:string;id_ciudad:number;id_usuario:number;imagen:string;
    fecha_creacion:Date;visible:boolean};
  usuario:{id:number;id_rol:number;correo:string;contrasenia:string;
    ultimo_acceso:Date;fecha_creacion:Date;estatus:string};

  roles:Array<{id:number,nombre:string,estatus:string,fecha_creacion:Date}>=[];

  constructor(public servicio_rol: RolesService,public servicio_empleado: EmpleadosService,public servicio_usuario: UsuariosService, private route: ActivatedRoute,
				public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.empleado={id:0,nombre:'',apellido:'',cedula:'',telefono:'',direccion:'',
      fecha_nacimiento:new Date(),estatus:'',id_ciudad:0,id_usuario:0,imagen:'',
      fecha_creacion:new Date(),visible:false};
    this.usuario={id:0,id_rol:0,correo:'',contrasenia:'',
      ultimo_acceso:new Date(),fecha_creacion:new Date(),estatus:''};
    this.roles=[];
    this.obtenerUsuario();
    this.obtenerRoles();
  }

  obtenerUsuario(){//BUSCA EL USUARIO ASIGNADO AL EMPLEADO ACTUAL
    let id:number;
    this.route.paramMap.subscribe((params: ParamMap) => {
      id = parseInt(params.get('id'));//id DEL EMPLEADO ACTUAL
    });

    this.servicio_empleado.getEmpleado(id).subscribe(
      (data)=>{
        this.empleado=data['data'];//SE ASIGNA EL EMPLEADO ACTUAL
        //console.log(this.empleado.id_usuario);
        if (this.empleado.id_usuario) {//SI EL EMPLEADO ACTUAL TIENE UN USUARIO ASIGNADO SE EJECUTA EL if  
          this.servicio_usuario.getUsuario(this.empleado.id_usuario).subscribe(data1=>{
            if (data1['data'].estatus=="A") {
              this.encontrado=true;//LE DECIMOS A LA VARIABLE QUE ESTE EMPLEADO TIENE UN USER ASIGNADO
              /**/this.servicio_usuario.getUsuario(this.empleado.id_usuario).subscribe(
                (data2)=>{
                  this.usuario=data2['data'];//ASIGNAMOS LOS VALORES DEL USUARIO CONCERNIENTE AL CLIENTE ACTUAL
                },(error)=>{
                  console.log(error);
                }
              );/**/
            }
          },error=>{console.log(error);});
        }
      },(error)=>{
        console.log(error);
      }
    );
  }
  obtenerRoles(){//METODO QUE LLENA EL COMBOBOX DE ROLES
    this.servicio_rol.getRoles().subscribe(
      (data)=>{
        //SE ASIGNAN LOS ROLES AL COMBO
        data['data'].forEach(element => {
          if(element.estatus=="A"){
            this.roles.push(element);
          }
        });

      },(error)=>{
        console.log(error);
      }
    );
  }
  editarUsuario(){//METODO QUE SE ACTIVA AL PRESIONAR EL BOTON DE GUARDAR/ACTUALIZAR
    let correoU=this.usuario.correo;
    let contraseniaU=this.usuario.contrasenia;

    //ARRAY QUE SERA ENVIADO PARA LA CREACION DE UN NUEVO USUARIO PARA ASIGNARLO AL EMPLEADO ACTUAL
    let usu={id_rol:(this.usuario.id_rol==0?null:this.usuario.id_rol),correo:this.usuario.correo,
      contrasenia:this.usuario.contrasenia};

  if(correoU!="" && contraseniaU!=""){//SI NO ESTAN EN BLANCO LOS CAMPOS DE CORREO Y CONTRASEÑA, PROCEDEMOS
    if (this.encontrado) {//SE EJECUTA CUANDO UN EMPLEADO TIENE UN USUARIO ASIGNADO, Y SE PROCEDE A MODIFICAR
       /**/
       let con_o_sin_cambio={};
       if(this.cambio==true){
        con_o_sin_cambio=((usu.id_rol==null)?{correo:usu.correo,contrasenia:usu.contrasenia}:{id_rol:usu.id_rol,correo:usu.correo,contrasenia:usu.contrasenia});
       }else{
        con_o_sin_cambio=((usu.id_rol==null)?{correo:usu.correo}:{id_rol:usu.id_rol,correo:usu.correo});
       }
       
       this.servicio_usuario.putUsuario(this.empleado.id_usuario,con_o_sin_cambio).subscribe(
        (data1)=>{
          //console.log(data1['data'].message);
		  this.mostrarMensajeExito("Usuario actualizado con éxito!");
        },(error)=>{console.log(error);}
      );/**/
    } else {//SE EJECUTA CUANDO EL EMPLEADO NO TIENE USUARIO ASIGNADO
      //
      this.servicio_usuario.getUsuarios().subscribe(dato=>{
        let resultado=dato['data'].filter((el, i, arr)=>(el.correo == usu.correo));
        if(resultado.length>0){//////////////////////////////////////////////
          this.mostrarMensajeValidacion("Por favor, tipee otro correo a asignar.");
        }else{///////////////////////////////////////////////////////////////
          /**/this.servicio_usuario.postUsuario(usu).subscribe(//SE CREA EL USER QUE SERA ASIGNADO AL EMPLEADO ACTUAL
            (data2)=>{
              //console.log(data2['data'].message);
              this.servicio_usuario.getUsuarios().subscribe(//OBTENEMOS TODOS LOS USUARIOS PARA SABER CUAL FUE EL ULTIMO CREADO
                (data3)=>{
                  let arrid_para_emp:Array<any>=data3['data'];//OBTENIDOS TODOS LOS USERS
                  let arr:Array<any>=arrid_para_emp.sort((a,b) => (b.id - a.id));//EL MAS NUEVO LO COLOCAMOS EN LA PRIMERA POSICION
                  //console.log('entrooo',arr[0].id);
                  
                  let formData = new FormData();//NECESARIO PARA TRABAJAR CON SERVICIOS QUE MANIPULAN IMAGENES(ARCHIVOS)
                  formData.append('id_usuario',arr[0].id);//AL id_usuario DEL EMPLEADO LE MANDAMOS EL id DEL USER CREADO RECIENTEMENTE
                  this.servicio_empleado.putEmpleado(this.empleado.id,formData).subscribe(
                    (data4)=>{
                      //console.log(data4['data'].message);
              this.mostrarMensajeExito("El usuario ha sido asignado con éxito!");//LE HEMOS ASIGNADO EL USER AL EMPLEADO!!
                    },(error)=>{console.log(error);}
                  );
                  //
                },(error)=>{
                  console.log(error);
                }
              );
            },(error)=>{console.log(error);}
          );/**/
        }
      },error=>{console.log(error);});
      //
    }
  }else{//MUESTRA HINTS DE ERROR CUANDO NO SE TIPEA NADA EN LOS CAMPOS DE CORREO Y CONTRASEÑA
    document.getElementById("usucorreo").focus();document.getElementById("usucontrasenia").focus();
  }
  }

  
  mostrarMensajeExito(mns): void {//opens the modal
  let dialogRef = this.dialog.open(MensajeExitoComponent, {
    width: '300px',//sets the width
    height: '140px', 
    data: { msj: mns }//send this class's attributes to the modal
  });

  dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
    console.log('Modal closed!');
    this.router.navigate(['seguridadfuncional']);
  });
}

mostrarMensajeValidacion(mns): void {//opens the modal
  let dialogRef = this.dialog.open(MensajeExitoComponent, {
    width: '300px',//sets the width
    height: '140px', 
    data: { msj: mns }//send this class's attributes to the modal
  });

  dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
    console.log('Modal closed!');
    document.getElementById("usucorreo").focus();
  });
}
    

}










/*items = [
    {descripcion: 'Consultar dashboard de negocio', estatus: 'true'},
    {descripcion: 'Consultar dashboard propio de empleado', estatus: 'true'},
    {descripcion: 'Registrar otros suarios', estatus: 'true'},
    {descripcion: 'Registrar roles', estatus: 'true'},
    {descripcion: 'Editar perfiles de usuarios', estatus: 'true'},
    {descripcion: 'Editar funciones de usuarios', estatus: 'true'},
    {descripcion: 'Agendar citas y registrar detalles de servicio', estatus: 'true'},
    {descripcion: 'Consultar todas la citas', estatus: 'true'},
    {descripcion: 'Consultar citas de empleado', estatus: 'true'},
    {descripcion: 'Registrar tipo de servicio', estatus: 'true'},
    {descripcion: 'Consultar reclamos', estatus: 'true'},
    {descripcion: 'Consultar sugerencias', estatus: 'true'},
    {descripcion: 'Responder reclamos', estatus: 'true'},
    {descripcion: 'Registrar parametros', estatus: 'true'},
    {descripcion: 'Modificar portal web', estatus: 'true'},
    {descripcion: 'Registrar informacion de empresa', estatus: 'true'},
    {descripcion: 'Consultar reportes', estatus: 'true'}
  ];*/