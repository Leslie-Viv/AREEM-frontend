import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

export interface PapeleraEgreso{
  id:number;
  nombrecompleto:string;
  nombreempresa:string;
  anomesdereporte: string,
  origenegreso:string;
  tipodecuenta:string,
  tipoegreso:string;
  descripcionegreso:string;
  gasto:string;
  nombreunidad:string;
  fechareal:string;
  created_at:string;
  montototal:string;
  user_id:string

}

@Component({
  selector: 'app-ver-papeleraegresos',
  templateUrl: './ver-papeleraegresos.component.html',
  styleUrls: ['./ver-papeleraegresos.component.css']
})
export class VerPapeleraegresosComponent {
  listPapeleraE:any=[];

  
  constructor(private router: Router, private papelera:AdminService) { }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }

  loadPapelera(){
    return this.papelera.getVerPapeleraE().subscribe((data:{})=>{
      console.log(data);
      this.listPapeleraE=data;
    })
  }



}
