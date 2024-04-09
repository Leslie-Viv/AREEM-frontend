import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { asyncValidator } from 'src/app/administrador/nuevo-usuario/async-validator'; // Importa el validador asíncrono
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  empresas: string[] = [];
  userId: number = 0;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private usuarioS: AdminService) {
    this.usuarioForm = this.fb.group({
      nombreempresa: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      nombrecompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email], asyncValidator(this.usuarioS)],
      rol_id: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.obtenerEmpresas();
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.userId = idParam ? +idParam : 0;
      this.cargarDatosUsuario(this.userId);
    });
  }

  // cargarDatosUsuario(userId: number): void {
  //   this.usuarioS.obtenerUsuarioPorId(userId).subscribe(
  //     (usuario) => {
  //       console.log('Datos del usuario:', usuario); // Verificar datos del usuario en la consola
  //       this.usuarioForm.patchValue({
  //         nombreempresa: usuario.nombreempresa,
  //         nombrecompleto: usuario.nombrecompleto,
  //         email: usuario.email,
  //         rol_id: usuario.rol_id
  //       });
  //       console.log('Datos del usuario:', usuario);
  //     },
  //     error => {
  //       console.error('Error al cargar datos del usuario', error);
  //       Swal.fire({
  //         icon: 'error',
  //         title: '¡Error!',
  //         text: 'Error al cargar datos del usuario',
  //         showConfirmButton: true
  //       });
  //     }
  //   );
  // }

  cargarDatosUsuario(userId: number): void {
    console.log('Cargando datos del usuario con ID:', userId);
    this.usuarioS.obtenerUsuarioPorId(userId).subscribe(
      (response) => {
        console.log('Datos del usuario recibidos:', response);
        const user = response.user; // Accede al objeto de usuario dentro de la respuesta
        if (this.usuarioForm) {
          console.log('Asignando datos al formulario');
          this.usuarioForm.patchValue({
            nombreempresa: user.nombreempresa,
            nombrecompleto: user.nombrecompleto,
            email: user.email,
            rol_id: user.rol_id
          });
        }
      },
      error => {
        console.error('Error al cargar datos del usuario', error);
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Error al cargar datos del usuario',
          showConfirmButton: true
        });
      }
    );
  }
  
  
  

  
  
  
  

  regresar(): void {
    this.router.navigate(['/nuevos-usuarios']);
  }

  obtenerEmpresas(): void {
    this.usuarioS.getVernombreempresas().subscribe(data => {
      this.empresas = data.map((empresa: any) => empresa.nombreempresa);
    });
  }

  guardarCambios() {
    const id = this.userId; // Obtener el ID del usuario a actualizar
    const formData = this.usuarioForm.value; // Obtener los datos del formulario
  
    this.usuarioS.actualizarUsuario(id, formData).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          text: 'Usuario actualizado correctamente',
          showConfirmButton: true
        });
        // Opcional: redirigir a la página de lista de usuarios u otra página deseada
      },
      error => {
        console.error('Error al actualizar usuario', error);
        // Manejar el error si es necesario
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Al actualizar usuario',
          showConfirmButton: true
        });
      }
    );
  }
  
  

}
