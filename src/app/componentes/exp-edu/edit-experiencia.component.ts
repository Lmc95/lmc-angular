import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent {
  expLab: Experiencia = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.details(id).subscribe(data => {
      this.expLab = data;
    }, err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    }
    )

    // Obtener el valor de sessionStorage
    const authUsername = window.sessionStorage.getItem('AuthUsername');

    // Verificar si el valor es "admin"
    this.isAdminUser = authUsername === 'admin';
  }
  isAdminUser = false;


  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    }
    )
  }
}
