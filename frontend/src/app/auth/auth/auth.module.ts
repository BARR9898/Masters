import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModuleModule } from 'src/app/core/shared-module/shared-module.module';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModuleModule
  ]
})
export class AuthModule { }
