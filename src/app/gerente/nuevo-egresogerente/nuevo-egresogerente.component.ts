import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-egresogerente',
  templateUrl: './nuevo-egresogerente.component.html',
  styleUrls: ['./nuevo-egresogerente.component.css']
})
export class NuevoEgresogerenteComponent {

  constructor(private router: Router) { }

  regresar(): void {
    this.router.navigate(['/ver-egresosgerente']);
  }

}
