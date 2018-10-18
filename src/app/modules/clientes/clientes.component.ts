import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { forEach } from '@angular/router/src/utils/collection';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { ClientesService } from '../../provider/clientes/clientes.service';
import { UsuariosService } from '../../provider/usuarios/usuarios.service';
import { PerfilService } from '../../provider/perfil/perfil.service';
import { TipoParametroService } from '../../provider/tipo-parametro/tipo-parametro.service';
import { ParametroService } from '../../provider/parametro/parametro.service';
import { ValorParametroService } from '../../provider/valor-parametro/valor-parametro.service';
import {MatDialog, MatDialogRef} from '@angular/material';//needed for the modal
import { MensajeExitoComponent } from '../../mensajes/mensaje-exito/mensaje-exito.component';
/*import { registerLocaleData } from '@angular/common';
import localees from '@angular/common/locales/es-VE';

registerLocaleData(localees);*/

/**///////////////////////////////////////////////////// */
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  //verTabPerfil=false;//Variable de control para desplegar el contenido del perfil del cliente
  constructor() { }
  ngOnInit() {
  }
  //Metodo que le permite a las variables de control desplegar sus respectivas vistas.
  /*verificarTab(grupo_de_tabs){
    if (grupo_de_tabs.selectedIndex==1) {
      this.verTabPerfil=true;
    } 
  }*/
}

/**///////////////////////////////////////////////////// */
@Component({
  selector: 'app-cliente-principal',
  templateUrl: './cliente-principal.component.html',
  styleUrls: ['./cliente-principal.component.scss'],
  /*providers:[
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],*/
})
export class ClientePrincipalComponent implements OnInit {

  public actual_tipP;public actual_par;public actual_valP;

  cliID:number;
  genero:string;
  mensaje:string;
  infoCliente:{
    id:number;
    nombre:string;
    apellido:string;
    telefono:string;
    fecha_nacimiento:Date;
    correo:string;
  };
  cliente:{
    nombre:string;
    apellido:string;
    cedula:string;
    telefono:string;
    direccion:string;
    id_ciudad:number;
    fecha_nacimiento:Date;
    tipo_cliente:string;
    estatus:string;
    id_usuario:number;
  };
  usuario:{
    id:number;
    id_rol:number;
    correo:string;
    contrasenia:string;
    ultimo_acceso:Date;
    fecha_creacion:Date;
    estatus:string;
  };
  perfil_global:any;
  perfil_cliente:Array<{id_valor_parametro:number,id_cliente:number,estatus:string,fecha_creacion:Date,id:number}>=[];
  
  
  constructor(private route: ActivatedRoute, public servicio_cliente: ClientesService,
  public servicio_usuario: UsuariosService, public servicio_perfil: PerfilService,
  public servicio_tip_param: TipoParametroService,
  public servicio_param: ParametroService, public servicio_val_param:ValorParametroService,
  public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    ///
    this.perfil_global=[];
    this.perfil_cliente=[];
    this.cliente={
      nombre:'',
      apellido:'',
      cedula:'',
      telefono:'',
      direccion:'',
      id_ciudad:0,
      fecha_nacimiento:new Date(),
      tipo_cliente:'',
      estatus:'',
      id_usuario:0,
    };
    this.usuario={
      id:0,
      id_rol:0,
      correo:'',
      contrasenia:'',
      ultimo_acceso:new Date(),
      fecha_creacion:new Date(),
      estatus:'',
    };
    this.infoCliente={
      id:0,
      nombre:'',
      apellido:'',
      telefono:'',
      fecha_nacimiento:new Date(),
      correo:''
    };
    ///
    this.getClienteInfo();
    this.obtenerPerfilCliente();
    this.obtenerTipParParamValPar();
  }

