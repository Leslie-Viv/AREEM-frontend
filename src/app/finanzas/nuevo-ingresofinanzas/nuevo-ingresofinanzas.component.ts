import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-ingresofinanzas',
  templateUrl: './nuevo-ingresofinanzas.component.html',
  styleUrls: ['./nuevo-ingresofinanzas.component.css']
})
export class NuevoIngresofinanzasComponent {
  ingresoForm: FormGroup;
  productos: string[] = [];
  unidades: string[] = [];

  constructor(private datePipe: DatePipe,private router: Router, private fb: FormBuilder, 
    private ingresoS: AdminService) {
    this.ingresoForm = this.fb.group({
      nombrecompleto: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      nombreunidad: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      anomesdereporte: ['', [Validators.required]],
      producto: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      fechareal: ['', [Validators.required]],
      created_at: ['', [Validators.required]],
      montototal: ['', [Validators.required]],
      user_id: ['', [Validators.required]]
    });
   }
  regresar(): void {
    this.router.navigate(['/ver-ingresosfinanzas']);
  }

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerUnidades();
   
  
  }
  

  obtenerProductos(): void {
    this.ingresoS.getVernombreproductos().subscribe(data => {
      // Extraer solo los nombres de los productos
      this.productos = data.map((producto: any) => producto.producto);
    });
  }

  obtenerUnidades(): void {
    this.ingresoS.getVernombreunidades().subscribe(data => {
      // Extraer solo los nombres de los productos
      this.unidades = data.map((nombreunidad: any) => nombreunidad.nombreunidad);
    });
  }

 

  agregarIngreso() {
    const datosNuevoIngreso = this.ingresoForm.value;

    // Enriquecer la fecha anomesdereporte agregando el primer día del mes
    const anomesdereporte = new Date(datosNuevoIngreso.anomesdereporte);
    const primerDiaMes = new Date(anomesdereporte.getFullYear(), anomesdereporte.getMonth(), 1);
    datosNuevoIngreso.anomesdereporte = this.datePipe.transform(primerDiaMes, 'yyyy-MM-dd');

    this.ingresoS.agregarIngreso(datosNuevoIngreso).subscribe(
      response => {
        console.log('Ingreso agregado correctamente', response);
        // Recargar la página después de agregar el agremiado
        Swal.fire({
          icon: 'success',
          text: 'Ingreso agregado correctamente',
          showConfirmButton: true
        });
        this.ingresoForm.reset();
      },
      error => {
        console.error('Error al agregar ingreso', error);
        // Manejar el error si es necesario
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Al agregar ingreso',
          showConfirmButton: true
        });
      }
    );
  }


}
