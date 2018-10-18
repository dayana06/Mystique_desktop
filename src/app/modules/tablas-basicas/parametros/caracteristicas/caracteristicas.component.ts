import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
interface TipoParametro {
    nombreTP: string;
    Parametros: Tpa[];
  }
  interface Tpa {
    nombre: string;  
  }
@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.scss']
})
export class CaracteristicasComponent implements OnInit {
  panelOpenState = true;

 datos: TipoParametro[] = [
{
  nombreTP: 'Cabello',
  Parametros: [
        {
          nombre: '(Tipo Estructura)'
        },
        {
          nombre: '(Emulsión Epicutannia)'
        },
        {
          nombre: '(Color)'
        }
    ],
},
{
  nombreTP: 'Ojo' ,
  Parametros: [
        {
          nombre: 'Forma',
        },
        {	    
          nombre: 'Color',
        }
    ],
},
{
  nombreTP: 'Cuero Cabelludo',
  Parametros: [
        {
          nombre: 'xxxxxxx',
        },
        {
          nombre: 'Xxxxxxxx'
        }
    ],
},
{
  nombreTP: 'Labios',
  Parametros: [
        { 
          nombre: 'Grosor'
        },
        {
          nombre: 'Color' 
        }  
    ],
}
];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
 //Modal de Parametro:
 openDialogParametro() {
  const dialogRef = this.dialog.open(CrearNuevoParametroComponent, {
    height: '350px',
    width: '450px'
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('mostrado');
  });
}
//Modal de Tipo Parametro
openDialogTipoParametro() {
  const dialogRef = this.dialog.open(CrearTipoParametroComponent, {
    height: '350px',
    width: '400px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('mostrado');
  });
}
}
@Component({
  selector: 'app-crear-tipo-parametro',
  templateUrl: './crear-tipo-parametro.component.html',
  styleUrls: ['./crear-tipo-parametro.component.scss']
})
export class CrearTipoParametroComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
@Component({
  selector: 'app-crear-nuevo-parametro',
  templateUrl: './crear-nuevo-parametro.component.html',
  styleUrls: ['./crear-nuevo-parametro.component.scss']
})

export class CrearNuevoParametroComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
