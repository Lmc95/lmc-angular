import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.css']
})
export class NewProjectsComponent implements OnInit{
  nombre: string = '';
  descripcion: string = '';
  img: string = '';

  proyectos: Proyectos = null
  constructor( private sProyectos: SProyectosService, private router: Router) { }

  ngOnInit(): void {

  }


  onCreate(): void{
    const proyectos = new Proyectos(this.nombre, this.descripcion, this.img);
    this.sProyectos.save(proyectos).subscribe(data => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    )
  }
}
