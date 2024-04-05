import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

interface Origen{
  id: number;
  origenegreso: string;
  tipodecuenta:string;
}

@Component({
  selector: 'app-editar-origendeegreso',
  templateUrl: './editar-origendeegreso.component.html',
  styleUrls: ['./editar-origendeegreso.component.css']
})
export class EditarOrigendeegresoComponent {
  origenForm: FormGroup;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private adminService: AdminService
    ) {
      this.origenForm = this.fb.group({
        origenegreso: ['', Validators.required],
        tipodecuenta: ['', Validators.required]

      });
     }

  
  regresar(): void {
    this.router.navigate(['/ver-origen']);
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.adminService.obtenerOrigenPorId(id).subscribe((origen) => {
        this.origenForm.patchValue({
          origenegreso: origen.origenegreso,
          tipodecuenta: origen.tipodecuenta,
        });
      });
    } else {
      console.error('ID de origen no proporcionado');
      // Puedes redirigir a una página de error o hacer cualquier otra acción apropiada aquí
    }
  }

  actualizarOrigen(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const datosActualizadosTipo = this.origenForm.value;
      this.adminService.actualizarorigen(id, datosActualizadosTipo).subscribe(() => {
        console.log('Origen de egreso actualizado correctamente');
        Swal.fire({
          icon: 'success',
          title: 'Origen de egreso actualizado',
          text: 'Origen de egreso se ha actualizado correctamente.',
          showConfirmButton: false,
          timer: 1500 // Cierra automáticamente después de 1.5 segundos
        });
        // Puedes mostrar un mensaje de éxito o redirigir a otra página después de actualizar la empresa
      }, (error) => {
        console.error('Error al actualizar origen', error);
        // Puedes mostrar un mensaje de error al usuario o hacer cualquier otra acción apropiada aquí
      });
    } else {
      console.error('ID de origen no proporcionada');
      // Puedes redirigir a una página de error o hacer cualquier otra acción apropiada aquí
    }
  }



}
