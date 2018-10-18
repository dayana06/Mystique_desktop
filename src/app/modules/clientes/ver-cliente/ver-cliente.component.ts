import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.scss']
})
export class VerClienteComponent implements OnInit {

  verTabPerfil=false;//Variable de control para desplegar el contenido del perfil del cliente
  constructor() { }
  ngOnInit() {
  }
  //Metodo que le permite a las variables de control desplegar sus respectivas vistas.
  verificarTab(grupo_de_tabs){
    if (grupo_de_tabs.selectedIndex==1) {
      this.verTabPerfil=true;
    } 
  }
}
