import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametrosComponent } from './parametros/parametros.component';
import { CategoriasComponent } from './categorias/categorias.component';
import {EmpresaComponent} from './empresa/empresa.component'; 



const routes: Routes = [
  {
    path: 'parametros',
    component: ParametrosComponent
  },
  {
    path: 'categorias',
    component: CategoriasComponent
  },

  {
    path: 'empresaEditar',
    component: EmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablasBasicasRoutingModule { }
