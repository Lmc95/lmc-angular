import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent {
  nombre: string;
  porcentaje: number;

  constructor(private habilidadesS: HabilidadesService, private router: Router) { }

  ngOnInit(): void{
    // Obtener el valor de sessionStorage
    const authUsername = window.sessionStorage.getItem('AuthUsername');

    // Verificar si el valor es "admin"
    this.isAdminUser = authUsername === 'admin';
  }
  isAdminUser = false;

  onCreate(): void{
    const habilidad = new Habilidades(this.nombre, this.porcentaje);
    this.habilidadesS.save(habilidad).subscribe(data => {
      alert("Habilidad creada exitosamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo al añadir la habilidad");
      this.router.navigate(['']);
    }
    )
  }
}
