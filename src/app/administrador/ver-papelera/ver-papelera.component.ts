import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

export interface PapeleraIngreso{
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
  selector: 'app-ver-papelera',
  templateUrl: './ver-papelera.component.html',
  styleUrls: ['./ver-papelera.component.css']
})
export class VerPapeleraComponent {
  listPapeleraI:any=[];

  constructor(private router: Router, private papelera:AdminService) { }

  ngOnInit(): void {
    this.loadPapelera();
  }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }

  loadPapelera(){
    return this.papelera.getVerPapeleraI().subscribe((data:{})=>{
      console.log(data);
      this.listPapeleraI=data;
    })
  }

   
  recuperarIngreso(id: number): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Deseas recuperar el ingreso?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, recuperar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.papelera.recuperarIngreso(id).subscribe(
          () => {
            swalWithBootstrapButtons.fire(
              '¡Recuperado!',
              'El ingreso ha sido recuperado',
              'success'
            );
            this.loadPapelera(); // Puedes realizar acciones adicionales aquí después de archivar el ingreso
          },
          (error) => {
            console.error('Error al recuperar el ingreso:', error);
            swalWithBootstrapButtons.fire(
              'Error',
              'Error al recuperar el ingreso',
              'error'
            );
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Ingreso no recuperado',
          'error'
        );
      }
    });
  }


}
