import { MaterialDesignModule } from './../../material-design/material-design.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesRoutingModule } from './reportes-routing.module';
import { GraficasDirective } from './graficas.directive';
import { ReportesComponent } from './reportes.component';
import { EstadisticosComponent } from './estadisticos/estadisticos.component';
import { PruebaComponent } from './estadisticos/prueba/prueba.component';
import { ServiciosAtendidosComponent } from './estadisticos/servicios-atendidos/servicios-atendidos.component';
import { ClientesFrecuentesComponent } from './estadisticos/clientes-frecuentes/clientes-frecuentes.component';
import { SuscripcionComponent } from './estadisticos/suscripcion/suscripcion.component';
import { EstructuradosComponent } from './estructurados/estructurados.component';
import { ReclamosComponent } from './estadisticos/reclamos/reclamos.component';
import { ReporteServicioComponent } from './estructurados/reporte-servicio/reporte-servicio.component';
import { ReporteComentariosComponent } from './estructurados/reporte-comentarios/reporte-comentarios.component';
import { ReporteReclamosComponent } from './estructurados/reporte-reclamos/reporte-reclamos.component';
import { ReporteSolicitudesComponent } from './estructurados/reporte-solicitudes/reporte-solicitudes.component';
import { ReporteClientesComponent } from './estructurados/reporte-clientes/reporte-clientes.component';
import { ReporteIncidenciaOrdenComponent } from './estructurados/reporte-incidencia-orden/reporte-incidencia-orden.component';
import { ReporteIncidenciaServicioComponent } from './estructurados/reporte-incidencia-servicio/reporte-incidencia-servicio.component';
import { ReportePromocionesComponent } from './estadisticos/reporte-promociones/reporte-promociones.component';

@NgModule({
  imports: [
    CommonModule,
    ReportesRoutingModule,
    FormsModule,
    MaterialDesignModule
  ],
  declarations: [
    PruebaComponent,
    GraficasDirective,
    ServiciosAtendidosComponent,
    ClientesFrecuentesComponent,
    ReportesComponent,
    EstadisticosComponent,
    SuscripcionComponent,
    EstructuradosComponent,
    ReclamosComponent,
    ReporteServicioComponent,
    ReporteComentariosComponent,
    ReporteReclamosComponent,
    ReporteSolicitudesComponent,
    ReporteClientesComponent,
    ReporteIncidenciaOrdenComponent,
    ReporteIncidenciaServicioComponent,
    ReportePromocionesComponent
  ],
  exports: [
    PruebaComponent,
    GraficasDirective,
    ServiciosAtendidosComponent,
    ClientesFrecuentesComponent,
    ReportesComponent,
    EstadisticosComponent,
    SuscripcionComponent,
    EstructuradosComponent,
    ReclamosComponent,
    ReporteServicioComponent,
    ReporteComentariosComponent,
    ReporteReclamosComponent,
    ReporteSolicitudesComponent,
    ReporteClientesComponent,
    ReporteIncidenciaOrdenComponent,
    ReporteIncidenciaServicioComponent,
    ReportePromocionesComponent
  ]
})
export class ReportesModule { }
