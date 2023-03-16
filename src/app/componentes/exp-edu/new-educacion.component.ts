import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void{
    // Obtener el valor de sessionStorage
    const authUsername = window.sessionStorage.getItem('AuthUsername');

    // Verificar si el valor es "admin"
    this.isAdminUser = authUsername === 'admin';
  }
  isAdminUser = false;

  onCreateEdu(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(data => {
      alert("Educacion añadida!");
      this.router.navigate(['']);
    }, err => {
      alert("Error");
      this.router.navigate(['']);
    }
    )
  }
}
