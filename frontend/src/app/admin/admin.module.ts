import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ListaMaestriasComponent } from './components/maestrias/lista-maestrias/lista-maestrias.component';
import { CrearMaestriaComponent } from './components/maestrias/crear-maestria/crear-maestria.component';
import { SharedModuleModule } from '../core/shared-module/shared-module.module';
import { RegistrarComponent } from './components/usuarios/registrar/registrar.component';
import { ListaComponent } from './components/usuarios/lista/lista.component';
import { DetalleComponent } from './components/usuarios/detalle/detalle.component';
import { EditarComponent } from './components/maestrias/editar/editar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ListaMaestriasComponent,
    CrearMaestriaComponent,
    RegistrarComponent,
    ListaComponent,
    DetalleComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModuleModule
  ]
})
export class AdminModule { }
