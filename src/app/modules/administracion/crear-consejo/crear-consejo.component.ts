/*import { Component, OnInit } from '@angular/core';
import {ConsejosService } from '../../../provider/consejos/consejos.service';
@Component({
  selector: 'app-crear-consejo',
  templateUrl: './crear-consejo.component.html',
  styleUrls: ['./crear-consejo.component.scss']
})
export class CrearConsejoComponent implements OnInit {
categorias: any ;
enabled: Boolean = false;
verBasico: Boolean = true;
consejo: {id: string, titulo: string, descripcion: string, autor: string, imagen: string , estatus: string, fec: Date };

  constructor(public crear_consejo_s: ConsejosService) {
    this.categorias = [
      {nombre: 'Peluqueria'},
      {nombre: 'Maquillaje'},
      {nombre: 'Todas'}
    ];
   }
   pasos() {
    this.verBasico = false;
     this.enabled = true;
   }

  ngOnInit() {
  }
  cambiarImagen(event, id) { // se llama cada vez que ocurre el evento change del file input
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); //
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any) => { //
      document.getElementById(id).setAttribute('src', event.target.result);
      };
    }
  }

/*crearConsejo() {
this.crear_consejo_com.setConsejo(this.consejo).subscribe((data) => {
console.log(data);


},
(error) => {console.log(error) }
);* */

//}




