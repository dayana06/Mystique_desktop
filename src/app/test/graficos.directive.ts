import { Directive, Input, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
@Directive({
  selector: '[appGraficos]'
})
export class GraficosDirective {
  @Input() tipo: string;
  @Input() datos;

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  chart =[];

  constructor(private el: ElementRef) { 
  }

  ngOnInit(){
    this.canvas = this.el.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    if(this.tipo == 'bar'){
      this.charBarInit(this.datos);
    }else if(this.tipo == 'line'){
      //pones la funcion para crear datos
    }
  }

  charBarInit(datos){
    this.chart = new Chart(this.ctx,datos);
  }


}
