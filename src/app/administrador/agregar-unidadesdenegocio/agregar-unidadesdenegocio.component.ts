import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-unidadesdenegocio',
  templateUrl: './agregar-unidadesdenegocio.component.html',
  styleUrls: ['./agregar-unidadesdenegocio.component.css']
})
export class AgregarUnidadesdenegocioComponent {
  unidadForm: FormGroup;

  constructor(private router: Router,private fb: FormBuilder,private unidadS: AdminService) { 
    this.unidadForm = this.fb.group({
      nombreunidad: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
    });
  }

  
  regresar(): void {
    this.router.navigate(['/ver-unidad']);
  }


  
  agregarunidad() {
    const datosNuevaUnidad = this.unidadForm.value;

    this.unidadS.agregarUnidad(datosNuevaUnidad).subscribe(
      response => {
        console.log('Unidad agregada correctamente', response);
        // Recargar la página después de agregar el agremiado
        Swal.fire({
          icon: 'success',
          text: 'Unidad agregado correctamente',
          showConfirmButton: true
        });
        this.unidadForm.reset();
      },
      error => {
        console.error('Error al agregar unidad', error);
        // Manejar el error si es necesario
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Al agregar unidad',
          showConfirmButton: true
        });
      }
    );
  }

  

}
