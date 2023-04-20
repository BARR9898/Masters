import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { LayoutComponent } from './admin/components/layout/layout.component';
import { AuthGuard } from './admin/guards/auth.guard';
import { RedirectGuard } from './admin/guards/redirect.guard';
import { AuthModule } from './auth/auth/auth.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth/auth.module').then(m => AuthModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    loadChildren: () => import('./admin/admin.module').then(m => AdminModule)
  },
  {
    path: '',
    canActivate: [RedirectGuard],
    component: LayoutComponent,
    loadChildren: () => import('./admin/admin.module').then(m => AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
