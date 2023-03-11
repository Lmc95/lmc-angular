import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  habilidad: Habilidades[] = [];

  constructor(private habilidadS: HabilidadesService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidades();
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

  cargarHabilidades(): void {
    this.habilidadS.lista().subscribe(data => {
      this.habilidad = data;
    })
  }

  delete(id: number){
    if(id != undefined){
      this.habilidadS.delete(id).subscribe(data => {
        this.cargarHabilidades();
      }, err => {
        alert("No fue posible eliminar la habilidad");
      }
      )
    }
  }

  // Agregar esta propiedad para verificar si el usuario es admin o no
  isAdminUser = false;
}
