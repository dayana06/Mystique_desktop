import { HistoricoServicioComponent } from './base-datos/historicos/historico-servicio/historico-servicio.component';
import { HistoricoReclamoComponent } from './base-datos/historicos/historico-reclamo/historico-reclamo.component';
import { HistoricoPromocionComponent } from './base-datos/historicos/historico-promocion/historico-promocion.component';
import { AuditoriaComponent } from './base-datos/auditoria/auditoria.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { BaseDatosComponent } from './base-datos/base-datos.component';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { SistemaComponent } from './sistema/sistema.component';
import { SeguridadFuncionalComponent, NuevoUsuarioComponent } from './seguridad-funcional/seguridad-funcional.component';
import { AsignarFuncionesComponent } from './seguridad-funcional/asignar-funciones/asignar-funciones.component';
import { RolesComponent } from './seguridad-funcional/roles/roles.component';
import { NuevoRolComponent } from './seguridad-funcional/roles/nuevo-rol/nuevo-rol.component';
import { ListConsejosComponent } from './list-consejos/list-consejos.component';
import { PasosComponent } from './pasos/pasos.component';
import { DepuracionesComponent } from './base-datos/depuraciones/depuraciones.component';
import { HistoricosComponent } from './base-datos/historicos/historicos.component';
import { RespaldoComponent } from './base-datos/respaldo/respaldo.component';
import { ImportarComponent } from './base-datos/importar/importar.component';


@NgModule({
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],
  entryComponents: [
    NuevoRolComponent, NuevoUsuarioComponent
  ],
  declarations: [
    BaseDatosComponent,
    SistemaComponent,
    SeguridadFuncionalComponent,
    AsignarFuncionesComponent,
    RolesComponent,
    NuevoRolComponent,
    NuevoUsuarioComponent,
    ListConsejosComponent,
    //CrearConsejoComponent,
    AuditoriaComponent,
    DepuracionesComponent,
    HistoricosComponent,
    RespaldoComponent,
    HistoricoPromocionComponent,
    HistoricoReclamoComponent,
    HistoricoServicioComponent,
    ImportarComponent,
    PasosComponent
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-Ve' } ]
})
export class AdministracionModule { }
