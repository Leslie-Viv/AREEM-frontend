import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

export interface Egresos{
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
  selector: 'app-veregresos',
  templateUrl: './veregresos.component.html',
  styleUrls: ['./veregresos.component.css']
})
export class VeregresosComponent {
  listEgresos:any=[];

  constructor(private router: Router,private egresos:AdminService) { }

  ngOnInit(): void {
    this.loadEgresos();
  }

  loadEgresos(){
    return this.egresos.getVerEgresos().subscribe((data:{})=>{
      console.log(data);
      this.listEgresos=data;
    })
  }



  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
 

  displayedColumns: string[] = ['Id','Nombre_empresa', 'Fecha_real','Fecha_sistema','Ano_mes_de_reporte','Cuenta_origen_egreso','Tipo_de_cuenta','Tipo_de_egreso','Descripcion_egreso','Es_gasto','Unidad_de_negocio','Monto_total'];

  agregaregreso(): void {
    this.router.navigate(['/registrar-egreso']);
  }
  editaregreso(): void {
    this.router.navigate(['/editar-egreso']);
  }

  archivarEgreso(id: number): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Deseas archivar el egreso?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, archivar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.egresos.archivarEgreso(id).subscribe(
          () => {
            swalWithBootstrapButtons.fire(
              '¡Archivado!',
              'El egreso ha sido archivado',
              'success'
            );
            this.loadEgresos(); // Puedes realizar acciones adicionales aquí después de archivar el ingreso
          },
          (error) => {
            console.error('Error al archivar el egreso:', error);
            swalWithBootstrapButtons.fire(
              'Error',
              'Error al archivar el egreso',
              'error'
            );
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Egreso no archivado',
          'error'
        );
      }
    });
  }
}
