import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagen } from './imagen.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagenservicioService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerImagenesRest(): Observable<Imagen[]> {
    const urlEndPoint: string = "http://localhost:3001/categorias";
    return this.http.get<Imagen[]>(urlEndPoint);
  }

}
