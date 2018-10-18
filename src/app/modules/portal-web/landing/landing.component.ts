import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  // verTabDisenio=false;//Variable de control para desplegar el contenido del perfil del cliente

  constructor() { }

  ngOnInit() {
  }

  /*verificarTab(grupo_de_tabs){
    if (grupo_de_tabs.selectedIndex==1) {
      this.verTabDisenio=true;
    }
  }*/
}

export interface ItituloSeccion {
  id_sistema: Number;
  boton: String;
  titulo: String;
  tipo_seccion: String;
  descripcion: String;
  estatus: String;
  fecha_creacion: Date;
  visible: Boolean;
}

export interface Iimagen {
  id_sistema: Number;
  imagen: String;
  boton: String;
  titulo: String;
  tipo_imagen: String;
  descripcion: String;
  estatus: String;
  fecha_creacion: Date;
}