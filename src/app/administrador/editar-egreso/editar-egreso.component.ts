import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from '../nuevosusuarios/nuevosusuarios.component';
import { AdminService } from 'src/app/services/admin.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

export interface Origen {
  id: number;
  N1: string;
  N2: string;
  N3: string;
  N4: string;
  N5: string;
  descripcionegreso: string;
  gasto: string;
}

export interface Type {
  id: number;
  origenegreso:string;
  tipodecuenta:string;
}

export interface Egreso{
  id: number;
  nombrecompleto: string;
  nombreempresa: string;
  anomesdereporte: string;
  origenegreso: string;
  tipodecuenta: string;
  N1: string;
  N2: string;
  N3: string;
  N4: string;
  N5: string;
  descripcionegreso:string;
  gasto:string;
  nombreunidad:string;
  created_at:string;
  fechareal:string;
  montototal:string;
  user_id:string;
}

@Component({
  selector: 'app-editar-egreso',
  templateUrl: './editar-egreso.component.html',
  styleUrls: ['./editar-egreso.component.css']
})
export class EditarEgresoComponent {
  egresoForm: FormGroup;
  productos: string[] = [];
  unidades: string[] = [];
  empresas: string[] = [];
  usuarios: Usuarios[] = [];
  selectedData: any = {};
  datosTabla!: Origen[];
  selectedDataType: any = {};
  datosTabla2!: Type[];
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private adminService: AdminService,
    private datePipe: DatePipe, private ingresoS: AdminService, private egresoS: AdminService) { 
      this.egresoForm = this.fb.group({
        nombrecompleto: ['', Validators.required],
        nombreempresa: ['',Validators.required],
        anomesdereporte: ['', Validators.required],
        selectedDataType: [''],
        origenegreso: ['', Validators.required],
        tipodecuenta: ['', Validators.required],
        selectedData: [''],
        N1: ['', Validators.required],
        N2: ['', Validators.required],
        N3: ['', Validators.required],
        N4: ['', Validators.required],
        N5: ['', Validators.required],
        descripcionegreso: ['', Validators.required],
        gasto: ['', Validators.required],
        nombreunidad: ['', Validators.required],
        fechareal: ['', Validators.required],
        montototal: ['', Validators.required],
        user_id: ['', Validators.required]
      });
    }

  regresar(): void {
    this.router.navigate(['/ver-egresos']);
  }

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerUnidades();
    this.obtenerUsuarios();
    this.obtenerEmpresas();
    this.obtenerDatosTabla();
    this.obtenerDatosTabla2();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.adminService.obtenerEgresoPorId(id).subscribe((egreso) => {
        this.egresoForm.patchValue({
          nombrecompleto: egreso.nombrecompleto,
          nombreempresa: egreso.nombreempresa,
          anomesdereporte: egreso.anomesdereporte,
          origenegreso: egreso.origenegreso,
          tipodecuenta: egreso.tipodecuenta,
          N1: egreso.N1,
          N2: egreso.N2,
          N3: egreso.N3,
          N4: egreso.N4,
          N5: egreso.N5,
          descripcionegreso: egreso.descripcionegreso,
          gasto: egreso.gasto,
          nombreunidad: egreso.nombreunidad,
          fechareal: egreso.fechareal,
          montototal: egreso.montototal,
          user_id: egreso.user_id
        });
      });
    } else {
      console.error('ID de ingreso no proporcionado');
      // Puedes redirigir a una página de error o hacer cualquier otra acción apropiada aquí
    }
  }

  actualizarEgreso(): void {
    const datosNuevoIngreso = this.egresoForm.value;

    // Enriquecer la fecha anomesdereporte agregando el primer día del mes
    const anomesdereporte = new Date(datosNuevoIngreso.anomesdereporte);
    const primerDiaMes = new Date(anomesdereporte.getFullYear(), anomesdereporte.getMonth(), 1);
    datosNuevoIngreso.anomesdereporte = this.datePipe.transform(primerDiaMes, 'yyyy-MM-dd');

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const datosActualizados = this.egresoForm.value;
      this.adminService.actualizaregreso(id, datosActualizados).subscribe(() => {
        console.log('Egreso actualizado correctamente');
        Swal.fire({
          icon: 'success',
          title: 'Egreso actualizado',
          text: 'El Egreso se ha actualizado correctamente.',
          showConfirmButton: false,
          timer: 1500 // Cierra automáticamente después de 1.5 segundos
        });
        // Puedes mostrar un mensaje de éxito o redirigir a otra página después de actualizar la empresa
      }, (error) => {
        console.error('Error al actualizar Egreso', error);
        // Puedes mostrar un mensaje de error al usuario o hacer cualquier otra acción apropiada aquí
      });
    } else {
      console.error('ID de Egreso no proporcionado');
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

  onDataSelectedType(): void {
    const selectedValue = this.egresoForm.get('selectedDataType')?.value;
    if (selectedValue) {
      this.egresoForm.patchValue({
        origenegreso: selectedValue.origenegreso,
        tipodecuenta: selectedValue.tipodecuenta,
      });
    }
  }

  onDataSelected(): void {
    const selectedValue = this.egresoForm.get('selectedData')?.value;
    if (selectedValue) {
      this.egresoForm.patchValue({
        N1: selectedValue.N1,
        N2: selectedValue.N2,
        N3: selectedValue.N3,
        N4: selectedValue.N4,
        N5: selectedValue.N5,
        descripcionegreso: selectedValue.descripcionegreso,
        gasto: selectedValue.gasto,
      });
    }
  }

  isReadOnly(controlName: string): boolean {
    return this.egresoForm.get(controlName)?.value !== null;
  }

  
  obtenerEmpresas(): void {
    this.egresoS.getVernombreempresas().subscribe(data => {
      // Extraer solo los nombres de los productos
      this.empresas = data.map((nombreempresa: any) => nombreempresa.nombreempresa);
    });
  }

  obtenerDatosTabla(): void {
    // Aquí llamas a un servicio o método que obtenga los datos de la tabla y los asignas a la variable datosTabla
    // Por ejemplo:
    this.egresoS.getVerTipos().subscribe(
      (data: any) => {
        // Implementación del método
        this.datosTabla = data; // Asigna los datos obtenidos al arreglo datosTabla
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla:', error);
      }
    );
  }

  obtenerDatosTabla2(): void {
    // Aquí llamas a un servicio o método que obtenga los datos de la tabla y los asignas a la variable datosTabla
    // Por ejemplo:
    this.egresoS.getVerOrigen().subscribe(
      (data: any) => {
        // Implementación del método
        this.datosTabla2 = data; // Asigna los datos obtenidos al arreglo datosTabla
      },
      (error) => {
        console.error('Error al obtener los datos de la tabla:', error);
      }
    );
  }




}
