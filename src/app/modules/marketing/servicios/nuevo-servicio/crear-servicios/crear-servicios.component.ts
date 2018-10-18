import { Component, OnInit } from '@angular/core';
import { ENTER } from '@angular/cdk/keycodes';
import { COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-crear-servicios',
  templateUrl: './crear-servicios.component.html',
  styleUrls: ['./crear-servicios.component.scss']
})
export class CrearServiciosComponent implements OnInit {
 

//selecionar Categoria
filtroSelec = '';
filtro = [
  {value: 'Peluqueria', viewValue: 'Peluqueria'},
  {value: 'Maquillaje', viewValue: 'Maquillaje'},
  
];
listaTipoServicios: Array<{id_cate: string, id_tipo: string, nombre: string, descrip: string}>;
listaParametro: Array<{}> = [];


insumoSeleccionados = [];
insumo = ['Silicón', 'Agua Oxigenada', 'Acondicionador', 'Keratina', 'ganchos negros', 'polvo compacto', 'labial'];
visible:    boolean = true;
selectable: boolean = true;
removable: boolean = true;
addOnBlur: boolean = true;

// Enter, comma
separatorKeysCodes = [ENTER, COMMA];

insumos = [
 { name: 'Champú' },
 { name: 'Tinte' },
 { name: 'Gel' },
];
step = 0;

setStep(index: number) {
  this.step = index;
}

nextStep() {
  this.step++;
}

prevStep() {
  this.step--;
}

add(event: MatChipInputEvent): void {
  let input = event.input;
  let value = event.value;

  // Add our fruit
  if ((value || '').trim()) {
    this.insumos.push({ name: value.trim() });
  }

  // Reset the input value
  if (input) {
    input.value = '';
  }
}

  constructor() {this.listaTipoServicios = [
      {id_cate: 'Peluqueria', id_tipo: '1', nombre: 'lavado,', descrip: 'xxxxx'},
      {id_cate: 'Peluqueria', id_tipo: '2', nombre: 'corte', descrip: 'xxxxx'},
      {id_cate: 'Peluqueria', id_tipo: '3', nombre: 'colorimetria', descrip: 'xxxx'},
      {id_cate: 'Maquillaje', id_tipo: '5', nombre: 'Pertenece a Maquillaje', descrip: 'xxxx'},
      {id_cate: 'Maquillaje', id_tipo: '6', nombre: 'Pertenece a Maquillaje Tambien', descrip: 'xxxx'}
    ];

  }


  ngOnInit() {
  }
  
  //Metodo para buscar Tipos de servicios por categoria :
  cargarTipoServisios(id)  {
   let j = 0;

    for (let i = 0; i < this.listaTipoServicios.length; i++) {
      if (this.listaTipoServicios[i].id_cate === id) {
        this.listaParametro[j] = this.listaTipoServicios[i];
        j++;  } }
    return this.listaParametro ; }
  }
