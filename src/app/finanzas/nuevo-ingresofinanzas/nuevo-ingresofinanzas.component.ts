import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-ingresofinanzas',
  templateUrl: './nuevo-ingresofinanzas.component.html',
  styleUrls: ['./nuevo-ingresofinanzas.component.css']
})
export class NuevoIngresofinanzasComponent {
  constructor(private router: Router) { }
  regresar(): void {
    this.router.navigate(['/ver-ingresosfinanzas']);
  }

}
