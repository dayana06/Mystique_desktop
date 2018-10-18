import { ReporteSolicitudService } from './provider/reporte-solicitud/reporte-solicitud.service';
import { ReporteComentarioService } from './provider/reporte-comentario/reporte-comentario.service';
import { CitaService } from './provider/cita/cita.service';
import { GestionConsejoService } from './provider/gestion-consejo/gestion-consejo.service';

import { RedSocialService } from './provider/red-social/red-social.service';
import { OrdenServicioService } from './provider/orden-servicio/orden-servicio.service';
import { GestionDetalleServicioService } from './provider/gestion-detalle-servicio/gestion-detalle-servicio.service';
import { VistaOrdenCitaService } from './provider/vista-orden-cita/vista-orden-cita.service';
import { RazonIncidenciaService } from './provider/razon-incidencia/razon-incidencia.service';
import { VistaAgendasService } from './provider/vista-agendas/vista-agendas.service';
import { PresupuestoService } from './provider/presupuesto/presupuesto.service';
import { VistaReclamoService } from './provider/vista-reclamo/vista-reclamo.service';
import { VComentariosService } from './provider/v-cometarios/v-comentarios.service';
import { TipoRepuestaComentarioService } from './provider/tipo-repuesta-comentario/tipo-repuesta-comentario.service';
import { TiporeclamoService } from './provider/tipo-reclamo/tiporeclamo.service';
import { RespuestaComentarioService } from './provider/respuesta-comentario/respuesta-comentario.service';
import { ComentarioService } from './provider/comentario/comentario.service';
import { TiposServiciosService } from './provider/tipos-servicios/tipos-servicios.service';
import { VistaServicioCategoriaService } from './provider/vista-servicio-categoria/vista-servicio-categoria.service';
import { VistaEmpleadosCategoriaService } from './provider/vista-empleados-categoria/vista-empleados-categoria.service';
import { SolicitudService } from './provider/solicitud/solicitud.service';
import { TipoRepuestaReclamoService } from './provider/tipo-repuesta-reclamo/tipo-repuesta-reclamo.service';
import { DescripcionNegocioService } from './provider/descripcion-negocio/descripcion-negocio.service';
import { ContactoNegocioService } from './provider/contacto-negocio/contacto-negocio.service';

import { VistaSolicitudService } from './provider/vista-solicitud/vista-solicitud.service';
import { ServicioSolicitadoService } from './provider/servicio-solicitado/servicio-solicitado.service';
import { ServiciosService } from './provider/servicios/servicios.service';
import { PerfilModule } from './modules/perfil/perfil.module';
import { PortalWebModule } from './modules/portal-web/portal-web.module';
import { GraficosDirective } from './test/graficos.directive';
import { AgendaModule } from './modules/agenda/agenda.module';
import { NavListComponent } from './home/nav-list/nav-list.component';
import { SharedModule } from './shared/shared.module';
import { MaterialDesignModule } from './material-design/material-design.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { ToolbarComponent } from './home/toolbar/toolbar.component';
import { TestComponent } from './test/test.component';
import { AtencionClienteModule } from './modules/atencion-cliente/atencion-cliente.module';
import { FormsModule } from '@angular/forms';
import { InicioModule } from './modules/inicio/inicio.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { TablasBasicasModule } from './modules/tablas-basicas/tablas-basicas.module';
import { ReportesModule } from './modules/reportes/reportes.module';
import { AdministracionModule } from './modules/administracion/administracion.module';
// Providers
import { ConsejosService } from './provider/consejos/consejos.service';
import { MarketingModule } from './modules/marketing/marketing.module';
import { NotificacionesModule } from './modules/notificaciones/notificaciones.module';
import { PerfilUsuarioModule } from './modules/perfil-usuario/perfil-usuario.module';
import { PromocionesService } from './provider/promocion/promociones.service';
import { CategoriasServicioService } from './provider/categorias-servicio/categorias-servicio.service';
import { ClientesService } from './provider/clientes/clientes.service';
import { UsuariosService } from './provider/usuarios/usuarios.service';
import { EmpleadosService } from './provider/empleados/empleados.service';
import { AuthService } from './provider/auth/auth.service';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './provider/user/user.service';
import { ValoresParametrosService } from './provider/valores-parametros/valores-parametros.service';
import { ParametrosService } from './provider/parametros/parametros.service';
import { TiposParametrosService } from './provider/tipos-parametros/tipos-parametros.service';
import { RolesService } from './provider/roles/roles.service';
import { PerfilService } from './provider/perfil/perfil.service';
import { MensajeExitoComponent } from './mensajes/mensaje-exito/mensaje-exito.component';
import { ParametroService } from './provider/parametro/parametro.service';
import { TipoParametroService } from './provider/tipo-parametro/tipo-parametro.service';
import { ValorParametroService } from './provider/valor-parametro/valor-parametro.service';
import { TipoRespSolicitudService } from './provider/tipo-resp-solicitud/tipo-resp-solicitud.service';
import { RespuestaSolicitudService } from './provider/respuesta-solicitud/respuesta-solicitud.service';
import { TipoIncidenciaService } from './provider/tipo-incidecia/tipo-incidencia.service';
import { ObjetivoService } from './provider/objetivo/objetivo.service';
import { ReclamoService } from './provider/reclamo/reclamo.service';
import { RepuestaReclamoService } from './provider/repuesta-reclamo/repuesta-reclamo.service';
import { EspecialidadService } from './provider/especialidad/especialidad.service';
import { CategoriaParametroService } from './provider/categoria-parametro/categoria-parametro.service';
import { TipoRespPresupuestoService } from './provider/tipo-resp-presupuesto/tipo-resp-presupuesto.service';
import { TipoComentarioService } from './provider/tipo-comentario/tipo-comentario.service';
import { FuncionesService } from './provider/funciones/funciones.service';
import { RolFuncionService } from './provider/rol-funcion/rol-funcion.service';
import { GestionServicioService } from './provider/gestion-servicio/gestion-servicio.service';
import { MensajeConfirmarComponent } from './mensajes/mensaje-confirmar/mensaje-confirmar.component';
import { GestionPromocionService } from './provider/gestion-promocion/gestion-promocion.service';
import { InsumosService } from './provider/insumos/insumos.service';
import { TituloSeccionService } from './provider/titulo-seccion/titulo-seccion.service';
import { AuditoriaService } from './provider/auditoria/auditoria.service';
import { IncidenciaOrdenService } from './provider/incidencia-orden/incidencia-orden.service';
import { AgregarOrdenService } from './provider/agregar-orden/agregar-orden.service';
import { ReporteServicioService } from './provider/reporte-servicio/reporte-servicio.service';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { ReporteClienteService } from './provider/reporte-cliente/reporte-cliente.service';
const config: SocketIoConfig = {
  url : 'http://localhost:3001', options: {}
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavListComponent,
    ToolbarComponent,
    TestComponent,
    GraficosDirective,
    MensajeExitoComponent,
    MensajeConfirmarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialDesignModule,
    FormsModule,
    InicioModule,
    TablasBasicasModule,
    ClientesModule,
    MaterialDesignModule,
    AgendaModule,
    AtencionClienteModule,
    MarketingModule,
    AdministracionModule,
    ReportesModule,
    NotificacionesModule,
    PerfilUsuarioModule,
    PortalWebModule,
    PerfilModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [
    ConsejosService,
    ClientesService,
    UsuariosService,
    EmpleadosService,
    AuthService,
    UserService,
    PromocionesService,
    CategoriasServicioService,
    ServiciosService,
    ValoresParametrosService,
    ParametrosService,
    TiposParametrosService,
    GestionPromocionService,  
    RolesService,
    PerfilService,
    TipoParametroService,
    ParametroService,
    ValorParametroService,
    ParametroService,
    TipoParametroService,
    ValorParametroService,
    VistaSolicitudService,
    TipoRespSolicitudService,
    RespuestaSolicitudService,
    TipoIncidenciaService,
    ContactoNegocioService,
    DescripcionNegocioService,
    ObjetivoService,
    ReclamoService,
    RepuestaReclamoService,
    TipoRepuestaReclamoService,
    EspecialidadService,
    SolicitudService,
    CategoriaParametroService,
    VistaEmpleadosCategoriaService,
    TipoRespPresupuestoService,
    VistaServicioCategoriaService,
    TiposServiciosService,
    ComentarioService,
    RespuestaComentarioService,
  TipoComentarioService,
    TiporeclamoService,
    TipoRepuestaComentarioService,
    VComentariosService,
    VistaReclamoService,
    FuncionesService,
    RolFuncionService, 
    PresupuestoService,
    VistaAgendasService,
    RazonIncidenciaService,
    VistaOrdenCitaService,
    GestionServicioService,
    GestionDetalleServicioService,
    OrdenServicioService,
    RedSocialService,
    GestionConsejoService,
    InsumosService,
    TituloSeccionService,
    AuditoriaService,
    IncidenciaOrdenService,
    CitaService,
    ReporteComentarioService,
    ReporteSolicitudService,
    AgregarOrdenService,
    ReporteServicioService,
    ReporteClienteService
  ],
    
  entryComponents: [
    MensajeExitoComponent,
    MensajeConfirmarComponent
  ],
  


  bootstrap: [AppComponent]
})
export class AppModule { }
