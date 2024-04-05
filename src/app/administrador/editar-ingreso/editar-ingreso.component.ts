import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import { Usuarios } from '../nuevosusuarios/nuevosusuarios.component';
import { DatePipe } from '@angular/common';

export interface Ingreso{
  id:number;
  nombrecompleto:string;
  nombreunidad:string;
  anomesdereporte:string;
  producto:string;
  fechareal:string;
  created_at:string;
  montototal:string;
  user_id:string;
}


@Component({
  selector: 'app-editar-ingreso',
  templateUrl: './editar-ingreso.component.html',
  styleUrls: ['./editar-ingreso.component.css']
})
export class EditarIngresoComponent {
  ingresoForm: FormGroup;
  productos: string[] = [];
  unidades: string[] = [];
  usuarios: Usuarios[] = [];
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private adminService: AdminService,
    private datePipe: DatePipe, private ingresoS: AdminService) {
      this.ingresoForm = this.fb.group({
        nombrecompleto: ['', Validators.required],
        nombreunidad: ['', Validators.required],
        nombreempresa: ['', Validators.required],
        anomesdereporte: ['', Validators.required],
        producto: ['', Validators.required],
        fechareal: ['', Validators.required],
        montototal: ['', Validators.required],
        user_id: ['', Validators.required]
        

      });
     }

  regresar(): void {
    this.router.navigate(['/ingresos-admin']);
  }

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerUnidades();
    this.obtenerUsuarios();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.adminService.obtenerIngresoPorId(id).subscribe((ingreso) => {
        this.ingresoForm.patchValue({
          nombrecompleto: ingreso.nombrecompleto,
          nombreunidad: ingreso.nombreunidad,
          nombreempresa: ingreso.nombreempresa,
          anomesdereporte: ingreso.anomesdereporte,
          producto: ingreso.producto,
          fechareal: ingreso.fechareal,
          montototal: ingreso.montototal,
          user_id: ingreso.user_id
        });
      });
    } else {
      console.error('ID de ingreso no proporcionado');
      // Puedes redirigir a una página de error o hacer cualquier otra acción apropiada aquí
    }
  }

  actualizarIngreso(): void {
    const datosNuevoIngreso = this.ingresoForm.value;

    // Enriquecer la fecha anomesdereporte agregando el primer día del mes
    const anomesdereporte = new Date(datosNuevoIngreso.anomesdereporte);
    const primerDiaMes = new Date(anomesdereporte.getFullYear(), anomesdereporte.getMonth(), 1);
    datosNuevoIngreso.anomesdereporte = this.datePipe.transform(primerDiaMes, 'yyyy-MM-dd');

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const datosActualizados = this.ingresoForm.value;
      this.adminService.actualizaringreso(id, datosActualizados).subscribe(() => {
        console.log('Ingreso actualizado correctamente');
        Swal.fire({
          icon: 'success',
          title: 'Ingreso actualizado',
          text: 'El Ingreso se ha actualizado correctamente.',
          showConfirmButton: false,
          timer: 1500 // Cierra automáticamente después de 1.5 segundos
        });
        // Puedes mostrar un mensaje de éxito o redirigir a otra página después de actualizar la empresa
      }, (error) => {
        console.error('Error al actualizar ingreso', error);
        // Puedes mostrar un mensaje de error al usuario o hacer cualquier otra acción apropiada aquí
      });
    } else {
      console.error('ID de ingreso no proporcionado');
      // Puedes redirigir a una página de error o hacer cualquier otra acción apropiada aquí
    }
  }

  obtenerUsuarios(): void {
    this.usuarios=[]
    this.ingresoS.getVerUsuarios().subscribe((data: any) => { // Aquí deberías cambiar `any` por el tipo adecuado si es diferente
      console.log(data);
      this.usuarios = Object.values(data.users); // Convierte el objeto en una matriz
    });
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


}
