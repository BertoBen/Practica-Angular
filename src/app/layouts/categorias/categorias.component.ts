import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagen } from './imagen.model';
import { ImagenservicioService } from './imagenservicio.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  @Input() imagen?: Imagen;

  imagenes: Imagen[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private imagenService:ImagenservicioService
  ) { }

  ngOnInit(): void {
    this.obtenerImagenesRest();


  }
  private obtenerImagenesRest() {
    this.imagenService.obtenerImagenesRest().subscribe(
      (data) => {
        data.forEach( (imagen) => {
          const imagenAIncluir: Imagen = new Imagen(imagen.id, imagen.nombre, imagen.imagen);
          this.imagenes.push(imagenAIncluir);
        })
      }
    )
  }

}
