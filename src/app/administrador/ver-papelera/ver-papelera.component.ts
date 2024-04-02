import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

export interface PapeleraIngreso{
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
  selector: 'app-ver-papelera',
  templateUrl: './ver-papelera.component.html',
  styleUrls: ['./ver-papelera.component.css']
})
export class VerPapeleraComponent {
  listPapeleraI:any=[];

  constructor(private router: Router, private papelera:AdminService) { }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }

  loadPapelera(){
    return this.papelera.getVerPapeleraI().subscribe((data:{})=>{
      console.log(data);
      this.listPapeleraI=data;
    })
  }


}
