import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-empresa',
  templateUrl: './agregar-empresa.component.html',
  styleUrls: ['./agregar-empresa.component.css']
})
export class AgregarEmpresaComponent {
  empresaForm: FormGroup;

  constructor(private router: Router,private fb: FormBuilder,private empresa: AdminService) {
    this.empresaForm = this.fb.group({
      nombreempresa: ['', Validators.required]
    });
   }

   regresar(): void {
    this.router.navigate(['/ver-empresas']);
  }

  agregarempresa() {
    const datosNuevaEmpresa = this.empresaForm.value;

    this.empresa.agregarempresa(datosNuevaEmpresa).subscribe(
      response => {
        console.log('Empresa agregada correctamente', response);
        // Recargar la página después de agregar el agremiado
        Swal.fire({
          icon: 'success',
          text: 'Empresa agregada correctamente',
          showConfirmButton: true
        });
        this.empresaForm.reset();
      },
      error => {
        console.error('Error al agregar empresa', error);
        // Manejar el error si es necesario
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Al agregar empresa',
          showConfirmButton: true
        });
      }
    );
  }

 
}

  





