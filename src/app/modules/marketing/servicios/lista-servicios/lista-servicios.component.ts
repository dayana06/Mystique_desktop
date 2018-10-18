import { Component, OnInit } from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { COMMA } from '@angular/cdk/keycodes';
import { MatDialog, MatChipInputEvent } from '@angular/material';
import{ ServiciosService} from '../../../../provider/servicios/servicios.service';

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.scss']
})
export class ListaServiciosComponent implements OnInit {
  //siempre va
  pro: any; 

  //selec nuevo servicio
  filtroSelec = '';
  filtro =[ 
    {value: 'peluquria', viewValue: 'peluqueria'},
    {value: 'maquillaje', viewValue: 'maquillaje'},
    {value: 'todos', viewValue: 'todos'}
  ];
//siempre va eso asi  cambia el nombre de la clase 
  constructor(public dialog: MatDialog, public servicios:ServiciosService ) 
   {
      this.getServicios();
   }

  ngOnInit() {
  this.getServicios(); 
  }
  getServicios(){
   this.servicios.getServicios().subscribe((resp)=>{
     this.pro = resp['data'];
     console.log(this.pro);

   },(error)=>{
     console.log(error);
   }
  )

  }
}

