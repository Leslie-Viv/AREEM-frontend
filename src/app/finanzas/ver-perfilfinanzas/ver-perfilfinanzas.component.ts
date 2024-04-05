import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FinanzasService } from 'src/app/services/finanzas.service';

@Component({
  selector: 'app-ver-perfilfinanzas',
  templateUrl: './ver-perfilfinanzas.component.html',
  styleUrls: ['./ver-perfilfinanzas.component.css']
})
export class VerPerfilfinanzasComponent {
  userInfo: any = {
    nombreempresa: '',
    nombrecompleto: '',
    email: ''
  };
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private finService: FinanzasService) { }

  paginap(): void {
    this.router.navigate(['/home-finanzas']);
  }
  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    this.finService.getUserInfo().subscribe(
      (data: any) => {
        this.userInfo = data[0]; // Asigna el primer objeto del array de datos
        console.log('Datos del usuario:', this.userInfo); // Verifica los datos en la consola
      },
      (error: any) => {
        console.log('Error al obtener los datos del usuario:', error);
      }
    );
    }

}
