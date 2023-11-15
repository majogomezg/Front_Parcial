import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { libros } from './model/libros.model';


@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private apiUrl = 'http://localhost:8080/libro';

  constructor(private httpClient: HttpClient) { }

  getLibros(): Observable<libros[]> {
    return this.httpClient.get<libros[]>(this.apiUrl+"/list");
  }

  deleteLibro(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }

  addLibro(libro: libros): Observable<libros> {
    return this.httpClient.post<libros>(this.apiUrl + "/create", libro);
  }
}