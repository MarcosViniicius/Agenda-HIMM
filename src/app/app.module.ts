import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EventFormComponent } from './event-form/event-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars'; // Mantendo esta linha

// Decorador @NgModule para configurar o módulo Angular
@NgModule({
  // Declaração dos componentes que pertencem a este módulo
  declarations: [
    AppComponent,
    EventFormComponent,
    HomeComponent,
    NotesComponent,
  ],

  // Importa outros módulos que serão utilizados neste módulo
  imports: [
    BrowserModule, // Módulo principal do navegador
    FormsModule, // Módulo de formulários do Angular
    RouterModule, // Módulo de roteamento do Angular
    AppRoutingModule, // Módulo de rotas personalizadas
    CalendarModule, // Módulo do calendário Syncfusion
    ReactiveFormsModule, // Módulo de formulários reativos do Angular
  ],

  // Lista de provedores de serviços para injeção de dependência
  providers: [],

  // Componente raiz da aplicação que será iniciado
  bootstrap: [AppComponent],
})
// Implementação da classe do módulo
export class AppModule {}
