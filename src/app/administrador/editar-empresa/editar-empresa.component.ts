import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent {
  constructor(private router: Router) { }

  
  regresar(): void {
    this.router.navigate(['/ver-empresas']);
  }

}
