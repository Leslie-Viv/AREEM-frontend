import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-egreso',
  templateUrl: './editar-egreso.component.html',
  styleUrls: ['./editar-egreso.component.css']
})
export class EditarEgresoComponent {
  constructor(private router: Router) { }

  regresar(): void {
    this.router.navigate(['/ver-egresos']);
  }



}
