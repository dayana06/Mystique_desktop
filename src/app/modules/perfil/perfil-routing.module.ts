import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';

const routes: Routes = [
  {
    path: 'usuario-perfil',
   component: UsuarioPerfilComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
