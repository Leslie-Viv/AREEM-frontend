import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-origendeegreso',
  templateUrl: './editar-origendeegreso.component.html',
  styleUrls: ['./editar-origendeegreso.component.css']
})
export class EditarOrigendeegresoComponent {
  constructor(private router: Router) { }

  
  regresar(): void {
    this.router.navigate(['/ver-origen']);
  }

}
