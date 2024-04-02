import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class VerempresaService {

  url='http://localhost:8000/api'

  constructor(private http:HttpClient) {}

  getVerEmpresas() {
    return this.http.get(this.url+'/verempresa', {
      withCredentials: true
    });
  }

  getVerIngresos() {
    return this.http.get(this.url+'/veringreso', {
      withCredentials: true
    });
  }

}
