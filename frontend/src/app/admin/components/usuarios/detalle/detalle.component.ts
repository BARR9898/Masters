import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute,ParamMap,Params, Router } from '@angular/router';
import { User } from 'src/app/admin/interfaces/user';
import { MaestriasService } from 'src/app/admin/services/maestrias.service';
import { UsersServices } from 'src/app/admin/services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private usuariosService:UsersServices, private fb:FormBuilder,private router:Router){
    this.fb = fb
  }

  ngOnInit(): void {
    this.getExpedientData()
  }

  userForm = this.fb.group({
    name: this.fb.control('',[Validators.required,Validators.maxLength(30)]),
    password: this.fb.control('',[Validators.required,Validators.maxLength(30),Validators.minLength(5)]),
    email: this.fb.control('',[Validators.required,Validators.maxLength(60),Validators.email]),
    rol: this.fb.control('',[Validators.required,Validators.maxLength(30)])
  })

  roles = ['Administrador','Superusuario']


  usuario = []
  user_id:any;

  getExpedientData(){
    this.activatedRoute.paramMap.subscribe((params:ParamMap) => {
      this.user_id = params.get('id')
      this.usuariosService.getUser(this.user_id)
      .subscribe((res:any) => {
        this.usuario = res.data
      })
      // Código...
    });
  }

  updateUser(){
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
    let userUpdated = this.userForm.value as User
    this.usuariosService.deleteUser(this.user_id)
    .subscribe((res:any) => {
      if(res.result){
        this.usuariosService.createUser(userUpdated)
        .subscribe((res:any) =>{
          if(res.result){

            Swal.fire({
              icon: 'success',
              title: 'Usario actualizado',
              showConfirmButton: true,
              timer: 2000
            }).then(()=>{
              this.router.navigate(['/admin/usuarios'])
            })

          }
        })
      }
    })

  }




}
