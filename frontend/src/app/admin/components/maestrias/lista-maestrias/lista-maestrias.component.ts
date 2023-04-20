import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaestriasService } from 'src/app/admin/services/maestrias.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista-maestrias',
  templateUrl: './lista-maestrias.component.html',
  styleUrls: ['./lista-maestrias.component.css']
})
export class ListaMaestriasComponent implements OnInit{

  maestrias: any[] = [];

  constructor(
    private maestriasService:MaestriasService,
    private routerService:Router
  ){

  }
  ngOnInit(): void {

    this.getMasters()

  }

  getMasters(){

    this.maestriasService.getMasters()
    .subscribe((res:any) => {
      this.maestrias = res.data
      console.log(this.maestrias);

    })
  }

  deleteMaster(id:string){

    Swal.fire({
      title: '¿Desea eliminar la maestria?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.maestriasService.deleteMaster(id)
        .subscribe((res:any) => {
          if(res.result){
            Swal.fire('Maestria eliminada!', '', 'success')
            .then(() => {
              this.getMasters()
            })
            return
          }
          Swal.fire('Algo salio mal', '', 'error')
          console.log(res);

        })
      } else if (result.isDenied) {
      }
    })

  }

  editMaster(id:string){
    this.routerService.navigate(['/admin/maestrias/detalle',id])
  }



}
