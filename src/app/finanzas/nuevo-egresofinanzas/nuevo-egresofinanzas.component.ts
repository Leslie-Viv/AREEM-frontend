import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/administrador/nuevosusuarios/nuevosusuarios.component';
import { AdminService } from 'src/app/services/admin.service';
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


@Component({
  selector: 'app-nuevo-egresofinanzas',
  templateUrl: './nuevo-egresofinanzas.component.html',
  styleUrls: ['./nuevo-egresofinanzas.component.css']
})
export class NuevoEgresofinanzasComponent {
  egresoForm: FormGroup;
  productos: string[] = [];
  unidades: string[] = [];
  empresas: string[] = [];
  selectedData: any = {};
  datosTabla!: Origen[];
  selectedDataType: any = {};
  datosTabla2!: Type[];
  constructor(
    private datePipe: DatePipe,
    private router: Router,
     private fb: FormBuilder,
      private egresoS: AdminService) {
        this.egresoForm = this.fb.group({
          nombrecompleto: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
          nombreempresa: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
          anomesdereporte: ['', [Validators.required]],
          selectedDataType: [''],
          origenegreso: ['', [Validators.required]],
          tipodecuenta: ['', [Validators.required]],
          selectedData: [''],
          N1: ['', [Validators.required]],
          N2: ['', [Validators.required]],
          N3: ['', [Validators.required]],
          N4: ['', [Validators.required]],
          N5: ['', [Validators.required]],
          descripcionegreso: ['', [Validators.required]],
          gasto: ['', [Validators.required]],
          nombreunidad: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
          created_at: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
          fechareal: ['', [Validators.required]],
          montototal: ['', [Validators.required]],
          user_id: ['', [Validators.required]]
        });
       }

  regresar(): void {
    this.router.navigate(['/ver-egresosfinanzas']);
  }

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerUnidades();
    this.obtenerEmpresas();
    this.obtenerDatosTabla();
    this.obtenerDatosTabla2();

  
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

  
  

  
  obtenerProductos(): void {
    this.egresoS.getVernombreproductos().subscribe(data => {
      // Extraer solo los nombres de los productos
      this.productos = data.map((producto: any) => producto.producto);
    });
  }

  obtenerUnidades(): void {
    this.egresoS.getVernombreunidades().subscribe(data => {
      // Extraer solo los nombres de los productos
      this.unidades = data.map((nombreunidad: any) => nombreunidad.nombreunidad);
    });
  }

  
  obtenerEmpresas(): void {
    this.egresoS.getVernombreempresas().subscribe(data => {
      // Extraer solo los nombres de los productos
      this.empresas = data.map((nombreempresa: any) => nombreempresa.nombreempresa);
    });
  }


  agregarEgreso() {
    const datosNuevoEgreso = this.egresoForm.value;

    // Enriquecer la fecha anomesdereporte agregando el primer día del mes
    const anomesdereporte = new Date(datosNuevoEgreso.anomesdereporte);
    const primerDiaMes = new Date(anomesdereporte.getFullYear(), anomesdereporte.getMonth(), 1);
    datosNuevoEgreso.anomesdereporte = this.datePipe.transform(primerDiaMes, 'yyyy-MM-dd');

    this.egresoS.agregarEgreso(datosNuevoEgreso).subscribe(
      response => {
        console.log('Egreso agregado correctamente', response);
        // Recargar la página después de agregar el agremiado
        Swal.fire({
          icon: 'success',
          text: 'Egreso agregado correctamente',
          showConfirmButton: true
        });
        this.egresoForm.reset();
      },
      error => {
        console.error('Error al agregar egreso', error);
        // Manejar el error si es necesario
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Al agregar egreso',
          showConfirmButton: true
        });
      }
    );
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
