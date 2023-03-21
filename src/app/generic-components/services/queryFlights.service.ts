import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
const urlBase = environment.URL_BASE;

@Injectable({
  providedIn: 'root'
})
export class QueryFlightService {
  httpHeaders: HttpHeaders;


  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getFlights(): Observable<any> {
    return this.http.get(urlBase+`${1}`);
  }
}
