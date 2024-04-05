import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { EditarEmpresaComponent } from '../editar-empresa/editar-empresa.component';
import Swal from 'sweetalert2';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;





export interface Empresa{
  id:number;
  nombreempresa:string;
}

@Component({
  selector: 'app-verempresas',
  templateUrl: './verempresas.component.html',
  styleUrls: ['./verempresas.component.css']
})
export class VerempresasComponent implements OnInit{


  listEmpresas:any=[];

  constructor(private router: Router, private admin:AdminService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadEmpresas();
    
  }
  
  

  loadEmpresas(){
    return this.admin.getVerempresas().subscribe((data:{})=>{
      console.log(data);
      this.listEmpresas=data;
    })
  }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
 
  agregarempresa(): void {
    this.router.navigate(['/agregar-empresa']);
  }

  editarempresa(empresa: Empresa): void {
    this.router.navigate(['/editar-empresa', empresa.id]);
  }
  

  
  
  generatePDF(empresas: any[]): void {
    try {
      const documentDefinition = {
        content: [
          { text: 'Lista de Empresas', style: 'header' },
          '\n\n',
          {
            table: {
              headerRows: 1,
              widths: [100, 400],
              body: [
                ['id', 'Nombre de Empresa'],
                ...empresas.map((e: any) => [e.id, e.nombreempresa]),
              ],
            },
          },
        ],
        styles: {
          header: {
            fontSize: 12,
            bold: true,
          },
        },
      };

      // Obtener la fecha actual y formatearla
      const currentDate = new Date(); // Fecha y hora local del usuario
      const utcDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())); // Fecha y hora en UTC
      const formattedDate = utcDate.toISOString().slice(0, 10); // Convertir a ISO y obtener la fecha en formato YYYY-MM-DD
      
      // Nombre del archivo PDF con la fecha actual
      const fileName = `Lista_de_Empresas_${formattedDate}.pdf`;
      
      // Crear el PDF
      const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
      

      Swal.fire({
        icon: 'success',
        text: 'PDF generado correctamente',
        showConfirmButton: false,
        timer: 1500
      });

      // Descargar el PDF
      pdfDocGenerator.download(fileName);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al generar el PDF',
        showConfirmButton: true
      });
    }
  }







}
