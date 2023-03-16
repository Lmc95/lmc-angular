import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { SProyectosService } from 'src/app/service/s-proyectos.service';


@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.css']
})

export class NewProjectsComponent implements OnInit {
  proyecto: Proyectos = new Proyectos("","","","");

  constructor(private projectService: SProyectosService, public imageService: ImageService, private router: Router) { }

  ngOnInit(): void {
    // Obtener el valor de sessionStorage
    const authUsername = window.sessionStorage.getItem('AuthUsername');

    // Verificar si el valor es "admin"
    this.isAdminUser = authUsername === 'admin';
  }
  isAdminUser = false;

  onSubmit(): void {
    // Asignamos la URL de la imagen seleccionada al objeto proyecto
    this.proyecto.img = this.imageService.url;
    // Enviamos la petición HTTP POST para crear el proyecto
    this.projectService.save(this.proyecto).subscribe(data => {
      alert('Proyecto creado exitosamente');
      this.router.navigate(['']);
      // Reiniciamos la vista previa de la imagen
      this.imageService.url = "";
    }, err => {
      alert('Error al crear proyecto');
      this.router.navigate(['']);
    });
  }


  uploadImage(event: any) {
    // Invocamos al método de servicio para subir la imagen al storage
    this.imageService.uploadImg(event, "proyecto_" + Date.now().toString());
  }
}

