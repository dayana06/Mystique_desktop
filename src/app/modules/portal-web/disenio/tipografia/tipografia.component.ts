import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipografia',
  templateUrl: './tipografia.component.html',
  styleUrls: ['./tipografia.component.scss']
})
export class TipografiaComponent implements OnInit {

  titulos = [
    {value: '0', nombre: 'Abril Fatface'},
    {value: '1', nombre: 'Times New Roman'},
    {value: '2', nombre: 'Pristina'}
  ];
  subtimenus=[
    {value: '0', nombre: 'Roboto'},
    {value: '1', nombre: 'Chriller'},
    {value: '2', nombre: 'Verdana'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
