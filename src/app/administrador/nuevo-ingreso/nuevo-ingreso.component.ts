import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService, Usuario } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { Usuarios } from '../nuevosusuarios/nuevosusuarios.component';




@Component({
  selector: 'app-nuevo-ingreso',
  templateUrl: './nuevo-ingreso.component.html',
  styleUrls: ['./nuevo-ingreso.component.css']
})
export class NuevoIngresoComponent {
  ingresoForm: FormGroup;
  productos: string[] = [];
  unidades: string[] = [];
  usuarios: Usuarios[] = [];

  constructor(private datePipe: DatePipe,private router: Router, private fb: FormBuilder, private ingresoS: AdminService) {
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
    this.router.navigate(['/ingresos-admin']);
  }
  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerUnidades();
    this.obtenerUsuarios();
  
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

  obtenerUsuarios(): void {
    this.usuarios=[]
    this.ingresoS.getVerUsuarios().subscribe((data: any) => { // Aquí deberías cambiar `any` por el tipo adecuado si es diferente
      console.log(data);
      this.usuarios = Object.values(data.users); // Convierte el objeto en una matriz
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
