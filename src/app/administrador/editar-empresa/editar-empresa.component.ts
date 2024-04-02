import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  @Input() empresa!: Empresa; // Asegúrate de utilizar el tipo correcto (Agremiado) en lugar de any
  empresaForm!: FormGroup;


  constructor(private router: Router,private fb: FormBuilder, private empresaS: AdminService, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<EditarEmpresaComponent>  // Agrega esta línea) { }
  ){
    if (data && data.empresa) {
      this.empresaForm = this.fb.group({
        nombreempresa: [data.empresa.nombreempresa, Validators.required]
      });
    } else {
      console.error('No se proporcionó una empresa válida para editar.');
    }
  }
  
  regresar(): void {
    this.router.navigate(['/ver-empresas']);
  }

  ngOnInit(): void {
    console.log('Empresa recibido en ngOnInit:', this.data.empresa);

    // Verifica si agremiado y agremiado.id están definidos antes de realizar la lógica
    if (this.data.empresa && this.data.empresa.id) {
      this.empresaS.obtenerEmpresaPorId(this.data.empresa.id).subscribe(
        (data) => { 
          console.log("Datos de la Empresa:", this.data.empresa.id);
          if (this.data.empresa.id) {
            this.empresaForm.patchValue(this.data.empresa.id);
          } else {
            console.error('Datos de la empresa no válidos.');
          }
        },
        (error) => {
          console.error("Error al obtener datos de la empresa:", error);
        }
      );
    } else {
      console.error('No se proporcionó una empresa válida para editar.');
    }
  }


  actualizarEmpresa() {
    const datosActualizados = this.empresaForm.value;
    this.empresaS.actualizarempresa(this.data.empresa.id, datosActualizados).subscribe(
      response => {
        console.log('Empresa actualizada correctamente', response);
        Swal.fire({
          icon: 'success',
          text: 'Empresa actualizada correctamente',
          showConfirmButton: true
        });
        this.dialogRef.close(); // Cerrar el formulario aquí
      },
      error => {
        console.error('Error al actualizar empresa', error);
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Al actualizar empresa',
          showConfirmButton: true
        });
      }
    );
  }

}

  


