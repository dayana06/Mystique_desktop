import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
interface TReclamo {
  Codigo: string;
  nombre: string;
  descripcion: string;
  fechaC: string;
  estatus: string;
}

@Component({
  selector: 'app-tipo-reclamo',
  templateUrl: './tipo-reclamo.component.html',
  styleUrls: ['./tipo-reclamo.component.scss']
})
export class TipoReclamoComponent implements OnInit {
  detalles:  TReclamo [] = [
    {
      Codigo: '001',
      nombre: 'Tipo Reclamo A',
      descripcion: 'Tipo Reclamo de la garantia',
      fechaC: '10/04/2018',
      estatus: 'A'
     } ,
     {
      Codigo: '001',
      nombre: 'Tipo Reclamo B',
      descripcion: 'Tipo Reclamo de la garantia',
      fechaC: '10/04/2018',
      estatus: 'A'
     } ,
     {
      Codigo: '001',
      nombre: 'Tipo Reclamo B',
      descripcion: 'Tipo Reclamo de la garantia',
      fechaC: '10/04/2018',
      estatus: 'A'
     }
     
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialogReclamo() {
    const dialogRef = this.dialog.open(CrearTipoReclamoComponent, {
      height: '300px',
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
  }
}
@Component({
  selector: 'app-crear-tipo-reclamo',
  templateUrl: './crear-tipo-reclamo.component.html',
  styleUrls: ['./crear-tipo-reclamo.component.scss']
})

export class  CrearTipoReclamoComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
