import { Component, OnInit } from '@angular/core';
import { MensajeExitoComponent } from '../../../../mensajes/mensaje-exito/mensaje-exito.component';
import { MatDialog } from '@angular/material';

interface TipoParametro {

  Parametros: Tpa[];
  }
  interface Tpa {
    nombre: string;
    
    }
interface Val {
  valor: string;
  stat: boolean;
}
@Component({
  selector: 'app-depuraciones',
  templateUrl: './depuraciones.component.html',
  styleUrls: ['./depuraciones.component.scss']
})
export class DepuracionesComponent implements OnInit {

  fech1="";
  fech2="";
hoy=new Date();

  miFiltro = (d: Date): boolean => {
    const day = d;
    // Prevent Saturday and Sunday from being selected.
    return day <= this.hoy;
  }
 
  valores: Val[] = [
    { valor: 'Notificaciones', stat: false
    },
    {
      valor: 'Clientes Potenciales',   stat: false
    },
    {
      valor: 'Solicitudes sin agendar', stat:  false
    },
    
    ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

cambiar(valor)
{
  if(valor.stat){
    valor.stat=false;
  }else{
    valor.stat=true;
  }
}

verificar(){
  if(this.fech1!="" && this.fech2!=""){
    let verificado=false;
    if(this.valores[0].stat){verificado=true;}
    if(this.valores[1].stat){verificado=true;}
    if(this.valores[2].stat){verificado=true;}
    if(verificado){
      this.mostrarMensajeExito("Datos depurados exitosamente!");
    }else{
      this.mostrarMensajeExito("Seleccione lo que desea depurar.");
    }
  }else{
    this.mostrarMensajeExito("Debe tipear fecha!");
  }
  
  
}



mostrarMensajeExito(mns): void {//opens the modal
  let dialogRef = this.dialog.open(MensajeExitoComponent, {
    width: '300px',//sets the width
    height: '160px', 
    data: { msj: mns }//send this class's attributes to the modal
  });

  dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
    console.log('modal cerrado');
  });
}

}
