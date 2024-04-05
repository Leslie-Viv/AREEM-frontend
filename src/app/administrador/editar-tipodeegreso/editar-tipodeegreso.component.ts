import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

interface Tipo{
  id: number;
  N1:string;
  N2:string;
  N3:string;
  N4:string;
  N5:string;
  descripcionegreso:string;
  gasto:string;
}

@Component({
  selector: 'app-editar-tipodeegreso',
  templateUrl: './editar-tipodeegreso.component.html',
  styleUrls: ['./editar-tipodeegreso.component.css']
})
export class EditarTipodeegresoComponent {
  tipoForm: FormGroup;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private adminService: AdminService) { 
      this.tipoForm = this.fb.group({
        N1: ['', Validators.required],
        N2: ['', Validators.required],
        N3: ['', Validators.required],
        N4: ['', Validators.required],
        N5: ['', Validators.required],
        descripcionegreso: ['', Validators.required],
        gasto: ['', Validators.required]

      });
    }

  
  regresar(): void {
    this.router.navigate(['/ver-tipodeegreso']);
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.adminService.obtenerTipoPorId(id).subscribe((tipo) => {
        this.tipoForm.patchValue({
          N1: tipo.N1,
          N2: tipo.N2,
          N3: tipo.N3,
          N4: tipo.N4,
          N5: tipo.N5,
          descripcionegreso: tipo.descripcionegreso,
          gasto: tipo.gasto,
        });
      });
    } else {
      console.error('ID de tipo no proporcionado');
      // Puedes redirigir a una página de error o hacer cualquier otra acción apropiada aquí
    }
  }

  actualizarTipo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const datosActualizadosTipo = this.tipoForm.value;
      this.adminService.actualizartipo(id, datosActualizadosTipo).subscribe(() => {
        console.log('Tipo de egreso actualizado correctamente');
        Swal.fire({
          icon: 'success',
          title: 'Tipo de egreso actualizado',
          text: 'Tipo de egreso se ha actualizado correctamente.',
          showConfirmButton: false,
          timer: 1500 // Cierra automáticamente después de 1.5 segundos
        });
        // Puedes mostrar un mensaje de éxito o redirigir a otra página después de actualizar la empresa
      }, (error) => {
        console.error('Error al actualizar tipo', error);
        // Puedes mostrar un mensaje de error al usuario o hacer cualquier otra acción apropiada aquí
      });
    } else {
      console.error('ID de tipo no proporcionada');
      // Puedes redirigir a una página de error o hacer cualquier otra acción apropiada aquí
    }
  }

}
