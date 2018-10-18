import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtencionClienteRoutingModule } from './atencion-cliente-routing.module';
import { ReclamosComponent } from './reclamos/reclamos.component';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { SugerenciasComponent, DarRepuestaComentarioComponent } from './sugerencias/sugerencias.component';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { DudasComponent } from './dudas/dudas.component';


@NgModule({
  imports: [
    CommonModule,
    AtencionClienteRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],
  entryComponents:[
    DarRepuestaComentarioComponent,
  ],
  declarations: [
    ReclamosComponent,
    SugerenciasComponent,
    OpinionesComponent,
    DudasComponent,
    DarRepuestaComentarioComponent,
  ]
})
export class AtencionClienteModule { }
