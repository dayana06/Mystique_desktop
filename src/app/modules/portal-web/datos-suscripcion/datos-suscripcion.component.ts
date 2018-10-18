import { Component, OnInit, ElementRef } from '@angular/core';
import { TipoParametroService } from '../../../provider/tipo-parametro/tipo-parametro.service';
import { ParametroService } from '../../../provider/parametro/parametro.service';

@Component({
  selector: 'app-datos-suscripcion',
  templateUrl: './datos-suscripcion.component.html',
  styleUrls: ['./datos-suscripcion.component.scss'],
  providers: [TipoParametroService, ParametroService]
})
export class DatosSuscripcionComponent implements OnInit {
  filtroSelec;

  listadoTipoParametro = [] as any;

  listadoParametro = [] as any;

  listToShow = [] as any;
  constructor(public tipoParametroService: TipoParametroService, public parametroService: ParametroService, public el: ElementRef) {
  }

  ngOnInit() {
    this.getTipoParametros();
    this.getParametros();
  }

  getTipoParametros() {
    this.tipoParametroService.getTipoParametros().subscribe(
      (data) => {
        this.listadoTipoParametro = data['data'];
      }, (error) => {
        console.log(error);
      }
    )
  }

  getParametros() {
    this.parametroService.getParametros().subscribe(
      (data) => {
        this.listadoParametro = data['data'];
      }, (error) => {
        console.log(error);
      }
    )
  }

  loadList() {
    this.listToShow = []
    for (let item of this.listadoParametro) {
      if (this.filtroSelec == item.id_tipo_parametro) {
        this.listToShow.push(item);
      }

    }

  }

  loadQuestion(id) {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#checkbox' + id);
    let visible;
    if (inputEl.classList.contains('mat-checkbox-checked')) {
      visible = false;
    } else {
      console.log('true');
      visible = true;
    }
    this.parametroService.putParametros(id, { visible: visible }).subscribe(data => { }, Error => { alert('Error actualizando pregunta'); console.log(Error); });


  }

  configureQuestions() { }

}
