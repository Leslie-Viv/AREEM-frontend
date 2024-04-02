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
    return this.http.get(this.api + '/api/profilegerent', {
      withCredentials: true
    });
  }



  logout() {
    return this.http.post(this.api + '/api/logoutgerente', null, {
      withCredentials: true
    }).pipe(
      tap(() => {
        this.getAuthFin.emit(false);
      })
    );
  }

  

}