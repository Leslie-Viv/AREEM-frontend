import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-ingresogerente',
  templateUrl: './nuevo-ingresogerente.component.html',
  styleUrls: ['./nuevo-ingresogerente.component.css']
})
export class NuevoIngresogerenteComponent {
  constructor(private router: Router) { }
  regresar(): void {
    this.router.navigate(['/ver-ingresosgerente']);
  }


}
