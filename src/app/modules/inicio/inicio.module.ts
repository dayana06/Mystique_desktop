import { GraficasDirective } from './../reportes/graficas.directive';
import { MaterialDesignModule } from './../../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { DashboardFullComponent } from './dashboard-full/dashboard-full.component';
import { FormsModule } from '@angular/forms';
import { DashboardEmpleadoComponent, CancelarComponent } from './dashboard-empleado/dashboard-empleado.component';
import { ReportesModule } from '../reportes/reportes.module';
import { ClFrecuentesComponent } from './dashboard-full/cl-frecuentes/cl-frecuentes.component';
import { CitasRecibidasComponent } from './dashboard-full/citas-recibidas/citas-recibidas.component';

import { ReportePromocionesComponent } from '../reportes/estadisticos/reporte-promociones/reporte-promociones.component';
import { ReporteIncidenciaServicioComponent } from '../reportes/estructurados/reporte-incidencia-servicio/reporte-incidencia-servicio.component';
import { ReporteIncidenciaOrdenComponent } from '../reportes/estructurados/reporte-incidencia-orden/reporte-incidencia-orden.component';
import { ReporteClientesComponent } from '../reportes/estructurados/reporte-clientes/reporte-clientes.component';
import { ReporteSolicitudesComponent } from '../reportes/estructurados/reporte-solicitudes/reporte-solicitudes.component';
import { ReporteReclamosComponent } from '../reportes/estructurados/reporte-reclamos/reporte-reclamos.component';
import { ReporteComentariosComponent } from '../reportes/estructurados/reporte-comentarios/reporte-comentarios.component';
import { ReporteServicioComponent } from '../reportes/estructurados/reporte-servicio/reporte-servicio.component';


@NgModule({
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialDesignModule,
    FormsModule,
    ReportesModule,
    /*ReporteServicioComponent,
    ReporteComentariosComponent,
    ReporteReclamosComponent,
    ReporteSolicitudesComponent,
    ReporteClientesComponent,
    ReporteIncidenciaOrdenComponent,
    ReporteIncidenciaServicioComponent,
    ReportePromocionesComponent*/
  ],
  entryComponents:[
    CancelarComponent
  ],
  declarations: [
    DashboardFullComponent,
    DashboardEmpleadoComponent,
    ClFrecuentesComponent,
    CancelarComponent,
    CitasRecibidasComponent,

      
  ]
})
export class InicioModule { }
