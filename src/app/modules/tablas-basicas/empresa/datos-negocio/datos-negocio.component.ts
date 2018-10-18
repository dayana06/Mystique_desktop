import { SuscripcionComponent } from './../../../reportes/estadisticos/suscripcion/suscripcion.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NegocioService } from '../../../../provider/negocio/negocio.service';
import { Time } from '@angular/common';
import { DescripcionNegocioService } from '../../../../provider/descripcion-negocio/descripcion-negocio.service';
import { ContactoNegocioService } from '../../../../provider/contacto-negocio/contacto-negocio.service';
import { ObjetivoService } from '../../../../provider/objetivo/objetivo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensajeExitoComponent } from '../../../../mensajes/mensaje-exito/mensaje-exito.component';
import { RedSocialService } from '../../../../provider/red-social/red-social.service';

@Component({
  selector: 'app-datos-negocio',
  templateUrl: './datos-negocio.component.html',
  styleUrls: ['./datos-negocio.component.scss']
})
export class DatosNegocioComponent implements OnInit {
  formData=new FormData();
  datosMostrar: {
    id: number;
    rif: string;
    nombre: string;
    hora_inicio_trabajo: String;
    hora_fin_trabajo: string;
    imagen: string;
    estatus: string;
    id_sistema: number;
    fecha_creacion: string; 
  };
  datosMostrarDesc: {
    id: number;
    id_negocio: number;
    descripcion: string;
    titulo: String;
    tipo_descripcion: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  };
  datosMostrarMision: {
    id: number;
    id_negocio: number;
    descripcion: string;
    titulo: String;
    tipo_descripcion: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  };
  datosMostrarVision: {
    id: number;
    id_negocio: number;
    descripcion: string;
    titulo: String;
    tipo_descripcion: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  };
  //contacto
  datosMostrarDirec: {
    id: number;
    id_negocio: number;
    descripcion: string;
    id_ciudad:number;
    tipo_contacto: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  };
  datosMostrarCorreo: {
    id: number;
    id_negocio: number;
    descripcion: string;
    id_ciudad:number;
    tipo_contacto: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  };
  datosMostrarTelefonoc: {
    id: number;
    id_negocio: number;
    descripcion: string;
    id_ciudad:number;
    tipo_contacto: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  };
  //objetivo
  datosMostrarObjetivoG: {
    id: number;
    id_negocio: number;
    titulo: string;
    descripcion: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string;
  };
  datosMostrarObjetivoE1: {
    id: number;
    id_negocio: number;
    titulo: string;
    descripcion: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string;
  };
  datosMostrarObjetivoE2: {
    id: number;
    id_negocio: number;
    titulo: string;
    descripcion: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string;
  };
  datosMostrarObjetivoE3: {
    id: number;
    id_negocio: number;
    titulo: string;
    descripcion: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string;
  };
  datosMostrarTwttir: {
    id: number;
    id_negocio: number;
    nombre: string;
    url: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  };


