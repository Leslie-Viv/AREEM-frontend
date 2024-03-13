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
    NuevoIngresoComponent
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
