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
import { VerempresasComponent } from './administrador/verempresas/verempresas.component';
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
import { EditarEmpresaComponent } from './administrador/editar-empresa/editar-empresa.component';
import { EditarTipodeegresoComponent } from './administrador/editar-tipodeegreso/editar-tipodeegreso.component';
import { AgregarTipodeegresoComponent } from './administrador/agregar-tipodeegreso/agregar-tipodeegreso.component';
import { AgregarOrigendeegresoComponent } from './administrador/agregar-origendeegreso/agregar-origendeegreso.component';
import { EditarOrigendeegresoComponent } from './administrador/editar-origendeegreso/editar-origendeegreso.component';

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
    VerempresasComponent,
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
    EditarEmpresaComponent,
    EditarTipodeegresoComponent,
    AgregarTipodeegresoComponent,
    AgregarOrigendeegresoComponent,
    EditarOrigendeegresoComponent,
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
