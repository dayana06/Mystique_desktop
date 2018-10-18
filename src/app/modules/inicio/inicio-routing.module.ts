
import { ClFrecuentesComponent } from './dashboard-full/cl-frecuentes/cl-frecuentes.component';
import { DashboardFullComponent } from './dashboard-full/dashboard-full.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardEmpleadoComponent } from './dashboard-empleado/dashboard-empleado.component';
import { CitasRecibidasComponent } from './dashboard-full/citas-recibidas/citas-recibidas.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardFullComponent,
    children:[
      {
        path: 'citasRecibidas',
        component: CitasRecibidasComponent
      },    
      {
        path: 'Clientesfrecuentes',
        component: ClFrecuentesComponent
      },       

    ]
  },
  {
    path: 'dashboardEmpleado',
    component: DashboardEmpleadoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