  datosModificar: {
    id: number;
    rif: string;
    nombre: string;
    hora_inicio_trabajo: String;
    hora_fin_trabajo: string;
    imagen: string;
    estatus: string;
    id_sistema: number;
    fecha_creacion: string; 
  };
  empresa: any;
  //datos
  datosModificarDesc: {
    id: number;
    id_negocio: number;
    descripcion: string;
    titulo: String;
    tipo_descripcion: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  };
  datosModificarMision: {
    id: number;
    id_negocio: number;
    descripcion: string;
    titulo: String;
    tipo_descripcion: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  };
  datosModificarVision: {
    id: number;
    id_negocio: number;
    descripcion: string;
    titulo: String;
    tipo_descripcion: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  };
  //contacto
  datosModificarDirec: {
    id: number;
    id_negocio: number;
    descripcion: string;
    id_ciudad:number;
    tipo_contacto: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  }
  datosModificarCorreo: {
    id: number;
    id_negocio: number;
    descripcion: string;
    id_ciudad:number;
    tipo_contacto: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  }
  datosModificarTelefono: {
    id: number;
    id_negocio: number;
    descripcion: string;
    id_ciudad:number;
    tipo_contacto: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  }
  //objetivo
  datosModificarObjetivoGe: {
    id: number;
    id_negocio: number;
    titulo: string;
    descripcion: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  }
  datosModificarObjetivoE1: {
    id: number;
    id_negocio: number;
    titulo: string;
    descripcion: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  }
  datosModificarObjetivoE2: {
    id: number;
    id_negocio: number;
    titulo: string;
    descripcion: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string;  
  }
  datosModificarObjetivoE3: {
    id: number;
    id_negocio: number;
    titulo: string;
    descripcion: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string;  
  }
  datosModificarTwttir: {
    id: number;
    id_negocio: number;
    nombre: string;
    url: string;
    visible: boolean;
    estatus: string;
    fecha_creacion: string; 
  };
  datos_negocio:{
    id:number,    
    rif:string,
    nombre:string,
    hora_inicio_trabajo:Time,
    hora_fin_trabajo:Time,
  };
datos_twiter:{
  url:string
}
  desc: any;
  contacto:any;
  objetivo: any;
  redS:any;

  
//selec crear servicio
filtroSelec = '';
filtro = [
  {value: 'Barquisimeto', viewValue: 'Barquisimeto'},
  {value: 'Merida', viewValue: 'Mérida'},
  {value: 'trujillo', viewValue: 'trujillo'},
  
];
estado = [
  {value: 'Lara', viewValue: 'Barquisimeto'},
  {value: 'Merida', viewValue: 'Mérida'},
  {value: 'trujillo', viewValue: 'trujillo'},
  
];
  constructor(
    public dialog: MatDialog,
    public negocio: NegocioService,
    public descripc: DescripcionNegocioService,
    public contac: ContactoNegocioService,
    public obj: ObjetivoService,
    public red: RedSocialService,
    private route: ActivatedRoute,
    private router: Router,
    
  ) { 
    this.datos_twiter={
      url:""
    },
    this.datosMostrar = {
      id: 0,
      rif: '',
      nombre: '',
      hora_inicio_trabajo: '',
      hora_fin_trabajo: '',
      imagen: '',
      estatus: '',
      id_sistema: 0,
      fecha_creacion: '',
    },
    this.datos_negocio={
      id: 0,
      rif: '',
      nombre: '',
      hora_inicio_trabajo: null,
      hora_fin_trabajo: null,
    },
    
  this.datosMostrarDesc = {
    id: 0,
    id_negocio: 1,
    descripcion: '',
    titulo: '',
    tipo_descripcion: '',
    visible: true,
    estatus: 'A',
    fecha_creacion: '' 
  },
  this.datosMostrarMision = {
    id: 0,
    id_negocio: 1,
    descripcion: '',
    titulo: '',
    tipo_descripcion: '',
    visible: true,
    estatus: 'A',
    fecha_creacion: '' 
  };
  this.datosMostrarVision = {
    id: 0,
    id_negocio: 1,
    descripcion: '',
    titulo: '',
    tipo_descripcion: '',
    visible: true,
    estatus: 'A',
    fecha_creacion: '' 
  };
    this.datosModificar = {
      id: 0,
      rif: '',
      nombre: '',
      hora_inicio_trabajo: '',
      hora_fin_trabajo: '',
      imagen: '',
      estatus: '',
      id_sistema: 0,
      fecha_creacion: '',
    },
    
  this.datosModificarMision = {
    id: 0,
    id_negocio: 1,
    descripcion: '',
    titulo: '',
    tipo_descripcion: '',
    visible: true,
    estatus: 'A',
    fecha_creacion: '' 
  };
  this.datosModificarVision = {
    id: 0,
    id_negocio: 1,
    descripcion: '',
    titulo: '',
    tipo_descripcion: '',
    visible: true,
    estatus: 'A',
    fecha_creacion: '' 
  };
    this.datosModificarDesc = {
      id: 0,
    id_negocio: 1,
    descripcion: '',
    titulo: '',
    tipo_descripcion: '',
    visible: true,
    estatus: 'A',
    fecha_creacion: '' 
    },
    
  //contacto
  this.datosMostrarDirec = {
    id: 0,
    id_negocio: 1,
    descripcion: "",
    id_ciudad: 0,
    tipo_contacto: "",
    visible: true,
    estatus: "",
    fecha_creacion: "" 
  },
  this.datosMostrarCorreo = {
    id: 0,
    id_negocio: 1,
    descripcion: "",
    id_ciudad: 0,
    tipo_contacto: "",
    visible: true,
    estatus: "",
    fecha_creacion: "" 
  },
  this.datosMostrarTelefonoc = {
    id: 0,
    id_negocio: 1,
    descripcion: "",
    id_ciudad: 0,
    tipo_contacto: "",
    visible: true,
    estatus: "",                
    fecha_creacion: "" 
  },
  this.datosModificarDirec = {
    id: 0,
    id_negocio: 1,
    descripcion: "",
    id_ciudad: 0,
    tipo_contacto: "",
    visible: true,
    estatus: "",
    fecha_creacion: "" 
  }
  this.datosModificarCorreo = {
    id: 0,
    id_negocio: 1,
    descripcion: "",
    id_ciudad: 0,
    tipo_contacto: "",
    visible: true,
    estatus: "",
    fecha_creacion: "" 
  }
  this.datosModificarTelefono = {
    id: 0,
    id_negocio: 1,
    descripcion: "",
    id_ciudad: 0,
    tipo_contacto: "",
    visible: true,
    estatus: "",
    fecha_creacion: "" 
  }
  this.datosMostrarObjetivoG = {
    id: 0,
    id_negocio: 0,
    titulo: "",
    descripcion: "",
    visible: true,
    estatus: "",
    fecha_creacion: "",
  };
  this.datosMostrarObjetivoE1 = {
    id: 0,
    id_negocio: 0,
    titulo: "",
    descripcion: "",
    visible: true,
    estatus: "",
    fecha_creacion: "",
  };
  this.datosMostrarObjetivoE2 = {
    id: 0,
    id_negocio: 0,
    titulo: "",
    descripcion: "",
    visible: true,
    estatus: "",
    fecha_creacion: "",
  };
  this.datosMostrarObjetivoE3 = {
    id: 0,
    id_negocio: 0,
    titulo: "",
    descripcion: "",
    visible: true,
    estatus: "",
    fecha_creacion: "",
  }
  this.datosModificarObjetivoGe = {
    id: 0,
    id_negocio: 0,
    titulo: "",
    descripcion: "",
    visible: true,
    estatus: "",
    fecha_creacion: "",
  }
  this.datosModificarObjetivoE1 = {
    id: 0,
    id_negocio: 0,
    titulo: "",
    descripcion: "",
    visible: true,
    estatus: "",
    fecha_creacion: "",
  }
  this.datosModificarObjetivoE2 = {
    id: 0,
    id_negocio: 0,
    titulo: "",
    descripcion: "",
    visible: true,
    estatus: "",
    fecha_creacion: "",
  }
  this.datosModificarObjetivoE3 = {
    id: 0,
    id_negocio: 0,
    titulo: "",
    descripcion: "",
    visible: true,
    estatus: "",
    fecha_creacion: "",
  }
 this.datosModificarTwttir = {
    id: 0,
    id_negocio: 0,
    nombre: "",
    url: "",
    visible: true,
    estatus: "",
    fecha_creacion: "", 
  }

  
 this.datosMostrarTwttir = {
  id: 0,
  id_negocio: 0,
  nombre: "",
  url: "",
  visible: true,
  estatus: "",
  fecha_creacion: "", 
}

  }

