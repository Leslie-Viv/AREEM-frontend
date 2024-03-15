import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {
  constructor(private router: Router) { }

  
  regresar(): void {
    this.router.navigate(['/nuevos-usuarios']);
  }


}
