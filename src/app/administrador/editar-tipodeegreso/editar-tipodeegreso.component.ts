import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-tipodeegreso',
  templateUrl: './editar-tipodeegreso.component.html',
  styleUrls: ['./editar-tipodeegreso.component.css']
})
export class EditarTipodeegresoComponent {
  constructor(private router: Router) { }

  
  regresar(): void {
    this.router.navigate(['/ver-tipodeegreso']);
  }

}
