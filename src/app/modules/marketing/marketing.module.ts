import { DatoComponent } from './servicios/nuevo-servicio/dato/dato.component';
import { ListadoPromocionComponent } from './promocion/listado-promocion/listado-promocion.component';
import { MaterialDesignModule } from './../../material-design/material-design.module';
import { FormsModule } from '@angular/forms';
import { NuevoServicioComponent } from './servicios/nuevo-servicio/nuevo-servicio.component';
import { ListaServiciosComponent} from './servicios/lista-servicios/lista-servicios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingRoutingModule } from './marketing-routing.module';
import { CrearServiciosComponent } from './servicios/nuevo-servicio/crear-servicios/crear-servicios.component';
import { ParametroComponent } from './servicios/nuevo-servicio/parametro/parametro.component';
import { DifundirPromocionComponent } from './promocion/difundir-promocion/difundir-promocion.component';
import { ConfigPromocionComponent } from './promocion/config-promocion/config-promocion.component';
import { PrimerPasoComponent } from './promocion/config-promocion/primer-paso/primer-paso.component';
import { SegundoPasoComponent } from './promocion/config-promocion/segundo-paso/segundo-paso.component';
import { TercerPasoComponent } from './promocion/config-promocion/tercer-paso/tercer-paso.component';
import { CuartoPasoComponent } from './promocion/config-promocion/cuarto-paso/cuarto-paso.component';


@NgModule({
  imports: [
    CommonModule,
    MarketingRoutingModule,
    FormsModule,
    MaterialDesignModule
  ],
  declarations: [
    ListaServiciosComponent,
    NuevoServicioComponent,
    CrearServiciosComponent,
    ParametroComponent,
    DifundirPromocionComponent,
    ListadoPromocionComponent,
    DatoComponent,
    ConfigPromocionComponent,
    PrimerPasoComponent,
    SegundoPasoComponent,
    TercerPasoComponent,
    CuartoPasoComponent
  ]
})
export class MarketingModule { }
