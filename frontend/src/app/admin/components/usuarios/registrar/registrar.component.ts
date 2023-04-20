import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/admin/interfaces/user';
import { UsersServices } from 'src/app/admin/services/users.service';
import { AuthService } from 'src/app/admin/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})



export class RegistrarComponent {

  constructor(private userService:UsersServices,private fb:FormBuilder,private routerService:Router){
    this.fb = fb
  }

  userForm = this.fb.group({
    name: this.fb.control('',[Validators.required,Validators.maxLength(30)]),
    password: this.fb.control('',[Validators.required,Validators.maxLength(30),Validators.minLength(5)]),
    email: this.fb.control('',[Validators.required,Validators.maxLength(60),Validators.email]),
    rol: this.fb.control('',[Validators.required,Validators.maxLength(30)])
  })

  roles = ['Administrador','Superusuario']

  registerUser(){
    if(this.userForm.controls.name.value == '' || this.userForm.controls.password.value == ''
    || this.userForm.controls.email.value == '' || this.userForm.controls.rol.value == ''){

      Swal.fire({
        icon: 'warning',
        title: 'Los campos del formulario estan vacios o tiene errores',
        showConfirmButton: true,
        timer: 2500
      })

      return

    }
    let user:User =  this.userForm.value as User
    this.userService.createUser(user)
    .subscribe((res:any) => {
      if(res.result){
        Swal.fire({
          icon: 'success',
          title: 'Usuario registrado con éxito',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          this.routerService.navigate(['/admin/usuarios'])
        })
      }

    })


  }


}
