import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit{
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
