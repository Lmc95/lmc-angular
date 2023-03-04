export class persona{
  id?: number;
  nombre: string;
  apellido: string;
  rol: string;
  descripcion: string;
  img: string;

  constructor(nombre: string,apellido: string, rol: string, descripcion: string, img: string, redes: string){
      this.nombre = nombre;
      this.apellido = apellido;
      this.rol = rol;
      this.descripcion = descripcion;
      this.img = img;
  }
}
