import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent {
  proyecto: Proyectos = null;

  constructor(private proyectoService: SProyectosService, private activatedRouter: ActivatedRoute, private router: Router, public imagenService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(data => {
      this.proyecto = data;
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.img = this.imagenService.url;
    this.proyectoService.update(id, this.proyecto).subscribe(data => {

      this.router.navigate(['']);
      this.imagenService.url = "";
    }, err => {
      alert("Error al modificar proyecto");
      this.router.navigate(['']);
    });
  }


  uploadImage(event: any) {
    // Invocamos al método de servicio para subir la imagen al storage
    this.imagenService.uploadImg(event, "proyecto_" + Date.now().toString());
  }

}

