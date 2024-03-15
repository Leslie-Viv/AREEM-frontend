import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbargerente',
  templateUrl: './navbargerente.component.html',
  styleUrls: ['./navbargerente.component.css']
})
export class NavbargerenteComponent {
  constructor(private router: Router) { }

  Verperfilgerente(): void {
    this.router.navigate(['/ver-usuariogerente']);
  }

}
