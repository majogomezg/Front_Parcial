import { Component,OnInit } from '@angular/core';
import { libros } from './services/model/libros.model'; 
import { LibrosService } from './services/examen-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'examen_front';

  libros: libros[] = [];  

  constructor(private librosService: LibrosService,private router: Router) {}

  ngOnInit() {
    this.obtenerLibros();  
  }

  obtenerLibros() {
    this.librosService.getLibros().subscribe(  
      (data) => {
        this.libros = data;
      },
      (error) => {
        console.error('Error obteniendo libros: ', error);
      }
    );
  }

  irAEditarACrear() {
    this.router.navigate(['crear']);
  }



}

