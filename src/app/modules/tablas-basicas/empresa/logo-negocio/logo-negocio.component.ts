import { Component, OnInit,ElementRef } from '@angular/core';
import { NegocioService } from '../../../../provider/negocio/negocio.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-logo-negocio',
  templateUrl: './logo-negocio.component.html',
  styleUrls: ['./logo-negocio.component.scss']
})
export class LogoNegocioComponent implements OnInit {
 neg: any; 
 id: number; 
 imagen: string;
 inputEl: any;
  fileCount: number;
  formData = new FormData();
  constructor(public dialog: MatDialog,  public negocio: NegocioService,)
   { 
     this.getNegocio();
   }
 
  ngOnInit() {
    this.getNegocio();
  }
  
  getNegocio() {
    this.negocio.getNegocio().subscribe((resp) => {
      this.neg = resp['data'];
      console.log(this.neg);
    }, (error) => {
        console.log(error);
      });
    }
/*
    updateNegocio() {
      //agregar imagen
      this.inputEl = document.getElementById('#fileInput');
      this.fileCount = this.inputEl.files.length;
      console.log(this.fileCount);
      if (this.fileCount > 0) {
        this.formData.append('archivo', this.inputEl.files.item(0));
      }
    console.log(this.negocio);
    
    //Ejecutar postw
    this.negocio.updateNegocio(this.neg.id,this.formData).subscribe(data => { alert('Exito'); }, Error => { console.log(Error); });
  }
  
      
  */    
    
   

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
