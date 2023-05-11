import { Component, Input, OnInit } from '@angular/core';
import { Imagen } from '../categorias/imagen.model';

@Component({
  selector: 'app-cardcategoria',
  templateUrl: './cardcategoria.component.html',
  styleUrls: ['./cardcategoria.component.css']
})
export class CardcategoriaComponent implements OnInit{
  @Input() imagen?: Imagen;

  constructor() {

  }

  ngOnInit(): void {
  }


}
