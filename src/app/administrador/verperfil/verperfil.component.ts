import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verperfil',
  templateUrl: './verperfil.component.html',
  styleUrls: ['./verperfil.component.css']
})
export class VerperfilComponent {
  constructor(private router: Router) { }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
  editarusuario(): void {
    this.router.navigate(['/editar-usuario']);
  }
  
}
