import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-origendeegreso',
  templateUrl: './agregar-origendeegreso.component.html',
  styleUrls: ['./agregar-origendeegreso.component.css']
})
export class AgregarOrigendeegresoComponent {
  constructor(private router: Router) { }

  
  regresar(): void {
    this.router.navigate(['/ver-origen']);
  }

}
