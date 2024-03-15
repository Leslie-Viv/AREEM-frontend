import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-perfilgerente',
  templateUrl: './ver-perfilgerente.component.html',
  styleUrls: ['./ver-perfilgerente.component.css']
})
export class VerPerfilgerenteComponent {
  constructor(private router: Router) { }

  paginap(): void {
    this.router.navigate(['/home-gerente']);
  }

}
