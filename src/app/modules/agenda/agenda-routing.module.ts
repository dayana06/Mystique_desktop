import { ReclamosOrdenComponent } from './reclamos-orden/reclamos-orden.component';
import { RegistrarDetalleComponent } from './registrar-detalle/registrar-detalle.component';
import { CitasComponent } from './citas/citas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

const routes: Routes = [
  {
    path: 'citas',
    component: CitasComponent
  },
  {
    path: 'ordenes',
    component: OrdenesComponent
  },
  {
    path: 'reclamosOrdenes',
    component: ReclamosOrdenComponent
  },
  {
    path: 'solicitudes',
    component: SolicitudComponent
  },
  {
    path: 'citas/registrarDetalle/:id',
    component: RegistrarDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
