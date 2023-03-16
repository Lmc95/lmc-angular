import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent {
  educacion: Educacion = null;

  constructor(private educacionS: EducacionService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.details(id).subscribe(data => {
      this.educacion = data;
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
    this.educacionS.update(id, this.educacion).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    }
    )
  }
}
