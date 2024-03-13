import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.css']
})
export class PaginaprincipalComponent {
  constructor(private router: Router) { }

  Nuevousuario(): void {
    this.router.navigate(['/nuevo-usuario']);
  }

  Ingreso(): void {
    this.router.navigate(['/nuevo-ingreso']);
  }
}
