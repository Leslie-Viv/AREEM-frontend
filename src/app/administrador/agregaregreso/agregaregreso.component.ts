import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregaregreso',
  templateUrl: './agregaregreso.component.html',
  styleUrls: ['./agregaregreso.component.css']
})
export class AgregaregresoComponent {

  constructor(private router: Router) { }

  regresar(): void {
    this.router.navigate(['/ver-egresos']);
  }


}
