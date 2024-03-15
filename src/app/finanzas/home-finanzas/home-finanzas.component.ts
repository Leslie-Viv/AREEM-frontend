import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-finanzas',
  templateUrl: './home-finanzas.component.html',
  styleUrls: ['./home-finanzas.component.css']
})
export class HomeFinanzasComponent {
  constructor(private router: Router) { }

  Nuevoegreso(): void {
    this.router.navigate(['/nuevo-egresofinanzas']);
  }

  Nuevoingreso(): void {
    this.router.navigate(['/nuevo-ingresofinanzas']);
  }


}
