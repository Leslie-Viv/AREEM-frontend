import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, tap, throwError } from 'rxjs';
import { AppSettings } from 'appsettings-json-reader';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Usuarios } from '../administrador/nuevosusuarios/nuevosusuarios.component';
import { catchError } from 'rxjs/operators';
export{UsuariosResponse,Usuario};
interface Usuario{
  users:{
    id:number;
    nombrecompleto:string;
    nombreempresa:string;
    rol_id:string;
    email:string;
  }
}
interface UsuariosResponse{
  usuarios: Usuario[];
  links:any;
  meta:any;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getAuth: EventEmitter<boolean> = new EventEmitter(false);
  // getAuth: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public adminsSubject: Subject<void> = new Subject<void>();
  public deleteAdminsSubject: Subject<void> = new Subject<void>();

  public agresSubject: Subject<void> = new Subject<void>();
  public deleteAgrSubject: Subject<void> = new Subject<void>();

  public agremiadosSubject: Subject<void> = new Subject<void>();
  public deleteAgremiadoSubject: Subject<void> = new Subject<void>();

  public addAgremiadoSubject: Subject<void> = new Subject<void>();

  isLoggedIn = false;


  private api = AppSettings.readAppSettings().taskSettings.apiURL;

  constructor(private http: HttpClient) { }

