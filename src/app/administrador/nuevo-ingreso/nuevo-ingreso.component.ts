import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-ingreso',
  templateUrl: './nuevo-ingreso.component.html',
  styleUrls: ['./nuevo-ingreso.component.css']
})
export class NuevoIngresoComponent {

  constructor(private router: Router) { }

  regresar(): void {
    this.router.navigate(['/ingresos-admin']);
  }

}
