import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

export interface PapeleraEgreso{
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
  selector: 'app-ver-papeleraegresos',
  templateUrl: './ver-papeleraegresos.component.html',
  styleUrls: ['./ver-papeleraegresos.component.css']
})
export class VerPapeleraegresosComponent {
  listPapeleraE:any=[];

  
  constructor(private router: Router, private papelera:AdminService) { }

  ngOnInit(): void {
    this.loadPapeleraE();
  }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }

  loadPapeleraE(){
    return this.papelera.getVerPapeleraE().subscribe((data:{})=>{
      console.log(data);
      this.listPapeleraE=data;
    })
  }



}
