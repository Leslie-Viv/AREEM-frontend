import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-perfilfinanzas',
  templateUrl: './ver-perfilfinanzas.component.html',
  styleUrls: ['./ver-perfilfinanzas.component.css']
})
export class VerPerfilfinanzasComponent {
  constructor(private router: Router) { }

  paginap(): void {
    this.router.navigate(['/home-finanzas']);
  }

}
