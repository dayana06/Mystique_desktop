import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisenioComponent } from './disenio/disenio.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { LandingComponent } from './landing/landing.component';
import { DatosSuscripcionComponent } from './datos-suscripcion/datos-suscripcion.component';

const routes: Routes = [
  {
    path: 'disenio',
    component: DisenioComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'empresa',
    component: EmpresaComponent
  },
  {
    path: 'suscripción',
    component: DatosSuscripcionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalWebRoutingModule { }
