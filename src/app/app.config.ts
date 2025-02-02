import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),
    provideAnimations(),
    importProvidersFrom(
      ToastrModule.forRoot({
        positionClass: 'toast-bottom-right', // Change to top-right, bottom-left, etc.
        timeOut: 3000, // Increase toast display duration
        // extendedTimeOut: 1000, // Extra time before disappearing
        preventDuplicates: true, // Avoid duplicate toasts
        // progressBar: true, // Show progress bar
        closeButton: true, // Show close button
        tapToDismiss: true, // Dismiss on click
        easing: 'ease-in-out', // Smooth animation
      })
    )
  ]
};
