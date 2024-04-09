import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PaginaprincipalComponent } from './administrador/paginaprincipal/paginaprincipal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuhamburguesaComponent } from './administrador/menuhamburguesa/menuhamburguesa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { IngresosComponent } from './administrador/ingresos/ingresos.component';
import { NuevosusuariosComponent } from './administrador/nuevosusuarios/nuevosusuarios.component';
import { VerperfilComponent } from './administrador/verperfil/verperfil.component';
import { NuevoUsuarioComponent } from './administrador/nuevo-usuario/nuevo-usuario.component';
import { NuevoIngresoComponent } from './administrador/nuevo-ingreso/nuevo-ingreso.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { VeregresosComponent } from './administrador/veregresos/veregresos.component';
import { AgregaregresoComponent } from './administrador/agregaregreso/agregaregreso.component';
import { VerunidadesdenegocioComponent } from './administrador/verunidadesdenegocio/verunidadesdenegocio.component';
import { VertipodeegresoComponent } from './administrador/vertipodeegreso/vertipodeegreso.component';
import { VerOrigenComponent } from './administrador/ver-origen/ver-origen.component';
import { VerProductosyserviciosComponent } from './administrador/ver-productosyservicios/ver-productosyservicios.component';
import { VerPapeleraComponent } from './administrador/ver-papelera/ver-papelera.component';
import { EditarIngresoComponent } from './administrador/editar-ingreso/editar-ingreso.component';
import { EditarEgresoComponent } from './administrador/editar-egreso/editar-egreso.component';
import { EditarUsuarioComponent } from './administrador/editar-usuario/editar-usuario.component';
import { EditarUnidadesdenegocioComponent } from './administrador/editar-unidadesdenegocio/editar-unidadesdenegocio.component';
import { AgregarUnidadesdenegocioComponent } from './administrador/agregar-unidadesdenegocio/agregar-unidadesdenegocio.component';
import { AgregarEmpresaComponent } from './administrador/agregar-empresa/agregar-empresa.component';
import { EditarTipodeegresoComponent } from './administrador/editar-tipodeegreso/editar-tipodeegreso.component';
import { AgregarTipodeegresoComponent } from './administrador/agregar-tipodeegreso/agregar-tipodeegreso.component';
import { AgregarOrigendeegresoComponent } from './administrador/agregar-origendeegreso/agregar-origendeegreso.component';
import { EditarOrigendeegresoComponent } from './administrador/editar-origendeegreso/editar-origendeegreso.component';
import { EditarProductosyserviciosComponent } from './administrador/editar-productosyservicios/editar-productosyservicios.component';
import { AgregarProductosyserviciosComponent } from './administrador/agregar-productosyservicios/agregar-productosyservicios.component';
import { HomegerenteComponent } from './gerente/homegerente/homegerente.component';
import { NuevoEgresogerenteComponent } from './gerente/nuevo-egresogerente/nuevo-egresogerente.component';
import { VerEgresogerenteComponent } from './gerente/ver-egresogerente/ver-egresogerente.component';
import { VerPerfilgerenteComponent } from './gerente/ver-perfilgerente/ver-perfilgerente.component';
import { MenuhamburguesagerenteComponent } from './gerente/menuhamburguesagerente/menuhamburguesagerente.component';
import { NavbargerenteComponent } from './gerente/navbargerente/navbargerente.component';
import { NavbarfinanzasComponent } from './finanzas/navbarfinanzas/navbarfinanzas.component';
import { MenuhamburguesafinanzasComponent } from './finanzas/menuhamburguesafinanzas/menuhamburguesafinanzas.component';
import { VerPerfilfinanzasComponent } from './finanzas/ver-perfilfinanzas/ver-perfilfinanzas.component';
import { VerEgresosfinanzasComponent } from './finanzas/ver-egresosfinanzas/ver-egresosfinanzas.component';
import { NuevoEgresofinanzasComponent } from './finanzas/nuevo-egresofinanzas/nuevo-egresofinanzas.component';
import { HomeFinanzasComponent } from './finanzas/home-finanzas/home-finanzas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe } from '@angular/common'; // Importa DatePipe
import { VerPapeleraegresosComponent } from './administrador/ver-papeleraegresos/ver-papeleraegresos.component';
import { AdminModule } from './administrador/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaprincipalComponent,
    NavbarComponent,
    MenuhamburguesaComponent,
    IngresosComponent,
    NuevosusuariosComponent,
    VerperfilComponent,
    NuevoUsuarioComponent,
    NuevoIngresoComponent,
    VeregresosComponent,
    AgregaregresoComponent,
    VerunidadesdenegocioComponent,
    VertipodeegresoComponent,
    VerOrigenComponent,
    VerProductosyserviciosComponent,
    VerPapeleraComponent,
    EditarIngresoComponent,
    EditarEgresoComponent,
    EditarUsuarioComponent,
    EditarUnidadesdenegocioComponent,
    AgregarUnidadesdenegocioComponent,
    AgregarEmpresaComponent,
    EditarTipodeegresoComponent,
    AgregarTipodeegresoComponent,
    AgregarOrigendeegresoComponent,
    EditarOrigendeegresoComponent,
    EditarProductosyserviciosComponent,
    AgregarProductosyserviciosComponent,
    HomegerenteComponent,
    NuevoEgresogerenteComponent,
    VerEgresogerenteComponent,
    VerPerfilgerenteComponent,
    MenuhamburguesagerenteComponent,
    NavbargerenteComponent,
    NavbarfinanzasComponent,
    MenuhamburguesafinanzasComponent,
    VerPerfilfinanzasComponent,
    VerEgresosfinanzasComponent,
    NuevoEgresofinanzasComponent,
    HomeFinanzasComponent,
    VerPapeleraegresosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    AdminModule,
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
