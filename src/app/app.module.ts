import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpEduComponent } from './componentes/exp-edu/exp-edu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/exp-edu/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/exp-edu/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/exp-edu/new-educacion.component';
import { EditEducacionComponent } from './componentes/exp-edu/edit-educacion.component';
import { EditSkillsComponent } from './componentes/skills/edit-skills.component';
import { NewSkillsComponent } from './componentes/skills/new-skills.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ImageService } from './service/image.service';
import { EditPerfilComponent } from './componentes/perfil/edit-perfil.component';
import { NewProjectsComponent } from './componentes/proyectos/new-projects.component';
import { ImagenPerfilService } from './service/imagen-perfil.service';
import { EditProjectsComponent } from './componentes/proyectos/edit-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpEduComponent,
    FooterComponent,
    HeaderComponent,
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
    PerfilComponent,
    EditPerfilComponent,
    NewProjectsComponent,
    EditProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider,
    ImageService,
    ImagenPerfilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
