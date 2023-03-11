import { Component } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { EducacionService } from 'src/app/service/educacion.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-exp-edu',
  templateUrl: './exp-edu.component.html',
  styleUrls: ['./exp-edu.component.css']
})
export class ExpEduComponent {
  expe: Experiencia[] = [];
  educacion: Educacion[] = [];

  constructor(private sExperiencia: SExperienciaService, private educacionS: EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    this.cargarEducacion();
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

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }
  cargarEducacion(): void{
    this.educacionS.lista().subscribe(data => {this.educacion = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(data => {
        this.cargarExperiencia();
      }, err => {
        alert("Error al intentar eliminar experiencia.");
      }
      )
    }
  }

  deleteEdu(id?: number) {
    if(id != undefined) {
      this.educacionS.delete(id).subscribe(data => {
        this.cargarEducacion();
      }, err => {
        alert("Error al intentar eliminar educacion");
      }
      )
    }
  }

  // Agregar esta propiedad para verificar si el usuario es admin o no
  isAdminUser = false;
}


