import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empresa',
  templateUrl: './agregar-empresa.component.html',
  styleUrls: ['./agregar-empresa.component.css']
})
export class AgregarEmpresaComponent {

  constructor(private router: Router) { }

  
  regresar(): void {
    this.router.navigate(['/ver-empresas']);
  }


}
