import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

interface Unidad{
  id:number;
  nombreunidad: string;
}


@Component({
  selector: 'app-editar-unidadesdenegocio',
  templateUrl: './editar-unidadesdenegocio.component.html',
  styleUrls: ['./editar-unidadesdenegocio.component.css']
})
export class EditarUnidadesdenegocioComponent {
  unidadForm: FormGroup;
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private adminService: AdminService)
     {
      this.unidadForm = this.fb.group({
        nombreunidad: ['', Validators.required]
      });
     }

  
  regresar(): void {
    this.router.navigate(['/ver-unidad']);
  }
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.adminService.obtenerUnidadPorId(id).subscribe((unidad) => {
        this.unidadForm.patchValue({
          nombreunidad: unidad.nombreunidad
        });
      });
    } else {
      console.error('ID de unidad no proporcionado');
      // Puedes redirigir a una página de error o hacer cualquier otra acción apropiada aquí
    }
  }

  actualizarUnidad(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const datosActualizadosUnidad = this.unidadForm.value;
      this.adminService.actualizarunidad(id, datosActualizadosUnidad).subscribe(() => {
        console.log('Unidad de negocio actualizada correctamente');
        Swal.fire({
          icon: 'success',
          title: 'Unidad de negocio actualizada',
          text: 'La unidad de negocio se ha actualizado correctamente.',
          showConfirmButton: false,
          timer: 1500 // Cierra automáticamente después de 1.5 segundos
        });
        // Puedes mostrar un mensaje de éxito o redirigir a otra página después de actualizar la empresa
      }, (error) => {
        console.error('Error al actualizar unidad', error);
        // Puedes mostrar un mensaje de error al usuario o hacer cualquier otra acción apropiada aquí
      });
    } else {
      console.error('ID de unidad no proporcionada');
      // Puedes redirigir a una página de error o hacer cualquier otra acción apropiada aquí
    }
  }

}
