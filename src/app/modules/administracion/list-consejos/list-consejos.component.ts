import { Component, OnInit } from '@angular/core';
import { ConsejosService } from '../../../provider/consejos/consejos.service';

@Component({
  selector: 'app-list-consejos',
  templateUrl: './list-consejos.component.html',
  styleUrls: ['./list-consejos.component.scss']
})
export class ListConsejosComponent implements OnInit {

  pro: any;
  constructor(public servi_servicio: ConsejosService )  {
    this.getConsejo();
}

  ngOnInit() {
    
    this.getConsejo();
  }

  getConsejo() {
    this.servi_servicio.getConsejo().subscribe((resp) => {
      this.pro = resp['data'];
      console.log(this.pro);
    }, (error) => {
        console.log(error);
      }); }




}
