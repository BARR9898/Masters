import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/admin/services/auth.service';
import { UsersServices } from 'src/app/admin/services/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  constructor(private userServices:UsersServices,private router:Router){

  }


  users:any

  ngOnInit(): void {
    this.getUsers();
  }

  deleteUser(id:string){
    Swal.fire({
      title: '¿Desea eliminar el usuario?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.userServices.deleteUser(id)
        .subscribe((res:any) => {
          if (res.result) {
            this.showDialog('Usuario eliminado','success')
            setTimeout(() => {
              this.getUsers()
            },1500)
          }
        })
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardos', '', 'info')
      }
    })

  }

  editUser(id:string){
    this.router.navigate(['/admin/usuarios/detalle',id])
  }

  createUser(){
    this.router.navigate(['/admin/usuarios/crear'])
  }



  showDialog(title:any,icon:any){
    Swal.fire({
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 2500
    })
  }



  getUsers(){
    this.userServices.getUsers()
    .subscribe((res:any) =>{
      this.users = res.data;
    })
  }

}
