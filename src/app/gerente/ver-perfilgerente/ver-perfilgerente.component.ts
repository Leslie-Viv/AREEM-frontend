import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GerenteService } from 'src/app/services/gerente.service';

@Component({
  selector: 'app-ver-perfilgerente',
  templateUrl: './ver-perfilgerente.component.html',
  styleUrls: ['./ver-perfilgerente.component.css']
})
export class VerPerfilgerenteComponent {
  userInfo: any = {
    nombreempresa: '',
    nombrecompleto: '',
    email: ''
  };

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private finService: GerenteService) { }

  paginap(): void {
    this.router.navigate(['/home-gerente']);
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
