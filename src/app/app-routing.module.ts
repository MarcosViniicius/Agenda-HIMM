// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFormComponent } from './event-form/event-form.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Adiciona esta linha
  { path: 'event-form', component: EventFormComponent },
  { path: 'notes', component: NotesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Altera a rota padrão para '/home'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
