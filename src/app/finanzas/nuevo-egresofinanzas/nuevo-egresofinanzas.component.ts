import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-egresofinanzas',
  templateUrl: './nuevo-egresofinanzas.component.html',
  styleUrls: ['./nuevo-egresofinanzas.component.css']
})
export class NuevoEgresofinanzasComponent {
  constructor(private router: Router) { }

  regresar(): void {
    this.router.navigate(['/ver-egresosfinanzas']);
  }


}
