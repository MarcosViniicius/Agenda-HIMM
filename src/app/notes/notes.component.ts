// Importa Component, OnInit, FormBuilder, FormGroup e Validators do módulo core e do módulo de formulários reativos do Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Decorador @Component para configurar a classe como um componente Angular
@Component({
  // Seletor do componente utilizado em templates HTML
  selector: 'app-notes',

  // Caminho para o arquivo HTML associado a este componente
  templateUrl: './notes.component.html',

  // Estilos CSS específicos para este componente
  styleUrls: ['./notes.component.css'],
})
// Implementação da interface OnInit para executar a lógica de inicialização
export class NotesComponent implements OnInit {
  // FormGroup para gerenciar o formulário de anotações
  notesForm: FormGroup;

  // Lista de anotações
  notesList: string[] = [];

  // Construtor da classe que recebe uma instância do FormBuilder para criar o formulário
  constructor(private formBuilder: FormBuilder) {
    // Inicializa o formulário com um campo 'note' obrigatório
    this.notesForm = this.formBuilder.group({
      note: ['', Validators.required],
    });
  }

  // Método do ciclo de vida OnInit para inicializar o componente
  ngOnInit(): void {
    // Carrega anotações existentes do localStorage ao inicializar o componente
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      this.notesList = JSON.parse(savedNotes);
    }
  }

  // Método para adicionar uma nova anotação à lista
  addNote(): void {
    // Verifica se o formulário é válido antes de adicionar a anotação
    if (this.notesForm.valid) {
      // Obtém o valor do campo 'note' do formulário
      const newNote = this.notesForm.get('note')?.value;

      // Adiciona a nova anotação à lista e reseta o formulário
      this.notesList.push(newNote);
      this.notesForm.reset();

      // Salva as notas no localStorage após adicionar uma nova nota
      localStorage.setItem('notes', JSON.stringify(this.notesList));
    }
  }

  // Método para excluir uma anotação da lista
  deleteNote(index: number): void {
    // Remove a anotação pelo índice na lista
    this.notesList.splice(index, 1);

    // Atualiza o localStorage após excluir uma nota
    localStorage.setItem('notes', JSON.stringify(this.notesList));
  }
}