  setAuthStatus(isAuthenticated: boolean) {
    this.getAuth.emit(isAuthenticated);
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  loginIn(user: any) {
    return this.http.post(this.api + '/api/login', user, {
      withCredentials: true
    }).pipe(
      tap(() => {
        this.getAuth.emit(true); // Emitir un evento para indicar que el usuario está autenticado
        this.setAuthStatus(true);
        this.isLoggedIn = true;
      })
    );
  }

  agregarUsuario(user: any) {
    return this.http.post(this.api + '/api/nuevousuario', user, {
      withCredentials: true
    });
  }



  // agregarUsuario(user: any): Observable<any> {
  //   return this.http.post(this.api + '/api/nuevousuario', user, this.httpOptions)
  //     .pipe(
  //       catchError(error => {
  //         console.error('Error en la solicitud agregarUsuarios:', error);
  //         throw error; // Propagar el error para que sea manejado en el lugar donde se llama a este método
  //       })
  //     );
  // }
  

  getUserInfo() {
    return this.http.get(this.api + '/api/profileadmin', {
      withCredentials: true
    });
  }



  logout() {
    return this.http.post(this.api + '/api/logoutadmin', null, {
      withCredentials: true
    }).pipe(
      tap(() => {
        this.getAuth.emit(false);
        // this.setAuthStatus(false);
        this.isLoggedIn = false;
      })
    );
  }

  getVerempresas() {
    return this.http.get(this.api + '/api/verempresa', {
      withCredentials: true
    });
  }

  getVerproductos() {
    return this.http.get(this.api + '/api/verproducto', {
      withCredentials: true
    });
  }

  getVernombreproductos(): Observable<string[]> {
    return this.http.get<string[]>(this.api + '/api/verproducto', {
      withCredentials: true
    });
  }

  getVernombreempresas(): Observable<string[]> {
    return this.http.get<string[]>(this.api + '/api/verempresa', {
      withCredentials: true
    });
  }

  getVerUnidades() {
    return this.http.get(this.api + '/api/verunidad', {
      withCredentials: true
    });
  }

  getVernombreunidades(): Observable<string[]> {
    return this.http.get<string[]>(this.api + '/api/verunidad', {
      withCredentials: true
    });
  }
 
  

  getVerTipos() {
    return this.http.get(this.api + '/api/vertipo', {
      withCredentials: true
    });
  }

  getVerOrigen() {
    return this.http.get(this.api + '/api/verorigen', {
      withCredentials: true
    });
  }

  getVerPapeleraI() {
    return this.http.get(this.api + '/api/verarchivadosi', {
      withCredentials: true
    });
  }

  getVerPapeleraE() {
    return this.http.get(this.api + '/api/verarchivadose', {
      withCredentials: true
    });
  }
  getVerIngresos() {
    return this.http.get(this.api + '/api/veringreso', {
      withCredentials: true
    });
  }

  getVerEgresos() {
    return this.http.get(this.api + '/api/veregreso', {
      withCredentials: true
    });
  }

  getVerUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.api + '/api/verusuarios', {
      withCredentials: true
    });
  }
 
   



  archivarIngreso(id: number): Observable<any> {
    const url = `${this.url}/archivaringreso/${id}`;
    return this.http.post<any>(url, {});
  }

  archivarEgreso(id: number): Observable<any> {
    const url = `${this.url}/archivaregreso/${id}`;
    return this.http.post<any>(url, {});
  }

  recuperarIngreso(id: number): Observable<any> {
    const url = `${this.url}/recuperaringreso/${id}`;
    return this.http.post<any>(url, {});
  }
  recuperarEgreso(id: number): Observable<any> {
    const url = `${this.url}/recuperaregreso/${id}`;
    return this.http.post<any>(url, {});
  }


  getVeringresos() {
    return this.http.get(this.api + '/api/veringreso', {
      withCredentials: true
    });
  }

  nuevaempresa(empresa: any) {
    return this.http.post(this.api + '/api/nuevaempresa', empresa, {
      withCredentials: true
    });
  }

  eliminarProducto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/eliminarproducto/${id}`);
  }


  private url = 'http://localhost:8000/api';

  agregarempresa1(datosNuevaEmpresa: any): Observable<any> {
    return this.http.post<any>(`${this.url}/nuevaempresa`, datosNuevaEmpresa);
  }

  obtenerEmpresaPorId(id: number): Observable<any>{
    return this.http.get<any>(`${this.url}/obtenerempresa/${id}`);
  }
  obtenerProductoPorId(id: number): Observable<any>{
    return this.http.get<any>(`${this.url}/obtenerproducto/${id}`);
  }
  obtenerUnidadPorId(id: number): Observable<any>{
    return this.http.get<any>(`${this.url}/obtenerunidad/${id}`);
  }
  obtenerTipoPorId(id: number): Observable<any>{
    return this.http.get<any>(`${this.url}/obtenertipo/${id}`);
  }
  obtenerOrigenPorId(id: number): Observable<any>{
    return this.http.get<any>(`${this.url}/obtenerorigen/${id}`);
  }

  obtenerIngresoPorId(id: number): Observable<any>{
    return this.http.get<any>(`${this.url}/obteneringreso/${id}`);
  }
  obtenerEgresoPorId(id: number): Observable<any>{
    return this.http.get<any>(`${this.url}/obteneregreso/${id}`);
  }


  actualizarempresa(id: number, datosActualizados: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/actualizarempresa/${id}`, datosActualizados);
  }

  actualizarproducto(id: number, datosActualizadosProducto: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/actualizarproducto/${id}`, datosActualizadosProducto);
  }

  actualizarunidad(id: number, datosActualizados: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/actualizarunidad/${id}`, datosActualizados);
  }

  actualizartipo(id: number, datosActualizados: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/actualizartipo/${id}`, datosActualizados);
  }
  actualizarorigen(id: number, datosActualizados: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/actualizarorigen/${id}`, datosActualizados);
  }

  actualizaringreso(id: number, datosActualizados: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/actualizaringreso/${id}`, datosActualizados);
  }

  actualizaregreso(id: number, datosActualizados: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/actualizaregreso/${id}`, datosActualizados);
  }

  

  private apiUrl = 'http://localhost:8000/api/nuevaempresa';


agregarempresa(empresaData: any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.post<any>(this.apiUrl, empresaData, { headers });
}

private apiUrl1 = 'http://localhost:8000/api/nuevoproducto';


agregarProducto(productoData: any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.post<any>(this.apiUrl1, productoData, { headers });
}


private apiUrl2 = 'http://localhost:8000/api/nuevaunidad';


agregarUnidad(unidadData: any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.post<any>(this.apiUrl2, unidadData, { headers });
}

private apiUrl3 = 'http://localhost:8000/api/nuevotipo';


agregarTipo(tipoData: any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.post<any>(this.apiUrl3, tipoData, { headers });
}

private apiUrl4 = 'http://localhost:8000/api/nuevoorigen';


agregarOrigen(origenData: any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.post<any>(this.apiUrl4, origenData, { headers });
}
private apiUrl5 = 'http://localhost:8000/api/nuevoingreso';


agregarIngreso(ingresoData: any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.post<any>(this.apiUrl5, ingresoData, { headers });
}
  

private apiUrl6 = 'http://localhost:8000/api/nuevoegreso';


agregarEgreso(egresoData: any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.post<any>(this.apiUrl6, egresoData, { headers });
}

}
