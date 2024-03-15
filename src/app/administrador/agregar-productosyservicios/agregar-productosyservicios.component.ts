import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-productosyservicios',
  templateUrl: './agregar-productosyservicios.component.html',
  styleUrls: ['./agregar-productosyservicios.component.css']
})
export class AgregarProductosyserviciosComponent {
  constructor(private router: Router) { }

  
  regresar(): void {
    this.router.navigate(['/ver-productosyservicios']);
  }

}
