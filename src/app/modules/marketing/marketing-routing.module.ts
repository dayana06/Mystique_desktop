import { ConfigPromocionComponent } from './promocion/config-promocion/config-promocion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaServiciosComponent } from './servicios/lista-servicios/lista-servicios.component';
import { NuevoServicioComponent } from './servicios/nuevo-servicio/nuevo-servicio.component';
import { ListadoPromocionComponent } from './promocion/listado-promocion/listado-promocion.component';
import { DifundirPromocionComponent } from './promocion/difundir-promocion/difundir-promocion.component';

const routes: Routes = [
  {
    path: "servicios",
    component: ListaServiciosComponent
  },
  {
    path: "nuevoServicio",
    component: NuevoServicioComponent
  },
  {
    path: 'promociones',
    component:ListadoPromocionComponent,
  },
  {
    path:'difundir',
    component:DifundirPromocionComponent, 
  },
  
  {
    path:'config',
    component: ConfigPromocionComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
