import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from './producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoservicioService {

  constructor(
    private http: HttpClient
  ) { }


    
  public obtenerProductosRest(): Observable<IProducto[]> {
    const urlEndPoint: string = "http://localhost:3001/items";
    return this.http.get<IProducto[]>(urlEndPoint);
  }



}



