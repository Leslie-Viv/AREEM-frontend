import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

export interface Usuarios {
  id: number;
  nombreempresa: string;
  nombrecompleto: string;
  email: string;
  password: string;
  rol_id: string;
}

@Component({
  selector: 'app-nuevosusuarios',
  templateUrl: './nuevosusuarios.component.html',
  styleUrls: ['./nuevosusuarios.component.css']
})
export class NuevosusuariosComponent {
    listUsuarios: Usuarios[] = []; // Asegúrate de importar la interfaz Usuarios
  
    constructor(private router: Router, private UsuariosS: AdminService) {}
  
    paginap(): void {
      this.router.navigate(['/inicio-admin']);
    }
  
    ngOnInit(): void {
      this.loadUsers();
    }
  
    loadUsers() {
      this.UsuariosS.getVerUsuarios().subscribe((data: any) => { // Aquí deberías cambiar `any` por el tipo adecuado si es diferente
        console.log(data);
        this.listUsuarios = Object.values(data.users); // Convierte el objeto en una matriz
      });
    }
  
    Nuevousuario(): void {
      this.router.navigate(['/nuevo-usuario']);
    }
  
    editarusuario(): void {
      this.router.navigate(['/editar-usuario']);
    }

    generatePDF(usuarios: any[]): void {
      try {
        const documentDefinition = {
          content: [
            { text: 'Lista de Usuarios', style: 'header' },
            '\n\n',
            {
              table: {
                headerRows: 1,
                widths: [50, 100, 150, 150],
                body: [
                  ['id', 'Nombre empresa','Nombre completo','Email'],
                  ...usuarios.map((u: any) => [u.id, u.nombreempresa,u.nombrecompleto,u.email ]),
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
        const fileName = `Lista_de_Usuarios_${formattedDate}.pdf`;
        
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
  
