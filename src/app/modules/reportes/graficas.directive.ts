import { Directive, Input, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
@Directive({
  selector: '[appGraficas]'
})
export class GraficasDirective {
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
      this.charLineInit(this.datos);
    }else if(this.tipo == 'horizontalBar'){
      this.charHorizontalBarInit(this.datos);
    }else if(this.tipo == 'doughnut'){
      this.charDoughnutInit(this.datos);
    }else if(this.tipo == 'pie'){
      this.charPieInit(this.datos);
  }
  }

  charBarInit(datos){
    this.chart = new Chart(this.ctx,datos);
  }

  charLineInit(datos){
    this.chart = new Chart(this.ctx, datos);
  }
  charHorizontalBarInit(datos){
    this.chart = new Chart(this.ctx, datos);
  }
  charDoughnutInit(datos){
    this.chart = new Chart(this.ctx, datos);
  }
  charPieInit(datos){
    this.chart = new Chart(this.ctx, datos);
  }
}
