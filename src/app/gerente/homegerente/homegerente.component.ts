import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homegerente',
  templateUrl: './homegerente.component.html',
  styleUrls: ['./homegerente.component.css']
})
export class HomegerenteComponent {
  constructor(private router: Router) { }

  Nuevoegreso(): void {
    this.router.navigate(['/nuevo-egresogerente']);
  }

  Nuevoingreso(): void {
    this.router.navigate(['/nuevo-ingresogerente']);
  }



}
