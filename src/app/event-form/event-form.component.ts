// Importa os módulos necessários do Angular
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventService } from '../event.service';
import { DatePipe } from '@angular/common';

// Component decorator que define as propriedades do componente
@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
  providers: [DatePipe], // Adiciona o DatePipe aos providers
})
export class EventFormComponent {
  // Variável de controle para exibir ou ocultar o aviso
  showWarning: boolean = false;

  // Construtor do componente que injeta o serviço de eventos e o DatePipe
  constructor(private eventService: EventService, private datePipe: DatePipe) {}

  // Função chamada quando o formulário é enviado
  onSubmit(form: NgForm) {
    // Verifica se o título e a data estão preenchidos
    if (!form.value.name || !form.value.date) {
      // Exibe o aviso se campos estiverem vazios
      this.showWarning = true;
      this.hideWarningAfterDelay();
    } else {
      // Obtém a data atual formatada como string no formato 'yyyy-MM-dd'
      const today = this.getCurrentDate();

      // Obtém a data do evento a partir do formulário e formata
      const eventDate =
        this.datePipe.transform(form.value.date, 'yyyy-MM-dd') || '';

      // Verifica se a data do evento é anterior à data atual
      if (eventDate < today) {
        // Exibe o aviso se a data do evento for anterior à data atual
        this.showWarning = true;
        this.hideWarningAfterDelay();
      } else {
        // Adiciona o evento ao serviço de eventos
        console.log('Evento adicionado:', form.value);
        this.eventService.addEvent(form.value);

        // Limpa o formulário após a submissão
        form.reset();
      }
    }
  }

  // Função para ocultar o aviso após um atraso de 2 segundos
  private hideWarningAfterDelay() {
    setTimeout(() => {
      this.showWarning = false;
    }, 2000);
  }

  // Função para obter a data atual formatada
  private getCurrentDate(): string {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  }
}