  ngOnInit() {
    this.getEmpresa();
    this.getDescripcion();
    this.getContacto();
    this.getObjetivo();
    this.getRedS();
  }
  openDialog() {
    const dialogRef = this.dialog.open(CrearObjetivosComponent, {
      height: '300px',
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('mostrado');
    });
  }
   //lo que siempre se hace 
  getEmpresa(){
    console.log('OK');
    this.negocio.getNegocio().subscribe(
      (data)=>{
        this.empresa = data['data'];
        this.datosMostrar = this.empresa[0];
       // this.datosModificar = this.datosMostrar;
        console.log(this.empresa);
        console.log(this.datosMostrar);
      },(error) =>{
        console.log(error);
      }
    )
  }
  getRedS(){
    console.log('OK');
    this.red.getRedS().subscribe(
      (data)=>{
        this.red = data['data'];
        this.datosMostrarTwttir = this.red[0];
        //this.datosModificarTwttir = this.datosMostrarTwttir;
        console.log(this.red)
  
      },(error) =>{
        console.log(error);
      }
    )
  }
  getDescripcion(){
    this.descripc.getNegocio().subscribe(
      (data)=>{
        this.desc = data['data'];
        for (let i=0; i<this.desc.length; i++){
          if (this.desc[i].tipo_descripcion === "descripcion"){
            this.datosMostrarDesc = this.desc[i]
            this.datosModificarDesc = this.datosMostrarDesc;
         
          }else if(this.desc[i].tipo_descripcion === "mision"){
            this.datosMostrarMision = this.desc[i]; 
            this.datosModificarMision = this.datosMostrarMision;
            
          }else{
            this.datosMostrarVision = this.desc[i];
            this.datosModificarVision = this.datosMostrarVision;
          }
        }
      },(error) =>{
        console.log(error);
      }
    )
  }
  getContacto(){
    console.log('OK');
    this.contac.getNegocio().subscribe(
      (data)=>{
        this.contacto = data['data'];
        console.log(this.contacto);
        for(let i=0; i<this.contacto.length; i++){
          if (this.contacto[i].tipo_contacto === "direccion"){
            this.datosMostrarDirec = this.contacto[i];
            this.datosModificarDirec = this.datosMostrarDirec;    
         
          }else if(this.contacto[i].tipo_contacto === "correo"){
            this.datosMostrarCorreo = this.contacto[i];
            this.datosModificarCorreo = this.datosMostrarCorreo;
            
          }else{
            this.datosMostrarTelefonoc = this.contacto[i];
            this.datosModificarTelefono = this.datosMostrarTelefonoc;
          }
        }
      },(error) =>{
        console.log(error);
      }
    )
  }
  
