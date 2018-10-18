import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
interface insumos1{
  nombre: string;
  unidad: string;
}
interface insumos2{
  nombre2: string;
  unidad2: string;
}
interface insumos3{
  nombre3: string;
  unidad3: string;
}
interface otros{
  nombre4: string;
  unidad4: string;
}
@Component({
  selector: 'app-insumos-utilizados',
  templateUrl: './insumos-utilizados.component.html',
  styleUrls: ['./insumos-utilizados.component.scss']
})
export class InsumosUtilizadosComponent implements OnInit {
insumos1: insumos1[] = [
  {
    nombre: "Agua oxigenada",
    unidad: "ml"
  },
  {
    nombre: "Tinte",
    unidad: "ml"
  }
];
insumos2: insumos2[] = [
  {
    nombre2: "Silicón",
    unidad2: "ml"
  },
];
insumos3: insumos3[] = [
  {
    nombre3: "Sombra",
    unidad3: "gr"
  },
  {
    nombre3: "labial",
    unidad3: "gr"
  },
]
otros1: otros[] = [
  {
    nombre4: "Ganchos negros",
    unidad4: "u"
  },
]
  constructor(public dialog: MatDialog) { }
  openDialog(){
    const dialogRef = this.dialog.open(AgregarInsumoComponent, {
      height: '320px',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
 }
  ngOnInit() {
  }

}

@Component({
  selector: 'app-agregar-insumo',
  templateUrl: './agregar-insumo.component.html',
  styleUrls: ['./agregar-insumo.component.scss']
})
export class AgregarInsumoComponent {
  valor = "";
  filtro = [
    {value: "sombra", viewValue: 'Sombra de ojos '},
    {value: "gel", viewValue: 'Gelatina'},
    {value: "rim", viewValue: 'Rimel'},
    {value: "deco", viewValue: 'Decolorante'},
    {value: "guantes", viewValue: 'Guantes'},
    
  ];
  
}
