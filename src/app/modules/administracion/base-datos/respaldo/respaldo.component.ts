import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { MensajeExitoComponent } from '../../../../mensajes/mensaje-exito/mensaje-exito.component';


@Component({
  selector: 'app-respaldo',
  templateUrl: './respaldo.component.html',
  styleUrls: ['./respaldo.component.scss']
})
export class RespaldoComponent implements OnInit {
  filtroSelec = 'respaldar';
  registrosSeleccionados = [];
  registro1 = ['Cliente', 'Reclamos', 'Servicios', 'Todos'];
 
 
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  respaldar(valor){
    if(this.registrosSeleccionados.length>0){
      document.getElementById('descargarbackup').click();
      this.mostrarMensajeExito("Los datos han sido respaldados de manera exitosa!");
    }else{
      this.mostrarMensajeExito("Debe seleccionar primero para poder respaldar.");
    }
  }

  mostrarMensajeExito(mns): void {//opens the modal
    let dialogRef = this.dialog.open(MensajeExitoComponent, {
      width: '300px',//sets the width
      height: '160px', 
      data: { msj: mns }//send this class's attributes to the modal
    });
  
    dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
      console.log('modal cerrado');
    });
  }

}
