import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//fontawesome
// import fontawesome from '@fortawesome/fontawesome';
// import {faChevronLeft, faChevronRight} from '@fortawesome/fontawesome-free-solid';
// import {faCircle} from '@fortawesome/fontawesome-free-regular';
// fontawesome.library.add(faChevronLeft, faChevronRight,faCircle);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
