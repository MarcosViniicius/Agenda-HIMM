// Importa Injectable do módulo core do Angular e BehaviorSubject do pacote RxJS
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Define a interface MyEvent para representar um evento
export interface MyEvent {
  name: string;
  date: Date;
  details: string;
}

// Decorador @Injectable para tornar a classe injetável em outros componentes e serviços
@Injectable({
  providedIn: 'root',
})
// Implementação da classe do serviço
export class EventService {
  // BehaviorSubject para gerenciar o fluxo de eventos
  private eventsSource = new BehaviorSubject<MyEvent[]>([]);
  events$ = this.eventsSource.asObservable();

  // Chave para armazenar eventos no localStorage
  private readonly STORAGE_KEY = 'myEvents';

  // Construtor da classe
  constructor() {
    // Carrega os eventos do localStorage ao inicializar o serviço
    this.loadEvents();
  }

  // Método privado para carregar eventos do localStorage
  private loadEvents(): void {
    const storedEvents = localStorage.getItem(this.STORAGE_KEY);
    if (storedEvents) {
      const parsedEvents = JSON.parse(storedEvents) as MyEvent[];
      this.updateEvents(parsedEvents);
    }
  }

  // Método privado para atualizar eventos no BehaviorSubject e localStorage
  private updateEvents(updatedEvents: MyEvent[]): void {
    this.eventsSource.next(updatedEvents);
    this.saveEvents(updatedEvents);
  }

  // Método privado para salvar eventos no localStorage
  private saveEvents(events: MyEvent[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(events));
  }

  // Método para obter a lista atual de eventos
  getEvents(): MyEvent[] {
    return this.eventsSource.getValue();
  }

  // Método para adicionar um novo evento à lista
  addEvent(event: MyEvent): void {
    const currentEvents = this.eventsSource.getValue();
    const updatedEvents = [...currentEvents, event];
    this.updateEvents(updatedEvents);
  }

  // Método para excluir um evento da lista pelo índice
  deleteEvent(index: number): void {
    const currentEvents = this.eventsSource.getValue();

    if (index >= 0 && index < currentEvents.length) {
      const updatedEvents = [
        ...currentEvents.slice(0, index),
        ...currentEvents.slice(index + 1),
      ];
      this.updateEvents(updatedEvents);
    } else {
      console.error('Index out of range. Unable to delete event.');
    }
  }

  // Método para atualizar um evento na lista pelo índice
  updateEvent(index: number, updatedEvent: MyEvent): void {
    const currentEvents = this.eventsSource.getValue();

    if (index >= 0 && index < currentEvents.length) {
      const updatedEvents = [
        ...currentEvents.slice(0, index),
        updatedEvent,
        ...currentEvents.slice(index + 1),
      ];
      this.updateEvents(updatedEvents);
    } else {
      console.error('Index out of range. Unable to update event.');
    }
  }
}
