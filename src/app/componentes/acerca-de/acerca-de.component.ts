import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { TokenService } from 'src/app/service/token.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
  pers: persona = null;

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPerfil();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarPerfil(){
    this.personaService.detail(1).subscribe(data => {
      this.pers = data
    }
    )
  }
}
