import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FinanzasService } from 'src/app/services/finanzas.service';
import { GerenteService } from 'src/app/services/gerente.service';



export interface Egresos{
  id: number;
  nombrecompleto: string;
  nombreempresa: string;
  anomesdereporte: string;
  origenegreso: string;
  tipodecuenta: string;
  N1: string;
  N2: string;
  N3: string;
  N4: string;
  N5: string;
  descripcionegreso:string;
  gasto:string;
  nombreunidad:string;
  created_at:string;
  fechareal:string;
  montototal:string;
  user_id:string;

}

@Component({
  selector: 'app-ver-egresogerente',
  templateUrl: './ver-egresogerente.component.html',
  styleUrls: ['./ver-egresogerente.component.css']
})
export class VerEgresogerenteComponent {
  listEgresosGerente:any=[];

  constructor(private router: Router,private egresos:GerenteService) { }

  paginap(): void {
    this.router.navigate(['/home-gerente']);
  }
  ngOnInit(): void {
    this.loadEgresos();
  }

  loadEgresos(){
    return this.egresos.getVerEgresos().subscribe((data:{})=>{
      console.log(data);
      this.listEgresosGerente=data;
    })
  }
 

  agregaregreso(): void {
    this.router.navigate(['/nuevo-egresogerente']);
  }

}
