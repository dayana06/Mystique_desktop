import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { EmpleadosService } from '../../../../provider/empleados/empleados.service';
import { MensajeExitoComponent } from '../../../../mensajes/mensaje-exito/mensaje-exito.component';
import { MatDialog } from '@angular/material';
import { InsumosService } from '../../../../provider/insumos/insumos.service';

@Component({
  selector: 'app-importar',
  templateUrl: './importar.component.html',
  styleUrls: ['./importar.component.scss']
})
export class ImportarComponent implements OnInit {

  jsonEmpleados:any;jsonEstadosCiudades:any;jsonInsumos:any;

  constructor(public servicio_insumo: InsumosService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  //LEYENDO EMPLEADOS
  arrayBuffer1:any;
  file1:File;
  incomingfile1(event) 
    {
    this.file1= event.target.files[0]; 
    this.Upload1();
    }
  Upload1() {
        let fileReader = new FileReader();
          fileReader.onload = (e) => {
              this.arrayBuffer1 = fileReader.result;
              var data = new Uint8Array(this.arrayBuffer1);
              var arr = new Array();
              for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
              var bstr = arr.join("");
              var workbook = XLSX.read(bstr, {type:"binary"});
              var first_sheet_name = workbook.SheetNames[0];
              var worksheet = workbook.Sheets[first_sheet_name];
              this.jsonEmpleados=XLSX.utils.sheet_to_json(worksheet,{raw:true});
              if(this.jsonEmpleados[0].cedula!=undefined){
                this.mostrarMensajeExito("Empleados cargados exitosamente!");
              }
              else{
                this.mostrarMensajeExito("Seleccione excel de empleados!");
              }
            }
          fileReader.readAsArrayBuffer(this.file1);
  }

  //LEYENDO ESTADOS Y CIUDADES
  arrayBuffer2:any;
  file2:File;
  incomingfile2(event) 
    {
    this.file2= event.target.files[0]; 
    this.Upload2();
    }
  Upload2() {
        let fileReader = new FileReader();
          fileReader.onload = (e) => {
              this.arrayBuffer2 = fileReader.result;
              var data = new Uint8Array(this.arrayBuffer2);
              var arr = new Array();
              for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
              var bstr = arr.join("");
              var workbook = XLSX.read(bstr, {type:"binary"});
              var first_sheet_name = workbook.SheetNames[0];
              var worksheet = workbook.Sheets[first_sheet_name];
              this.jsonEstadosCiudades=XLSX.utils.sheet_to_json(worksheet,{raw:true});
              if(this.jsonEstadosCiudades[0].cedula!=undefined){
                this.mostrarMensajeExito("Estados y Ciudades cargados exitosamente!");
              }
              else{
                this.mostrarMensajeExito("Seleccione excel de estados y ciudades!");
              }
            }
          fileReader.readAsArrayBuffer(this.file2);
  }


  ///LEYENDO INSUMOS
  arrayBuffer3:any;
  file3:File;
  incomingfile3(event) 
    {
    this.file3= event.target.files[0]; 
    this.Upload3();
    }
  Upload3() {
        let fileReader = new FileReader();
          fileReader.onload = (e) => {
              this.arrayBuffer3 = fileReader.result;
              var data = new Uint8Array(this.arrayBuffer3);
              var arr = new Array();
              for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
              var bstr = arr.join("");
              var workbook = XLSX.read(bstr, {type:"binary"});
              var first_sheet_name = workbook.SheetNames[0];
              var worksheet = workbook.Sheets[first_sheet_name];
              console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
              //
              this.jsonInsumos=XLSX.utils.sheet_to_json(worksheet,{raw:true});
              //importando los insumos a la base de datos
              if(this.jsonInsumos[0].id_tipo_insumo!=undefined){
                let mensajito=this.servicio_insumo.importarInsumos(this.jsonInsumos);
                this.mostrarMensajeExito(mensajito);
              }
              else{
                this.mostrarMensajeExito("Seleccione excel de insumos!");
              }
            }
          fileReader.readAsArrayBuffer(this.file3);
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

}


  /*
  //LEYENDO EMPLEADOS
  arrayBuffer1:any;
  file1:File;
  incomingfile1(event) 
    {
    this.file1= event.target.files[0]; 
    this.Upload1();
    }
  Upload1() {
        let fileReader = new FileReader();
          fileReader.onload = (e) => {
              this.arrayBuffer1 = fileReader.result;
              var data = new Uint8Array(this.arrayBuffer1);
              var arr = new Array();
              for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
              var bstr = arr.join("");
              var workbook = XLSX.read(bstr, {type:"binary"});
              var first_sheet_name = workbook.SheetNames[0];
              var worksheet = workbook.Sheets[first_sheet_name];
              console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
              //
              this.jsonEmpleados=XLSX.utils.sheet_to_json(worksheet,{raw:true});
              //console.log(new Date(this.jsonEmpleados[0].fecha_nacimiento),this.jsonEmpleados[0].cedula.toString());
              //importando los empleados a la base de datos
              if(this.jsonEmpleados[0].cedula!=undefined){
                let mensajito=this.servicio_empleado.importarEmpleados(this.jsonEmpleados);
                alert(mensajito);
              }
              else{
                alert("Seleccione excel de empleados!");
              }
            }
          fileReader.readAsArrayBuffer(this.file1);
  }
  */
