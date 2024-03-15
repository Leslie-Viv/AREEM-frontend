import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-ingreso',
  templateUrl: './editar-ingreso.component.html',
  styleUrls: ['./editar-ingreso.component.css']
})
export class EditarIngresoComponent {
  
  constructor(private router: Router) { }

  regresar(): void {
    this.router.navigate(['/ingresos-admin']);
  }

}
