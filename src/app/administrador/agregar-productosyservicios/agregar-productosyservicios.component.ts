import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-productosyservicios',
  templateUrl: './agregar-productosyservicios.component.html',
  styleUrls: ['./agregar-productosyservicios.component.css']
})
export class AgregarProductosyserviciosComponent {
  productoForm: FormGroup;
  
  constructor(private router: Router,private fb: FormBuilder,private productoS: AdminService) {
    this.productoForm = this.fb.group({
      producto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
    });
   }

  
  regresar(): void {
    this.router.navigate(['/ver-productosyservicios']);
  }

  agregarproducto() {
    const datosNuevoProducto = this.productoForm.value;

    this.productoS.agregarProducto(datosNuevoProducto).subscribe(
      response => {
        console.log('Producto agregada correctamente', response);
        // Recargar la página después de agregar el agremiado
        Swal.fire({
          icon: 'success',
          text: 'Producto agregado correctamente',
          showConfirmButton: true
        });
        this.productoForm.reset();
      },
      error => {
        console.error('Error al agregar producto', error);
        // Manejar el error si es necesario
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Al agregar producto',
          showConfirmButton: true
        });
      }
    );
  }

  

}
