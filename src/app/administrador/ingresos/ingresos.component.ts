import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

export interface Ingreso{
  id:number;
  nombrecompleto:string;
  nombreunidad:string;
  anomesdereporte:string;
  producto:string;
  fechareal:string;
  created_at:string;
  montototal:string;
  user_id:string;
}

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {
  listIngresos:any=[];

  constructor(private router: Router,private ingresos:AdminService) { }
  ngOnInit(): void {
    this.loadIngresos();
  }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
 
  loadIngresos(){
    return this.ingresos.getVerIngresos().subscribe((data:{})=>{
      console.log(data);
      this.listIngresos=data;
    })
  }


  Ingreso(): void {
    this.router.navigate(['/nuevo-ingreso']);
  }
  editar(): void {
    this.router.navigate(['/editar-ingreso']);
  }

  
  archivarIngreso(id: number): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Deseas archivar el ingreso?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, archivar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.ingresos.archivarIngreso(id).subscribe(
          () => {
            swalWithBootstrapButtons.fire(
              '¡Archivado!',
              'El ingreso ha sido archivado',
              'success'
            );
            this.loadIngresos(); // Puedes realizar acciones adicionales aquí después de archivar el ingreso
          },
          (error) => {
            console.error('Error al archivar el ingreso:', error);
            swalWithBootstrapButtons.fire(
              'Error',
              'Error al archivar el ingreso',
              'error'
            );
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Ingreso no archivado',
          'error'
        );
      }
    });
  }


}
