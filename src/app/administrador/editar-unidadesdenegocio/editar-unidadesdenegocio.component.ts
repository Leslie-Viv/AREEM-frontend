import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-unidadesdenegocio',
  templateUrl: './editar-unidadesdenegocio.component.html',
  styleUrls: ['./editar-unidadesdenegocio.component.css']
})
export class EditarUnidadesdenegocioComponent {
  constructor(private router: Router) { }

  
  regresar(): void {
    this.router.navigate(['/ver-unidad']);
  }

}
