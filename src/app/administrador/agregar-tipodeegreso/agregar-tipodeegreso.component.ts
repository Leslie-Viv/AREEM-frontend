import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-tipodeegreso',
  templateUrl: './agregar-tipodeegreso.component.html',
  styleUrls: ['./agregar-tipodeegreso.component.css']
})
export class AgregarTipodeegresoComponent {
  tipoForm: FormGroup;
  
  constructor(private router: Router,private fb: FormBuilder,private tipoS: AdminService) { 
    this.tipoForm = this.fb.group({
      N1: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      N2: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      N3: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      N4: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      N5: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      descripcionegreso: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      gasto: ['', [Validators.required]]
    });
  }

  
  regresar(): void {
    this.router.navigate(['/ver-tipodeegreso']);
  }


  agregartipo() {
    const datosNuevoTipo = this.tipoForm.value;

    this.tipoS.agregarTipo(datosNuevoTipo).subscribe(
      response => {
        console.log('Tipo de egreso agregado correctamente', response);
        // Recargar la página después de agregar el agremiado
        Swal.fire({
          icon: 'success',
          text: 'Tipo de egreso agregado correctamente',
          showConfirmButton: true
        });
        this.tipoForm.reset();
      },
      error => {
        console.error('Error al agregar tipo de egreso', error);
        // Manejar el error si es necesario
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Al agregar tipo de egreso',
          showConfirmButton: true
        });
      }
    );
  }
}
