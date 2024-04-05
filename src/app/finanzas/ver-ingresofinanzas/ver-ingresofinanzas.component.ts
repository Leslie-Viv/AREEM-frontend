import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FinanzasService } from 'src/app/services/finanzas.service';

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
  selector: 'app-ver-ingresofinanzas',
  templateUrl: './ver-ingresofinanzas.component.html',
  styleUrls: ['./ver-ingresofinanzas.component.css']
})
export class VerIngresofinanzasComponent {
  listIngresosFinanzas:any=[];

  constructor(private router: Router, private ingresos:FinanzasService) { }

  paginap(): void {
    this.router.navigate(['/home-finanzas']);
  }

  ngOnInit(): void {
    this.loadIngresos();
  }

  loadIngresos(){
    return this.ingresos.getVerIngresos().subscribe((data:{})=>{
      console.log(data);
      this.listIngresosFinanzas=data;
    })
  }

  Ingreso(): void {
    this.router.navigate(['/nuevo-ingresofinanzas']);
  }

}
