import { NegocioService } from './../../../provider/negocio/negocio.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {
//selec crear servicio
filtroSelec = '';
filtro = [
  {value: 'Barquisimeto', viewValue: 'Barquisimeto'},
  {value: 'Merida', viewValue: 'Merida'},
  {value: 'trujillo', viewValue: 'trujillo'},

];
  constructor(
    public dialog: MatDialog,
 
  ) { }

  ngOnInit() {
    
  }
  
}