  //OBTIENE INFORMACION DEL CLIENTE PASADO POR URL
  getClienteInfo(){
    ///
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.cliID = id;
    });
    ///
    this.servicio_cliente.getCliente(this.cliID).subscribe(
      (data)=>
      {
        this.cliente=data['data'];
        this.servicio_usuario.getUsuario(this.cliente.id_usuario).subscribe(
          (data2)=>
          {
            this.usuario=data2['data'];
            this.infoCliente={id:this.cliID,nombre:this.cliente.nombre,apellido:this.cliente.apellido,telefono:this.cliente.telefono,fecha_nacimiento:this.cliente.fecha_nacimiento, correo:this.usuario.correo};
            console.log(this.infoCliente)
          },(error)=>{
            console.log(error);
          }
      );
      },(error)=>{
        console.log(error);
      }
  );
  }
  editarCliente(){
    this.cliente.nombre=this.infoCliente.nombre;this.cliente.apellido=this.infoCliente.apellido;
    this.cliente.telefono=this.infoCliente.telefono;this.cliente.fecha_nacimiento=this.infoCliente.fecha_nacimiento;
    this.usuario.correo=this.infoCliente.correo;
    
    this.servicio_cliente.putCliente(this.cliID,this.cliente).subscribe(
      (data)=>
      {
        //this.mensaje=data['data'].message+' con éxito';
        this.servicio_usuario.putUsuario(this.usuario.id,this.usuario).subscribe(
          (data2)=>
          {
            //this.mensaje=data['data'].message+' con éxito';
            let mens="";//mensaje que mostrara el modal
            //GESTIONA TODA LA PARAMETRIZACION DEL CLIENTE
            mens=this.servicio_perfil.gestionarPerfil(this.valoresActuales,this.valoresEnSeleccion,this.cliID);
            this.mostrarMensajeExito(mens);
          },(error)=>{
            console.log(error);
          }
         );
      },(error)=>{
        console.log(error);
      }
     );
  }

//OBTIENE LOS DATOS DEL PERFIL EXCLUSIVAMENTE DEL CLIENTE ACTUAL
obtenerPerfilCliente(){
  this.servicio_perfil.getPerfil().subscribe(
    (data)=>
    {
      this.perfil_global=data['data'];
      //console.log(this.perfil_global);
      //
      //console.log('Muestra info json del perfil global:\n',this.perfil_global)
      this.perfil_global.forEach(element => {
        if(element.id_cliente==this.cliID && element.estatus!='I'){
          this.perfil_cliente.push(element);
        }
      });
      console.log('Array del perfil\n',this.perfil_cliente);
      //
    },(error)=>{
      console.log(error);
    }
  );
}

//ARRAYS PARA EL CONTROL DEL PERFIL DEL CLIENTE MEDIANTE PARAMETROS
valParametros:Array<{id:number,id_parametro:number,nombre:string,estatus:string,descripcion:string,fecha_creacion:Date}>=[];
parametros:Array<{id:number,nombre:string,estatus:string,id_tipo_parametro:number,fecha_creacion:Date,visible:boolean}>=[];
tipParametros:Array<{id:number,nombre:string,descripcion:string,estatus:string,fecha_creacion:Date,clasificacion:string}>=[];

//OBTIENE LOS TIPOS DE PARAMETROS, PARAMETROS Y VALORES PARAMETRO. ADEMAS SETEA EL SEXO DEL CLIENTE
obtenerTipParParamValPar(){
  this.servicio_val_param.getValorParametros().subscribe(
    (data)=>{
      this.valParametros=data['data'];
      //
      this.servicio_param.getParametros().subscribe(
        (data2)=>{
          this.parametros=data2['data'];
          //..........Para obtener sexo del cliente......................
                      let id_sexo,id_m,id_f;
                      for (let i = 0; i < this.parametros.length; i++) {
                        if (this.parametros[i].nombre=='sexo') {
                          id_sexo=this.parametros[i].id;
                          break;
                        }
                      }
                      let cont=0;
                      for (let j = 0; j < this.valParametros.length; j++) {
                        if (this.valParametros[j].nombre.toLowerCase()=='mujer' || this.valParametros[j].nombre.toLowerCase()=='femenino') {
                          id_f=this.valParametros[j].id;
                          cont++;
                        }
                        if (this.valParametros[j].nombre.toLowerCase()=='hombre' || this.valParametros[j].nombre.toLowerCase()=='masculino') {
                          id_m=this.valParametros[j].id;
                          cont++;
                        }
                        if(cont==2){
                          break;
                        }
                      }
                      for (let k = 0; k < this.perfil_cliente.length; k++) {
                        if(this.perfil_cliente[k].id_valor_parametro==id_f){
                          this.genero='f';break;
                        }
                        if(this.perfil_cliente[k].id_valor_parametro==id_m){
                          this.genero='m';break;
                        }
                      }
          //
          this.servicio_tip_param.getTipoParametros().subscribe(
            (data3)=>{
              this.tipParametros=data3['data'];
              //SETEA EL PRIMER ITEM DE ASPECTO, COMO EL ITEM SELECCIONADO
              this.actual_tipP=this.tipParametros[0].id;
              this.setearActualPar();
              //
            },(error)=>{
              console.log(error);
            }
          );
          //
        },(error)=>{
          console.log(error);
        }
      );
      //
    },(error)=>{
      console.log(error);
    }
  );
}
setearActualPar(){//NECESARIO PARA MOSTRAR LOS ITEMS DE CARACTERISTICA
  for (let l = 0; l < this.parametros.length; l++){
    if(this.parametros[l].id_tipo_parametro==this.actual_tipP && this.parametros[l].nombre.toLowerCase()!="sexo" && this.parametros[l].nombre.toLowerCase()!="rango de edad"){
      this.actual_par=this.parametros[l].id; break;}
    }
    this.setearActualValPar();
}
setearActualValPar(){//NECESARIO PARA MOSTRAR LOS ITEMS DE VALOR
  if(this.actual_par){
    this.actual_valP=false;
    for (let w = 0; w < this.valParametros.length; w++){
      if(this.valParametros[w].id_parametro==this.actual_par){
        this.actual_valP=true; break;}
      }
  }
}


