import { Component, Input } from '@angular/core';
import { libros } from '../services/model/libros.model'; 


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

  @Input() libro: libros = {
    nombre: '',
    autor: '',
  };

}
