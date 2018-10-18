import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { UsuarioPerfilComponent } from './usuario-perfil/usuario-perfil.component';
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../material-design/material-design.module';


@NgModule({
  imports: [
    CommonModule,
    PerfilRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],

  entryComponents:[     
    
    UsuarioPerfilComponent
  ],
  declarations: [UsuarioPerfilComponent]
})
export class PerfilModule { }
