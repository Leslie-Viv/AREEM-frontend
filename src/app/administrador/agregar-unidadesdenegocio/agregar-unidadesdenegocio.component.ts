import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-unidadesdenegocio',
  templateUrl: './agregar-unidadesdenegocio.component.html',
  styleUrls: ['./agregar-unidadesdenegocio.component.css']
})
export class AgregarUnidadesdenegocioComponent {
  constructor(private router: Router) { }

  
  regresar(): void {
    this.router.navigate(['/ver-unidad']);
  }

}
