// Importa a função platformBrowserDynamic para inicializar o Angular no navegador
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importa a função registerLicense do pacote Syncfusion para registrar a licença
import { registerLicense } from '@syncfusion/ej2-base';

// Importa o módulo principal da aplicação (AppModule)
import { AppModule } from './app/app.module';

// Registra a licença da biblioteca Syncfusion (necessário para recursos avançados)
registerLicense('');

// Inicializa e bootstrapiza o módulo Angular no navegador
platformBrowserDynamic()
  .bootstrapModule(AppModule) // Chama a função bootstrapModule com o módulo principal
  .catch((err) => console.error(err)); // Captura e exibe qualquer erro ocorrido durante a inicialização
