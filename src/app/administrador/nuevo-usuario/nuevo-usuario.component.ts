import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {
  usuarioForm: FormGroup;
  empresas: string[] = [];

  constructor(private router: Router,
    private fb: FormBuilder,private usuarioS: AdminService
    ) {
      this.usuarioForm = this.fb.group({
        nombreempresa: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
        nombrecompleto: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
        email: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
        password: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
        rol_id: ['', Validators.required],
      });
     }

  
  regresar(): void {
    this.router.navigate(['/nuevos-usuarios']);
  }

  ngOnInit(): void {
    this.obtenerEmpresas();
  
  }

  obtenerEmpresas(): void {
    this.usuarioS.getVernombreempresas().subscribe(data => {
      // Extraer solo los nombres de los productos
      this.empresas = data.map((nombreempresa: any) => nombreempresa.nombreempresa);
    });
  }

  agregarUsuario() {
    const datosNuevoUsuario = this.usuarioForm.value;

    this.usuarioS.agregarUsuario(datosNuevoUsuario).subscribe(
      response => {
        console.log('Usuario agregado correctamente', response);
        // Recargar la página después de agregar el agremiado
        Swal.fire({
          icon: 'success',
          text: 'Usuario agregado correctamente',
          showConfirmButton: true
        });
        this.usuarioForm.reset();
      },
      error => {
        console.error('Error al agregar usuario', error);
        // Manejar el error si es necesario
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Al agregar usuario',
          showConfirmButton: true
        });
      }
    );
  }


}
