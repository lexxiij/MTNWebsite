// main.ts — This is the entry point of your Angular app.
// Think of it as the "on switch" — it boots up everything.

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
