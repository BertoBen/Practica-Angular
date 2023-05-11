import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../catalogo.model';
import { ProductoservicioService } from '../productoservicio.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productoService: ProductoservicioService
  ) { }
  
  ngOnInit(): void {
    this.obtenerProductosRest();


  }
  private obtenerProductosRest() {
    this.productoService.obtenerProductosRest().subscribe(
      (data) => {
        data.forEach( (producto) => {
          const productoAIncluir: Producto = new Producto(producto.id, producto.nombre, producto.precio, producto.descripcion, producto.imagen);
          this.productos.push(productoAIncluir);
        })
      }
    )
  }

  public navegarAFicha(idArticulo: number): void {
    this.router.navigate(['producto',idArticulo]);
  }

}
