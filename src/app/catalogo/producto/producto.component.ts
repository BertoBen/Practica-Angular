import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../catalogo.model';
import { ProductoservicioService } from '../productoservicio.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];

  @Input() producto?: Producto;

  idArticulo?: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productoService: ProductoservicioService
  ) { }

  ngOnInit(): void {
    this.obtenerProductosRest();

    
    this.idArticulo = this.route.snapshot.paramMap.get('idArticulo') ?? undefined;

  }

  private obtenerProductosRest() {
    this.productoService.obtenerProductosRest().subscribe(
      (data) => {
        const idArticulo = this.route.snapshot.paramMap.get('idArticulo') ?? '';
        const productoEncontrado = data.find(producto => producto.id === Number(idArticulo));
        if (productoEncontrado) {
          this.producto = new Producto(productoEncontrado.id, productoEncontrado.nombre, productoEncontrado.precio, productoEncontrado.descripcion, productoEncontrado.imagen);
        }
      }
    );
  }

}
