import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { libros } from './model/libros.model';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private apiUrl = 'http://localhost:8080/biblioteca';

  constructor(private httpClient: HttpClient) { }

  getLibros(): Observable<libros[]> {
    return this.httpClient.get<libros[]>(this.apiUrl + '/list');
  }

  addLibro(libro: libros): Observable<libros> {
    return this.httpClient.post<libros>(this.apiUrl + '/create', libro);
  }
}
