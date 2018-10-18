import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { PortalWebRoutingModule } from './portal-web-routing.module';
import { DisenioComponent } from './disenio/disenio.component';
import { ImagenesComponent } from './disenio/imagenes/imagenes.component';
import { ColoresComponent } from './disenio/colores/colores.component';
import { TipografiaComponent } from './disenio/tipografia/tipografia.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { LandingComponent } from './landing/landing.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PrincipalComponent } from './landing/principal/principal.component';
import { ServiciosComponent } from './landing/servicios/servicios.component';
import { PromocionesComponent } from './landing/promociones/promociones.component';
import { ReseniasComponent } from './landing/resenias/resenias.component';
import { EstilistasComponent } from './landing/estilistas/estilistas.component';
import { TwitterComponent } from './landing/twitter/twitter.component';
import { DatosSuscripcionComponent } from './datos-suscripcion/datos-suscripcion.component';

@NgModule({
  imports: [
    CommonModule,
    PortalWebRoutingModule,
    FormsModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DisenioComponent, EmpresaComponent,
    DisenioComponent,
    ImagenesComponent,
    ColoresComponent,
    TipografiaComponent,
    EmpresaComponent,
    LandingComponent,
    GaleriaComponent
  ],
  declarations: [DisenioComponent, 
    ImagenesComponent, ColoresComponent,
     TipografiaComponent, EmpresaComponent, 
     LandingComponent, GaleriaComponent, 
     PrincipalComponent, ServiciosComponent,
      PromocionesComponent, ReseniasComponent, 
      EstilistasComponent, TwitterComponent,
    DatosSuscripcionComponent]
})
export class PortalWebModule { }