  getObjetivo(){
    var cont=0;
    this.obj.getNegocio().subscribe(
      (data)=>{
        this.objetivo = data['data'];
        
        for (let i=0; i<this.objetivo.length; i++){
          if (this.objetivo[i].titulo === "general"){
            this.datosMostrarObjetivoG = this.objetivo[i]
            this.datosModificarObjetivoGe = this.datosMostrarObjetivoG;
          }else {
            if(cont === 0){
              cont++;
              this.datosMostrarObjetivoE1 = this.objetivo[i]; 
              this.datosModificarObjetivoE1= this.datosMostrarObjetivoE1;            
            }else if(cont === 1){
              cont++;
              this.datosMostrarObjetivoE2 = this.objetivo[i]; 
              this.datosModificarObjetivoE2= this.datosMostrarObjetivoE2;
            }else{              
                this.datosMostrarObjetivoE3 = this.objetivo[i]; 
                this.datosModificarObjetivoE3= this.datosMostrarObjetivoE3;
            }
          }
        }
      },(error) =>{
        console.log(error);
      }
    )
  }

  update(){
    console.log(this.datos_negocio);
    this.datos_negocio.id=this.datosMostrar.id
    //UPDATE DE NEGOCIO
    this.formData.append('rif',this.datos_negocio.rif);
    this.formData.append('nombre',this.datos_negocio.nombre);
    this.formData.append('hora_inicio_trabajo',String(this.datos_negocio.hora_inicio_trabajo));
    this.formData.append('hora_fin_trabajo',String(this.datos_negocio.hora_fin_trabajo));
    this.negocio.updateNegocio(this.datosMostrar.id, this.formData).subscribe(
      (data) => {
        console.log(data)
      },(error) =>{
        console.log(error);
      } 
    )
    
    this.descripc.updateNegocio(this.datosMostrarDesc.id, this.datosModificarDesc).subscribe(
      (data) => {
        console.log(data)
      },(error) =>{
        console.log(error);
      } 
    )

    
    this.descripc.updateNegocio(this.datosMostrarMision.id, this.datosModificarMision).subscribe(
      (data) => {
        console.log(data)
      },(error) =>{
        console.log(error);
      } 
    )
   
    this.descripc.updateNegocio(this.datosMostrarVision.id, this.datosModificarVision).subscribe(
      (data) => {
        console.log(data)
      },(error) =>{
        console.log(error);
      } 
    )
    
    this.contac.updateNegocio(this.datosMostrarDirec.id, this.datosModificarDirec).subscribe(
      (data) => {
        console.log(data)
      },(error) =>{
        console.log(error);
      } 
    )
    
    this.contac.updateNegocio(this.datosMostrarCorreo.id, this.datosModificarCorreo).subscribe(
      (data) => {
        console.log(data) 
      },(error) =>{
        console.log(error);
      } 
    )
    
    this.contac.updateNegocio(this.datosMostrarTelefonoc.id, this.datosModificarTelefono).subscribe(
      (data) => {   
        console.log(data)
      },(error) =>{
        console.log(error);
      } 
    )
    
    //OBJETIVOS
    this.obj.updateNegocio(this.datosMostrarObjetivoG.id, this.datosModificarObjetivoGe).subscribe(
      (data) => {    
        console.log(data)
      },(error) =>{
        console.log(error);
      } 
    )
    
    this.obj.updateNegocio(this.datosMostrarObjetivoE1.id, this.datosModificarObjetivoE1).subscribe(
      (data) => {
        console.log(data)
      },(error) =>{
        console.log(error);
      } 
    )
    
    this.obj.updateNegocio(this.datosMostrarObjetivoE2.id, this.datosModificarObjetivoE2).subscribe(
      (data) => {
        console.log(data)
      },(error) =>{
        console.log(error);
      } 
    )
    
    this.obj.updateNegocio(this.datosMostrarObjetivoE3.id, this.datosModificarObjetivoE3).subscribe(
      (data) => {
        console.log(data)         
      },(error) =>{
        console.log(error);
      } 
    );
   
    
    this.mostrarMensajeExito();
  }
  mostrarMensajeExito(): void {//opens the modal
    let dialogRef = this.dialog.open(MensajeExitoComponent, {
      width: '300px',//sets the width
      height: '140px', 
      data: { msj: 'Datos del negocio modificados exitosamente' }//send this class's attributes to the modal
    });
  
    dialogRef.afterClosed().subscribe(result => {//when closing the modal, its results are handled by the result attribute.
      console.log('Modal closed!');
      this.router.navigate(['empresaEditar']);
      //this.router.onSameUrlNavigation
      
    });  
  }
  
}


@Component({
  selector: 'app-crear-objetivos',
  templateUrl: './crear-objetivos.component.html',
  styleUrls: ['./crear-objetivos.component.scss']
})

export class  CrearObjetivosComponent implements OnInit {
  
  filtro = [
    {value: 'gral', viewValue: 'General'},
    {value: 'esp', viewValue: 'Específicos'},
    

    
  ];
constructor() { }

  ngOnInit() {

  }

  
}
