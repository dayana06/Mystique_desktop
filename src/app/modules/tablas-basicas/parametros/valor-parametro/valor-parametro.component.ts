import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

interface Val {
  valor: string;
  descrip: string;
};

@Component({
  selector: 'app-valor-parametro',
  templateUrl: './valor-parametro.component.html',
  styleUrls: ['./valor-parametro.component.scss']
})
export class ValorParametroComponent implements OnInit {
  panelOpenState = true;

  valores: Val[] = [
  { valor: 'Normal', descrip: ' También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel. '
  },
  {
    valor: 'Seco',   descrip: ' También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel. '
  },
  {
    valor: 'Mixto', descrip:  'También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel.'
  },
  {
    valor: 'Maltratado', descrip: ' También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel.'
  }
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


//Modal de Valor Parametro
openDialogValorParametro() {
  const dialogRef = this.dialog.open(CrearValorParametroComponent, {
    height: '350px',
    width: '350px'
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('mostrado');
  });
}
}
//Componentes Para cada Agregar:
@Component({
  selector: 'app-crear-valor-parametro',
  templateUrl: './crear-valor-parametro.component.html',
  styleUrls: ['./crear-valor-parametro.component.scss']
})

export class CrearValorParametroComponent{
  constructor() { }

ngOnInit(){

}}