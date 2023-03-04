import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit{
  habilidad: Habilidades = null;

  constructor(private habilidadS: HabilidadesService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadS.detail(id).subscribe(data => {
      this.habilidad = data;
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadS.update(id, this.habilidad).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar habilidad");
      this.router.navigate(['']);
    }
    )
  }
}
