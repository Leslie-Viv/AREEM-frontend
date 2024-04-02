import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { AppSettings } from 'appsettings-json-reader';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuarios } from '../administrador/nuevosusuarios/nuevosusuarios.component';

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
        // this.setAuthStatus(true);
        this.isLoggedIn = true;
      })
    );
  }

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
  getVerUnidades() {
    return this.http.get(this.api + '/api/verunidad', {
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
    return this.http.get(this.api + '/api/verarchivadosi', {
      withCredentials: true
    });
  }
  getVerIngresos() {
    return this.http.get(this.api + '/api/veringreso', {
      withCredentials: true
    });
  }

  getVerUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.api + '/api/verusuarios', {
      withCredentials: true
    });
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

  actualizarempresa(id: number, datosActualizados: any): Observable<any> {
    return this.http.patch<any>(`${this.url}/actualizarempresa/${id}`, datosActualizados);
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
  
}