//METODO QUE CHECKEA SI EL VALOR PARAMETRO ESTA SELECCIONADO O NO
estaSeleccionadoVP(valpa):boolean{
  let valor;
  for (let i = 0; i < this.perfil_cliente.length; i++) {
    if (this.perfil_cliente[i].id_valor_parametro==valpa) {
      valor=true;
      break;
    }
    valor=false;
  }
  return valor;
}

//ARRAYS QUE SERAN EVIADOS AL SERVICIO PERFIL, PARA REALIZAR LAS COMPARACIONES Y LUEGO LOS INSERTS/UPDATES
valoresActuales:Array<{id:number,id_parametro:number,id_perfil:number}>=[];
valoresEnSeleccion:Array<{id:number,id_parametro:number}>=[];
isDone=0;//VARIABLE DE CONTROL, PARA LLENAR valoresActuales UNA SOLA VEZ
//pent="hola";
gestionarPerfil(valp,ischecked){
  if(this.isDone==0){//GARANTIZA QUE EL ARRAY DE VALORES ACTUALES SE LLENE UNA SOLA VEZ
  this.perfil_cliente.forEach(element => {
    for (let i = 0; i < this.valParametros.length; i++) {
      if(this.valParametros[i].id==element.id_valor_parametro){
        this.valoresActuales.push({id:this.valParametros[i].id,id_parametro:this.valParametros[i].id_parametro,id_perfil:element.id});
        this.valoresEnSeleccion.push({id:this.valParametros[i].id,id_parametro:this.valParametros[i].id_parametro});
        break;
        }
      }
    });
    this.isDone++;
  }//FIN... DEL LLENADO DE VALORES ACTUALES
  
  let indice=this.valoresEnSeleccion.map(function(e) { return e.id_parametro; }).indexOf(valp.id_parametro);
  if(indice!=-1){//LLENA LISTA DE VALORES EN SELECCION PARA LUEGO COMPARAR Y MODIFICAR EL PERFIL DEL CLIENTE
    let valorAnt=this.valoresEnSeleccion[indice].id;//VALOR QUE APARECE SELECCIONADO
    this.valoresEnSeleccion[indice].id=valp.id;//EDITA LA SELECCION DEL VALOR
    let index=this.perfil_cliente.map(function(ee){return ee.id_valor_parametro;}).indexOf(valorAnt);//OBTINE EL INDICE DEL VALOR ANTERIOR EN EL ARRAY DEL PERFIL DEL CLIENTE
    this.perfil_cliente[index].id_valor_parametro=valp.id;//SETEA EL NUEVO VALOR DEL PERFIL DEL CLIENTE
  }else{//OCURRE CUANDO EL CLIENTE NO TENIA ESTE VALOR SELECCIONADO
    this.valoresEnSeleccion.push({id:valp.id,id_parametro:valp.id_parametro});//NUEVO VALOR SELECCIONADO
    this.perfil_cliente.push({id_cliente:this.cliID,id_valor_parametro:valp.id,estatus:'A',fecha_creacion:new Date(),id:(-1)});//NUEVO VALOR PARA EL PERFIL
  }
  //console.log(this.valoresActuales,ischecked);
  //this.pent=bulian.source.checked;
  //PARA ORDENAR POR ID_PARAMETRO:: let arr=this.valParametros.sort((a,b) => (a.id_parametro - b.id_parametro));
  //PARA FILTRAR POR ID_PARAMETRO:: this.valParametros.filter((el, i, arr)=>(el.id_parametro == valp.id_parametro));
  /*To find element: element = myArray.filter((e) => e.hello === 'stevie')[0];*/
  /*To find position: */  
}



mostrarMensajeExito(mns): void {//opens the modal
  let dialogRef = this.dialog.open(MensajeExitoComponent, {
    width: '300px',//sets the width
    height: '140px', 
    data: { msj: /*this.mensaje*/mns }//send this class's attributes to the modal
  });

  dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
    console.log('Modal closed!');
    this.router.navigate(['clientes']);
  });


  
}

}
