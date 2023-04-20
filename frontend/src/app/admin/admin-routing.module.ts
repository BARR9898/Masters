import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMaestriaComponent } from './components/maestrias/crear-maestria/crear-maestria.component';
import { ListaMaestriasComponent } from './components/maestrias/lista-maestrias/lista-maestrias.component';
import { DetalleComponent } from './components/usuarios/detalle/detalle.component';
import { ListaComponent } from './components/usuarios/lista/lista.component';
import { RegistrarComponent } from './components/usuarios/registrar/registrar.component';
import { AuthGuard } from './guards/auth.guard';
import { EditarComponent } from './components/maestrias/editar/editar.component';
const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path:'maestrias',
    component: ListaMaestriasComponent

  },
  {
    canActivate: [AuthGuard],
    path:'maestrias/detalle/:id',
    component: EditarComponent

  },
  {
    canActivate: [AuthGuard],
    path:'maestrias/creacion',
    component: CrearMaestriaComponent

  },
  {
    canActivate: [AuthGuard],
    path:'usuarios',
    component: ListaComponent
  },
  {
    canActivate: [AuthGuard],
    path:'usuarios/crear',
    component: RegistrarComponent
  },
  {
    canActivate: [AuthGuard],
    path:'usuarios/detalle/:id',
    component: DetalleComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
