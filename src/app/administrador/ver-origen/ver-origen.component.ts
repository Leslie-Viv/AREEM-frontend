import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import Swal from 'sweetalert2';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

export interface Origen{
  id: number;
  origenegreso: string;
  tipodecuenta:string;
}
@Component({
  selector: 'app-ver-origen',
  templateUrl: './ver-origen.component.html',
  styleUrls: ['./ver-origen.component.css']
})
export class VerOrigenComponent {
  listOrigenes:any=[];

  constructor(private router: Router, private origen:AdminService) { }

  ngOnInit(): void {
    this.loadOrigen();
  }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
  loadOrigen(){
    return this.origen.getVerOrigen().subscribe((data:{})=>{
      console.log(data);
      this.listOrigenes=data;
    })
  }

  
  agregarorigen(): void {
    this.router.navigate(['/agregar-origen']);
  }

    
  generatePDF(origen: any[]): void {
    try {
      const documentDefinition = {
        content: [
          { text: 'Lista de Origenes de Egreso', style: 'header' },
          '\n\n',
          {
            table: {
              headerRows: 1,
              widths: [100 , 210 , 110],
              body: [
                ['id', 'Origen de egreso','Tipo de Cuenta'],
                ...origen.map((o: any) => [o.id, o.origenegreso,o.tipodecuenta ]),
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
      const fileName = `Lista_de_Origenes_De_Egreso_${formattedDate}.pdf`;
      
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

  editarorigen(origen: Origen): void {
    this.router.navigate(['/editar-origen', origen.id]);
  }

}
