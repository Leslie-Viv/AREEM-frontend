import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-productosyservicios',
  templateUrl: './editar-productosyservicios.component.html',
  styleUrls: ['./editar-productosyservicios.component.css']
})
export class EditarProductosyserviciosComponent {
  constructor(private router: Router) { }

  
  regresar(): void {
    this.router.navigate(['/ver-productosyservicios']);
  }

}
