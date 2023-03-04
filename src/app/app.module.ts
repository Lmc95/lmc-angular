import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExpEduComponent } from './componentes/exp-edu/exp-edu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/exp-edu/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/exp-edu/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/exp-edu/new-educacion.component';
import { EditEducacionComponent } from './componentes/exp-edu/edit-educacion.component';
import { EditSkillsComponent } from './componentes/skills/edit-skills.component';
import { NewSkillsComponent } from './componentes/skills/new-skills.component';
import { EditPerfilComponent } from './componentes/portada/edit-perfil.component';
import { NewProjectsComponent } from './componentes/proyectos/new-projects.component';



@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    ExpEduComponent,
    FooterComponent,
    HeaderComponent,
    PortadaComponent,
    ProyectosComponent,
    SkillsComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditSkillsComponent,
    NewSkillsComponent,
    EditPerfilComponent,
    NewProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
