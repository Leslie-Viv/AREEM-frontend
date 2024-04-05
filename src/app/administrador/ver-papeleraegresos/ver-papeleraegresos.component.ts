import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

export interface PapeleraEgreso{
  id: number;
  nombrecompleto: string;
  nombreempresa: string;
  anomesdereporte: string;
  origenegreso: string;
  tipodecuenta: string;
  N1: string;
  N2: string;
  N3: string;
  N4: string;
  N5: string;
  descripcionegreso:string;
  gasto:string;
  nombreunidad:string;
  created_at:string;
  fechareal:string;
  montototal:string;
  user_id:string;

}

@Component({
  selector: 'app-ver-papeleraegresos',
  templateUrl: './ver-papeleraegresos.component.html',
  styleUrls: ['./ver-papeleraegresos.component.css']
})
export class VerPapeleraegresosComponent {
  listPapeleraE:any=[];

  
  constructor(private router: Router, private papelera:AdminService) { }

  ngOnInit(): void {
    this.loadPapeleraE();
  }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }

  loadPapeleraE(){
    return this.papelera.getVerPapeleraE().subscribe((data:{})=>{
      console.log(data);
      this.listPapeleraE=data;
    })
  }

  recuperarEgreso(id: number): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Deseas recuperar el egreso?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, recuperar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.papelera.recuperarEgreso(id).subscribe(
          () => {
            swalWithBootstrapButtons.fire(
              '¡Recuperado!',
              'El egreso ha sido recuperado',
              'success'
            );
            this.loadPapeleraE(); // Puedes realizar acciones adicionales aquí después de archivar el ingreso
          },
          (error) => {
            console.error('Error al recuperar el egreso:', error);
            swalWithBootstrapButtons.fire(
              'Error',
              'Error al recuperar el egreso',
              'error'
            );
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Egreso no recuperado',
          'error'
        );
      }
    });
  }



}
