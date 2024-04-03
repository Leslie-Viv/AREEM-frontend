import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-origendeegreso',
  templateUrl: './agregar-origendeegreso.component.html',
  styleUrls: ['./agregar-origendeegreso.component.css']
})
export class AgregarOrigendeegresoComponent {
  origenForm: FormGroup;
  
  constructor(private router: Router,private fb: FormBuilder,private origenS: AdminService) { 
    this.origenForm = this.fb.group({
      origenegreso: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      tipodecuenta: ['', [Validators.required]]
    });
  }


  
  regresar(): void {
    this.router.navigate(['/ver-origen']);
  }

  agregarOrigen() {
    const datosNuevoOrigen = this.origenForm.value;

    this.origenS.agregarOrigen(datosNuevoOrigen).subscribe(
      response => {
        console.log('Origen de egreso agregada correctamente', response);
        // Recargar la página después de agregar el agremiado
        Swal.fire({
          icon: 'success',
          text: 'Origen de egreso agregado correctamente',
          showConfirmButton: true
        });
        this.origenForm.reset();
      },
      error => {
        console.error('Error al agregar origen de egreso', error);
        // Manejar el error si es necesario
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Al agregar origen de egreso',
          showConfirmButton: true
        });
      }
    );
  }


}
