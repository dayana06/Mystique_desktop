import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disenio',
  templateUrl: './disenio.component.html',
  styleUrls: ['./disenio.component.scss']
})
export class DisenioComponent implements OnInit {
  
  //verTabDisenio=false;//Variable de control para desplegar el contenido del perfil del cliente

  constructor() { }

  ngOnInit() {
  }

  /*verificarTab(grupo_de_tabs){
    if (grupo_de_tabs.selectedIndex==1) {
      this.verTabDisenio=true;
    } 
  }*/

}
