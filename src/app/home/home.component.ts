// Importa Component e OnInit do módulo core do Angular
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

// Importa o serviço EventService e o tipo MyEvent do arquivo event.service
import { EventService, MyEvent } from '../event.service';

// Decorador @Component para configurar a classe como um componente Angular
@Component({
  // Seletor do componente utilizado em templates HTML
  selector: 'app-home',

  // Caminho para o arquivo HTML associado a este componente
  templateUrl: './home.component.html',

  // Estilos CSS específicos para este componente
  styleUrls: ['./home.component.css'],
})
// Implementação da interface OnInit para executar a lógica de inicialização
export class HomeComponent implements OnInit {
  // Array para armazenar eventos
  events: MyEvent[] = [];

  // Flag para indicar se está no modo de edição
  editMode: boolean = false;

  // Índice do evento em edição
  editingIndex: number = -1;

  // Evento em edição
  editedEvent: MyEvent = { name: '', date: new Date(), details: '' };

  // Construtor da classe que recebe uma instância do serviço EventService
  constructor(private eventService: EventService) {}

  // Método do ciclo de vida OnInit para inicializar o componente
  ngOnInit(): void {
    // Subscreve-se ao observable events$ no EventService para receber atualizações de eventos
    this.eventService.events$.subscribe((events) => {
      this.events = events;
    });
  }

  // Método para visualizar detalhes de um evento
  viewEventDetails(event: MyEvent): void {
    console.log(
      `Detalhes do Evento: Nome: ${event.name} - Data: ${event.date} - Detalhes: ${event.details}`
    );
    // Adicione lógica para abrir uma página de detalhes ou realizar outra ação
  }

  // Método para entrar no modo de edição de um evento
  editEvent(index: number): void {
    this.editMode = true;
    this.editingIndex = index;
    this.editedEvent = { ...this.events[index] };
  }

  // Método para salvar as alterações em um evento
  saveEvent(): void {
    if (this.editingIndex !== -1) {
      // Chama o método updateEvent do EventService para salvar as alterações
      this.eventService.updateEvent(this.editingIndex, this.editedEvent);

      // Reinicializa as variáveis de edição
      this.editMode = false;
      this.editingIndex = -1;
      this.editedEvent = { name: '', date: new Date(), details: '' };
    }
  }

  // Método para excluir um evento
  deleteEvent(index: number): void {
    // Chama o método deleteEvent do EventService para excluir o evento
    this.eventService.deleteEvent(index);
  }
  // Propriedade para armazenar o título do componente
  title = 'projeto-final-ppi-pds';

  // Propriedade para armazenar a data inicial do calendário
  public dateValue: Date = new Date(2000, 0, 1);

  // Propriedade para armazenar a data mínima permitida no calendário
  public minDate: Date = new Date(1900, 0, 1);

  // Propriedade para armazenar a data máxima permitida no calendário
  public maxDate: Date = new Date(2100, 11, 31);

  showCalendar: boolean = false;

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }
}
