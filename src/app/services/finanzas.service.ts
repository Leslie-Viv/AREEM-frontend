import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from 'appsettings-json-reader';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FinanzasService {

  getAuthFin: EventEmitter<boolean> = new EventEmitter(false);
  private api = AppSettings.readAppSettings().taskSettings.apiURL;
  public requestsSubject: Subject<void> = new Subject<void>();
  public deleteRequestSubject: Subject<void> = new Subject<void>();


  constructor(private http: HttpClient) { }

  
  setAuthStatus(isAuthenticated: boolean) {
    this.getAuthFin.emit(isAuthenticated);
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
        this.getAuthFin.emit(true); // Emitir un evento para indicar que el usuario está autenticado
        // this.setAuthStatus(true);
      })
    );
  }




  getUserInfo() {
    return this.http.get(this.api + '/api/profilefinanzas', {
      withCredentials: true
    });
  }



  logout() {
    return this.http.post(this.api + '/api/logoutfinanzas', null, {
      withCredentials: true
    }).pipe(
      tap(() => {
        this.getAuthFin.emit(false);
      })
    );
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

  private apiUrl6 = 'http://localhost:8000/api/nuevoegreso';


agregarEgreso(egresoData: any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.post<any>(this.apiUrl6, egresoData, { headers });
}



  

}
