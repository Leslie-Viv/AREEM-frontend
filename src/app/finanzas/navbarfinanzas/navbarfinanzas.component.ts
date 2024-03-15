import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarfinanzas',
  templateUrl: './navbarfinanzas.component.html',
  styleUrls: ['./navbarfinanzas.component.css']
})
export class NavbarfinanzasComponent {
  constructor(private router: Router) { }

  Verperfilfinanzas(): void {
    this.router.navigate(['/ver-usuariofinanzas']);
  }

}
