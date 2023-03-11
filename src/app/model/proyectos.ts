export class Proyectos {
  id?: number;
  nombre: string;
  descripcion: string;
  img: string;
  proyectoUrl: string;

  constructor(nombre: string, descripcion: string, img: string, proyectoUrl: string){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.img = img;
    this.proyectoUrl = proyectoUrl;
  }
}
