import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  constructor(private router: Router) { }

  
  regresar(): void {
    this.router.navigate(['/nuevos-usuarios']);
  }

}
