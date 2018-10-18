import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cambiarImagen(event,id) { // se llama cada vez que ocurre el evento change del file input
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); //lee el archivo como datos del url
      reader.onload = (event:any) => { //se llama una vez que se lea del url
      document.getElementById(id).setAttribute('src',event.target.result);
      }
    }
  }

}
