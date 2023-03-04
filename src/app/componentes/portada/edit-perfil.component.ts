import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit{
  pers: persona = null;

  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(data => {
      this.pers = data;
    }, err => {
      alert("Error al editar");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.pers).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al editar");
      this.router.navigate(['']);
    }
    )
  }

  uploadImg($event: any){

  }


}
