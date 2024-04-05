import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';


interface Empresa {
  id:number;
  nombreempresa: string;
}

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent {
  empresaForm: FormGroup;

  constructor(    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private adminService: AdminService

  ) {

    this.empresaForm = this.fb.group({
      nombreempresa: ['', Validators.required]
    });
  }
  
  regresar(): void {
    this.router.navigate(['/ver-empresas']);
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.adminService.obtenerEmpresaPorId(id).subscribe((empresa) => {
        this.empresaForm.patchValue({
          nombreempresa: empresa.nombreempresa
        });
      });
    } else {
      console.error('ID de empresa no proporcionado');
      // Puedes redirigir a una página de error o hacer cualquier otra acción apropiada aquí
    }
  }

  actualizarEmpresa(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const datosActualizados = this.empresaForm.value;
      this.adminService.actualizarempresa(id, datosActualizados).subscribe(() => {
        console.log('Empresa actualizada correctamente');
        Swal.fire({
          icon: 'success',
          title: 'Empresa actualizada',
          text: 'La empresa se ha actualizado correctamente.',
          showConfirmButton: false,
          timer: 1500 // Cierra automáticamente después de 1.5 segundos
        });
        // Puedes mostrar un mensaje de éxito o redirigir a otra página después de actualizar la empresa
      }, (error) => {
        console.error('Error al actualizar empresa', error);
        // Puedes mostrar un mensaje de error al usuario o hacer cualquier otra acción apropiada aquí
      });
    } else {
      console.error('ID de empresa no proporcionado');
      // Puedes redirigir a una página de error o hacer cualquier otra acción apropiada aquí
    }
  }

}

