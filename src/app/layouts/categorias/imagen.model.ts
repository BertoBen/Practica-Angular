export class Imagen {
    private id: number;
    private nombre: string;
    private imagen: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

  constructor(id: number, nombre: string, imagen: string) {
    this.id = id
    this.nombre = nombre
    this.imagen = imagen
  }

}