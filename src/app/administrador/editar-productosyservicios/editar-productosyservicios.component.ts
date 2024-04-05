import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

interface Producto {
  id:number;
  producto: string;
}


@Component({
  selector: 'app-editar-productosyservicios',
  templateUrl: './editar-productosyservicios.component.html',
  styleUrls: ['./editar-productosyservicios.component.css']
})
export class EditarProductosyserviciosComponent {

  productoForm: FormGroup;
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private adminService: AdminService
) {
  this.productoForm = this.fb.group({
    producto: ['', Validators.required]
  });
 }

  
  regresar(): void {
    this.router.navigate(['/ver-productosyservicios']);
  }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.adminService.obtenerProductoPorId(id).subscribe((producto) => {
        this.productoForm.patchValue({
          producto: producto.producto
        });
      });
    } else {
      console.error('ID de producto no proporcionado');
      // Puedes redirigir a una página de error o hacer cualquier otra acción apropiada aquí
    }
  }

  actualizarProducto(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const datosActualizadosProducto = this.productoForm.value;
      this.adminService.actualizarproducto(id, datosActualizadosProducto).subscribe(() => {
        console.log('Producto actualizado correctamente');
        Swal.fire({
          icon: 'success',
          title: 'Producto actualizado',
          text: 'El producto se ha actualizado correctamente.',
          showConfirmButton: false,
          timer: 1500 // Cierra automáticamente después de 1.5 segundos
        });
        // Puedes mostrar un mensaje de éxito o redirigir a otra página después de actualizar la empresa
      }, (error) => {
        console.error('Error al actualizar producto', error);
        // Puedes mostrar un mensaje de error al usuario o hacer cualquier otra acción apropiada aquí
      });
    } else {
      console.error('ID de producto no proporcionado');
      // Puedes redirigir a una página de error o hacer cualquier otra acción apropiada aquí
    }
  }


}
