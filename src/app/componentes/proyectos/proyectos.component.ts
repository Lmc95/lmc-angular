import { Component, OnInit } from '@angular/core';
import { SProyectosService } from 'src/app/service/s-proyectos.service';
import { TokenService } from 'src/app/service/token.service';
import { Proyectos } from 'src/app/model/proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectos: Proyectos[] = [];

  constructor(private sProyectos: SProyectosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }

    // Obtener el valor de sessionStorage
    const authUsername = window.sessionStorage.getItem('AuthUsername');

    // Verificar si el valor es "admin"
    this.isAdminUser = authUsername === 'admin';
  }

  cargarProyectos(): void {
    this.sProyectos.lista().subscribe(data => {
      this.proyectos = data;
    })
  }

  delete(id: number){
    if(id != undefined){
      this.sProyectos.delete(id).subscribe(data => {
        this.cargarProyectos();
      }, err => {
        alert("No fue posible eliminar el proyecto");
      }
      )
    }
  }

  // Agregar esta propiedad para verificar si el usuario es admin o no
  isAdminUser = false;


}
