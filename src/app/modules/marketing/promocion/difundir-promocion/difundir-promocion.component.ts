import { Component, OnInit } from '@angular/core';

interface TipoParametro {
nombreTP: string;
Parametros: Tpa[];
}

interface Val {
  valor: string;
  descrip: string;
}
interface Tpa {
nombre: string;

}

@Component({
  selector: 'app-difundir-promocion',
  templateUrl: './difundir-promocion.component.html',
  styleUrls: ['./difundir-promocion.component.scss']
})



export class DifundirPromocionComponent implements OnInit {
 panelOpenState = false;
 
 datos: TipoParametro[] = [
{           nombreTP: 'Cabello',

 Parametros: [
      {	    nombre: '(Tipo Estructura)'
      },
     {	    nombre: '(Emulsión Epicutannia)'

     },
    {	      nombre: '(Color)'
     }
             ],
   },

  {         nombreTP: 'Ojo' ,
            Parametros: [
      {	    nombre: 'Forma',
      },
      {	    nombre: 'Color',
      }
             ],
   },
  {
         nombreTP: 'Cuero Cabelludo',
         Parametros: [
         {nombre: 'xxxxxxx',
         },
         {nombre: 'Xxxxxxxx'}],
    },

      {
             nombreTP: 'Labios',
             Parametros: [
             { nombre: 'algun parametro'
             },
             {
               nombre: 'Xxxxxxxx' }  ], }
];

valores: Val[] = [
{ valor: 'Normal', descrip: ' También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel. '
},
{
  valor: 'Seco',   descrip: ' También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel. '
},
{
  valor: 'Mixto', descrip:  'También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel.'
},
{
  valor: 'Maltratado', descrip: ' También llamada manto hidrolipídico, es una mezcla de sebo, sudor y células muertas que recubre la piel.'
}
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

  constructor() { }

  ngOnInit() {
  }

}

