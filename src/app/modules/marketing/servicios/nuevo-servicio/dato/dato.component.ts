import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dato',
  templateUrl: './dato.component.html',
  styleUrls: ['./dato.component.scss']
})
export class DatoComponent implements OnInit {


  listaTipoParam: ITipoParametro[]=[
    {id:1,nombre:"Datos basico",fecha_creacion:"2018-03-02",estatus:"activo"},
    
    
];
parametros: IParametro[]=[
  {id:1,id_tipo_parametro:1,//Cabello
  nombre:"Sexo",fecha_creacion:"2018-02-02",estatus:"activo"},
 
];

valoresParametro: IValorParametro[]=[
  {id:1,id_parametro:1,//tipo (emulsion epicutanea)
   nombre:"Mujer",descripcion:" feneminino",
   fecha_creacion:"2018-02-02",estatus:"activo"},
  {id:2,id_parametro:1,//tipo (emulsion epicutanea)
  nombre:"Hombre",descripcion:"sexo hombre",
  fecha_creacion:"2018-02-02",estatus:"activo"},
  {id:3,id_parametro:1,//tipo (emulsion epicutanea)
  nombre:"Indefinido",descripcion:"sexo indefinido",
  fecha_creacion:"2018-02-02",estatus:"activo"},

];

datos_a_mostrar: IParametroValorParametro[]=[];
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
  constructor() { }
  ngOnInit() { /*Aca se inicializa la lista de valores parametro*/
    this.parametros.forEach(elem=> {let longi=0;let arra:IValorParametro[]=[];this.valoresParametro.forEach(element => {if(element.id_parametro==elem.id){longi=arra.push(element);}});longi=this.datos_a_mostrar.push({nombre_parametro:elem,valores_parametro:arra});});
  }
  checkear(parametro){
    if (parametro.estatus=="activo")
    {parametro.estatus="inactivo";
    this.n=0;
    ///////////////////////////////////////////////BORRA UN PARAMETRO DE LA LISTA PARA MOSTRAR VALORES PARAMETROS.
    let b:IParametroValorParametro[];
    for (let i = 0; i < this.datos_a_mostrar.length; i++) {
      const element = this.datos_a_mostrar[i];
      if (element.nombre_parametro.id==parametro.id) {
        b=this.datos_a_mostrar.splice(this.datos_a_mostrar.indexOf(element),1);
        break;
      }
    }
    ///////////////////////////////////////////////
    } 
    else
    {parametro.estatus="activo";
    ///////////////////////////////////////////////AGREGA PARAMETROS A LA LISTA DE VALORES PARAMETROS
    let longitud=0;
    let arr:IValorParametro[]=[];
    this.valoresParametro.forEach(element => {
      if(element.id_parametro==parametro.id){longitud=arr.push(element);}});
    longitud=this.datos_a_mostrar.push({nombre_parametro:parametro,valores_parametro:arr});
    this.n=(longitud-1);
    ///////////////////////////////////////////////
    }
  }
  n=0;
  siguiente(){
    if(this.n==(this.datos_a_mostrar.length-1)){
      this.n=0;
    }
    else{
      this.n++;
    }
  }


}
/* DE LA PARAMETRIZACION */
interface ITipoParametro{ //Ejm: Cabello
  id:number;
  nombre:string;
  fecha_creacion:string;//Date
  estatus:string;
}
interface IParametro{ //Ejm: longitud
  id:number;
  id_tipo_parametro:number;
  nombre:string;
  fecha_creacion:string;//Date
  estatus:string;
}
interface IValorParametro{ //Ejm: corto
  id:number; 
  id_parametro:number;
  nombre:string; 
  descripcion:string;//Lo agregue, pero no esta contemplado en la entidad
  fecha_creacion:string//Date; 
  estatus:string;
}
interface IParametroValorParametro{
  nombre_parametro: IParametro;
  valores_parametro: IValorParametro[];
}

  

