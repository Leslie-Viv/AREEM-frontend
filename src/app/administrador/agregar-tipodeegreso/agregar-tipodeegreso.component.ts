import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-tipodeegreso',
  templateUrl: './agregar-tipodeegreso.component.html',
  styleUrls: ['./agregar-tipodeegreso.component.css']
})
export class AgregarTipodeegresoComponent {
  constructor(private router: Router) { }

  
  regresar(): void {
    this.router.navigate(['/ver-tipodeegreso']);
  }
}
