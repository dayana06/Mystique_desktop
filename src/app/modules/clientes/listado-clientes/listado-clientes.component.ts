import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatDialog} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { ClientesService } from '../../../provider/clientes/clientes.service';
import { error } from 'util';
import { UsuariosService } from '../../../provider/usuarios/usuarios.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, ActivatedRoute } from '@angular/router';
import { MensajeExitoComponent } from '../../../mensajes/mensaje-exito/mensaje-exito.component';
import { MensajeConfirmarComponent } from '../../../mensajes/mensaje-confirmar/mensaje-confirmar.component';


@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss']
})
export class ListadoClientesComponent implements OnInit {

  cli_selected=null;
  clientes: any;
  usuarios: any;
  lista_clientes: Array<{cliente:string, correo:string, telefono:string, direccion:string, clid:number;}>=[];
  
  displayedColumns = ['cliente', 'correo', 'telefono', 'direccion', 'menu'];
  dataSource :any;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(public servicio_cliente: ClientesService, public servicio_usuario: UsuariosService,
    private router: Router, private route: ActivatedRoute,public dialog: MatDialog) {
  }

  ngOnInit() {
    this.lista_clientes=[];
    this.dataSource=null;
    this.getClientesInfo();
  }

  getClientesInfo(){//METODO PARA LLENAR LA lista_clientes
    this.servicio_cliente.getClientes().subscribe(//SERVICIO DE CLIENTES QUE RETORNA JSON DE TABLA CLIENTE
      (data1)=>{
        this.clientes=data1['data'].filter((el, i, arr)=>(el.estatus == "A"));
        ///----------------->
        this.servicio_usuario.getUsuarios().subscribe(//SERVICIO DE USUARIOS QUE RETORNA JSON DE TABLA USUARIO
          (data2)=>{
            this.usuarios=data2['data'].filter((el, i, arr)=>(el.estatus == "A"));
            ///////////////////
            this.clientes.forEach(clienteArr => {
              for (let i = 0; i < this.usuarios.length; i++) {//RECORRE LA LISTA DE USUARIOS 
                if(this.usuarios[i].id==clienteArr.id_usuario){//SI EL USUARIO EN LA POSICION i COMPARTE EL MISMO ID DEL CLIENTE (id_usuario), ENTONCES AGREGAMOS CIERTOS DATOS A LA lista_clientes
                  this.lista_clientes.push({cliente:(clienteArr.nombre+" "+clienteArr.apellido), correo:this.usuarios[i].correo,
                  telefono:clienteArr.telefono, direccion:clienteArr.direccion, clid:clienteArr.id});//LE AGREGAMOS EL NOMBRE+APELLIDO, CORREO, TELEFONO Y DIRECCION; LOS CUALES SE UTILIZAN EN EL mat-table.
                  break;//TERMINA EL LOOP AL ENCONTRAR UN USUARIO QUE COMPARTE INFORMACION CON EL CLIENTE.
                }
              }
            });
            this.dataSource=new MatTableDataSource(this.lista_clientes);//le mandamos los datos a la tabla
            console.log(this.lista_clientes);
            ///////////////////
          }, (error)=>{
            console.log(error);
          }
        );
      }, (error)=>{
        console.log(error);
      }
    );    
  }


  irACliente(cli) {
     this.router.navigate(['detallecliente/'+cli.clid], { relativeTo: this.route });
  }

  eliminarCli(cli){
    this.servicio_cliente.getCliente(cli.clid).subscribe(data=>{
      let dataa= data['data'].id_usuario;
      this.servicio_cliente.putCliente(cli.clid,{estatus:"I"}).subscribe(data2=>{
        this.servicio_usuario.putUsuario(dataa,{estatus:"I"}).subscribe(data3=>{
          this.mostrarMensajeExito("Cliente eliminado con éxito!");this.ngOnInit();
        },error=>{console.log(error);});
      },error=>{console.log(error);});
    },error=>{console.log(error);});
      
  }

  mostrarMensajeExito(mns): void {//opens the modal
    let dialogRef = this.dialog.open(MensajeExitoComponent, {
      width: '300px',//sets the width
      height: '140px', 
      data: { msj: mns }//send this class's attributes to the modal
    });
  
    dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
      console.log('modal cerrado');
    });
  }

  mostrarMensajeDeConfirmacion(mnsj): void {//opens the modal
    let dialogRef = this.dialog.open(MensajeConfirmarComponent, {
      width: '300px',//sets the width
      height: '180px', 
      data: { msj: mnsj }//send this class's attributes to the modal
    });
  
    dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
      if(result!=null){
        if(result=="si"){
        if(this.cli_selected){
          this.eliminarCli(this.cli_selected);
        }
      }}
    });
  }


}
