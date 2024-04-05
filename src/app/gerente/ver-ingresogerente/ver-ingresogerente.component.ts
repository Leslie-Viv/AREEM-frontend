import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GerenteService } from 'src/app/services/gerente.service';

export interface Ingreso{
  id:number;
  nombrecompleto:string;
  nombreunidad:string;
  anomesdereporte:string;
  producto:string;
  fechareal:string;
  created_at:string;
  montototal:string;
  user_id:string;
}

@Component({
  selector: 'app-ver-ingresogerente',
  templateUrl: './ver-ingresogerente.component.html',
  styleUrls: ['./ver-ingresogerente.component.css']
})
export class VerIngresogerenteComponent {
  listIngresosGerente:any=[];
  constructor(private router: Router, private ingresos:GerenteService) { }

  paginap(): void {
    this.router.navigate(['/home-gerente']);
  }
  ngOnInit(): void {
    this.loadIngresos();
  }

  loadIngresos(){
    return this.ingresos.getVerIngresos().subscribe((data:{})=>{
      console.log(data);
      this.listIngresosGerente=data;
    })
  }


  Ingreso(): void {
    this.router.navigate(['/nuevo-ingresogerente']);
  }

}
