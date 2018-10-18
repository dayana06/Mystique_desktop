import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { OpinionesComponent } from './opiniones/opiniones.component';
import { DudasComponent } from './dudas/dudas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReclamosComponent} from './reclamos/reclamos.component';

const routes: Routes = [
  {
    path:'atencionCliente',
    component: SugerenciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtencionClienteRoutingModule { }
