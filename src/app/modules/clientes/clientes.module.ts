import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent, ClientePrincipalComponent } from "./clientes.component";
import { FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../../material-design/material-design.module';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';


@NgModule({
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialDesignModule,
    FormsModule
  ],
  entryComponents:[
    ClientePrincipalComponent,
    ListadoClientesComponent
  ],
  declarations: [ClientesComponent, ClientePrincipalComponent, ListadoClientesComponent],
  providers: [ { provide: LOCALE_ID, useValue: 'es-Ve' } ]
})
export class ClientesModule { }
