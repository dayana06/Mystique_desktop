import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogClose} from "@angular/material";//Required for showing up the modal

@Component({
  selector: 'app-mensaje-confirmar',
  templateUrl: './mensaje-confirmar.component.html',
  styleUrls: ['./mensaje-confirmar.component.scss']
})
export class MensajeConfirmarComponent implements OnInit {

  mensaje:string;
  //segundos:any;

  constructor(public dialogRef: MatDialogRef<MensajeConfirmarComponent>,//,for sending inf to the parent component
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.mensaje=data.msj;
      //this.segundos=setTimeout(this.cerrarModal,3000);
  }

  ngOnInit() {
  }

  /*cerrarModal(){
    document.getElementById('thisButton').click();
  }*/

  onNO(): void {//method returning void when closing the modal
    this.dialogRef.close();
  }

  onSI() {//method returning positive feedback to eliminate a rol
      this.dialogRef.close("si");
  }

}
